class SpaceAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // Enabled by default as requested!
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientOsc3: OscillatorNode | null = null;
  private lfoOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private autoStartAttached: boolean = false;

  constructor() {
    // Attach listener for first user interaction to satisfy browser autoplay policies
    if (typeof window !== 'undefined') {
      this.attachAutoStart();
    }
  }

  public init(): void {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      if (!this.isMuted) {
        if (this.ctx.state === 'running') {
          this.startAmbient();
        }
      }
    } catch {
      // Audio not supported
    }
  }

  public attachAutoStart(): void {
    if (this.autoStartAttached) return;
    this.autoStartAttached = true;

    const unlockHandler = () => {
      this.init();
      if (this.ctx) {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(() => {
            if (!this.isMuted) {
              this.startAmbient();
            }
          });
        } else if (!this.isMuted && !this.ambientOsc1) {
          this.startAmbient();
        }
      }

      // Cleanup unlock events once triggered
      window.removeEventListener('pointerdown', unlockHandler);
      window.removeEventListener('click', unlockHandler);
      window.removeEventListener('keydown', unlockHandler);
      window.removeEventListener('scroll', unlockHandler);
      window.removeEventListener('touchstart', unlockHandler);
    };

    window.addEventListener('pointerdown', unlockHandler, { once: true, passive: true });
    window.addEventListener('click', unlockHandler, { once: true, passive: true });
    window.addEventListener('keydown', unlockHandler, { once: true, passive: true });
    window.addEventListener('scroll', unlockHandler, { once: true, passive: true });
    window.addEventListener('touchstart', unlockHandler, { once: true, passive: true });
  }

  public toggleMute(): boolean {
    this.init();
    if (!this.ctx) return true;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
      this.playBeep(784, 0.09, 'sine', 0.16); // G5 pleasant activation chime
    } else {
      this.stopAmbient();
    }

    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public playBlip(freq: number = 880): void {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    // Boosted volume from 0.04 to 0.15 for crisp tactile audio
    this.playBeep(freq, 0.05, 'sine', 0.15);
  }

  public playLaser(): void {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.18);

      // Boosted gain from 0.04 to 0.16
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.masterGain || this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Ignore
    }
  }

  private playBeep(freq: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.15): void {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain || this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Ignore
    }
  }

  private startAmbient(): void {
    if (!this.ctx || this.ambientOsc1) return;
    try {
      const now = this.ctx.currentTime;

      // Master ambient gain - significantly boosted to 0.09 for immersive cosmic atmosphere
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.09, now + 1.2);

      // 1. Sub Bass Deep Void Drone (55 Hz - A1)
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, now);

      // 2. Harmonic Body Warmth (110 Hz - A2)
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(110, now);

      // 3. Ethereal Celestial Fifth (165 Hz - E3)
      this.ambientOsc3 = this.ctx.createOscillator();
      this.ambientOsc3.type = 'sine';
      this.ambientOsc3.frequency.setValueAtTime(164.81, now);

      // Warm analog-modeled resonant lowpass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(360, now);
      filter.Q.setValueAtTime(2.2, now);

      // Slow Breathing LFO (Low-Frequency Oscillator) for cosmic pulse
      this.lfoOsc = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.lfoOsc.frequency.setValueAtTime(0.1, now); // 10-second breath cycle
      lfoGain.gain.setValueAtTime(0.02, now);
      this.lfoOsc.connect(lfoGain);
      lfoGain.connect(this.ambientGain.gain);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      this.ambientOsc3.connect(filter);
      filter.connect(this.ambientGain);

      this.ambientGain.connect(this.masterGain || this.ctx.destination);

      this.ambientOsc1.start(now);
      this.ambientOsc2.start(now);
      this.ambientOsc3.start(now);
      this.lfoOsc.start(now);
    } catch {
      // Ignore
    }
  }

  private stopAmbient(): void {
    if (this.ambientGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      } catch {
        // Ignore
      }
    }

    setTimeout(() => {
      if (this.ambientOsc1) {
        try {
          this.ambientOsc1.stop();
          this.ambientOsc1.disconnect();
        } catch {
          // Ignore
        }
        this.ambientOsc1 = null;
      }
      if (this.ambientOsc2) {
        try {
          this.ambientOsc2.stop();
          this.ambientOsc2.disconnect();
        } catch {
          // Ignore
        }
        this.ambientOsc2 = null;
      }
      if (this.ambientOsc3) {
        try {
          this.ambientOsc3.stop();
          this.ambientOsc3.disconnect();
        } catch {
          // Ignore
        }
        this.ambientOsc3 = null;
      }
      if (this.lfoOsc) {
        try {
          this.lfoOsc.stop();
          this.lfoOsc.disconnect();
        } catch {
          // Ignore
        }
        this.lfoOsc = null;
      }
    }, 550);
  }
}

export const spaceAudio = new SpaceAudioEngine();

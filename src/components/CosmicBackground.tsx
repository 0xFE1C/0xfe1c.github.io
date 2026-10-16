import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / width;
      mouseRef.current.targetY = e.clientY / height;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.targetX = e.touches[0].clientX / width;
        mouseRef.current.targetY = e.touches[0].clientY / height;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 1. STARFIELD SETUP
    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      hue: number;
    }

    const starCount = Math.min(width > 768 ? 260 : 130, 300);
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.5 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.8 ? (Math.random() > 0.5 ? 200 : 270) : 0, // cyan, purple, or white
      });
    }

    // 2. METEOR / SHOOTING STAR SETUP
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }

    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * width * 1.2 - width * 0.1,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 9 + 12,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        opacity: 1,
        active: true,
      });
    };

    let meteorTimer = 0;

    // 3. BLACK HOLE ACCRETION PARTICLES
    interface InfallParticle {
      radius: number;
      angle: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
      verticalOffset: number;
    }

    const particleCount = width > 768 ? 160 : 90;
    const particles: InfallParticle[] = [];
    const palette = ['#67e8f9', '#22d3ee', '#818cf8', '#c084fc', '#f59e0b', '#fb923c', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        radius: Math.random() * 220 + 80,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.012 + 0.006) * (Math.random() > 0.5 ? 1 : 1),
        size: Math.random() * 2.2 + 0.6,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: Math.random() * 0.8 + 0.2,
        verticalOffset: (Math.random() - 0.5) * 14,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Background clear: Deep cosmic black void
      ctx.fillStyle = '#020108';
      ctx.fillRect(0, 0, width, height);

      // --- NEBULA GLOW CLOUDS ---
      const nebulaGrad1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.2) * 50,
        height * 0.3 + Math.cos(time * 0.2) * 40,
        20,
        width * 0.2,
        height * 0.3,
        width * 0.5
      );
      nebulaGrad1.addColorStop(0, 'rgba(88, 28, 135, 0.16)');
      nebulaGrad1.addColorStop(0.5, 'rgba(30, 27, 75, 0.08)');
      nebulaGrad1.addColorStop(1, 'rgba(2, 1, 8, 0)');
      ctx.fillStyle = nebulaGrad1;
      ctx.fillRect(0, 0, width, height);

      const nebulaGrad2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 0.15) * 60,
        height * 0.7 + Math.sin(time * 0.15) * 50,
        30,
        width * 0.75,
        height * 0.7,
        width * 0.6
      );
      nebulaGrad2.addColorStop(0, 'rgba(14, 116, 144, 0.14)');
      nebulaGrad2.addColorStop(0.6, 'rgba(15, 23, 42, 0.06)');
      nebulaGrad2.addColorStop(1, 'rgba(2, 1, 8, 0)');
      ctx.fillStyle = nebulaGrad2;
      ctx.fillRect(0, 0, width, height);

      // --- STARS RENDERING ---
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = Math.sin(time * s.twinkleSpeed * 60 + s.twinkleOffset);
        const currentAlpha = Math.max(0.1, Math.min(1, s.baseAlpha + twinkle * 0.3));

        if (s.hue > 0) {
          ctx.fillStyle = `hsla(${s.hue}, 90%, 75%, ${currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.z, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- METEOR / SHOOTING STARS ---
      meteorTimer++;
      if (meteorTimer > 180 && Math.random() < 0.3) {
        spawnMeteor();
        meteorTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.015;

        if (m.opacity <= 0 || m.x > width * 1.3 || m.y > height * 1.3) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, 'rgba(34, 211, 238, 0)');
        grad.addColorStop(0.7, `rgba(168, 85, 247, ${m.opacity * 0.7})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }

      // --- CENTRAL GARGANTUA BLACK HOLE ---
      // Dynamically position the black hole in top-right or center based on viewport
      const bhX = width > 1024 ? width * 0.72 + (mouseRef.current.x - 0.5) * 45 : width * 0.5 + (mouseRef.current.x - 0.5) * 30;
      const bhY = width > 1024 ? height * 0.44 + (mouseRef.current.y - 0.5) * 40 : height * 0.35 + (mouseRef.current.y - 0.5) * 25;
      const baseR = Math.min(width, height) * (width > 768 ? 0.16 : 0.22);

      ctx.save();
      ctx.translate(bhX, bhY);

      // Tilt based on mouse
      const tiltAngle = -0.35 + (mouseRef.current.y - 0.5) * 0.18;
      const rotAngle = (mouseRef.current.x - 0.5) * 0.25;
      ctx.rotate(rotAngle);

      // 1. Outer Gravitational Lensing Glow
      const lensGrad = ctx.createRadialGradient(0, 0, baseR * 0.9, 0, 0, baseR * 3.6);
      lensGrad.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
      lensGrad.addColorStop(0.2, 'rgba(34, 211, 238, 0.25)');
      lensGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.12)');
      lensGrad.addColorStop(1, 'rgba(2, 1, 8, 0)');

      ctx.fillStyle = lensGrad;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 3.6, 0, Math.PI * 2);
      ctx.fill();

      // 2. Upper Gravitational Lensed Light Arc (The warped back of the disk!)
      ctx.save();
      ctx.scale(1, 0.75);
      const upperHaloGrad = ctx.createRadialGradient(0, -baseR * 0.4, baseR * 0.8, 0, -baseR * 0.4, baseR * 2.1);
      upperHaloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      upperHaloGrad.addColorStop(0.25, 'rgba(34, 211, 238, 0.65)');
      upperHaloGrad.addColorStop(0.6, 'rgba(168, 85, 247, 0.4)');
      upperHaloGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

      ctx.strokeStyle = upperHaloGrad;
      ctx.lineWidth = baseR * 0.42;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 1.5, Math.PI * 0.85, Math.PI * 2.15);
      ctx.stroke();
      ctx.restore();

      // 3. Lower Gravitational Lensed Light Arc
      ctx.save();
      ctx.scale(1, 0.5);
      const lowerHaloGrad = ctx.createRadialGradient(0, baseR * 0.3, baseR * 0.9, 0, baseR * 0.3, baseR * 1.9);
      lowerHaloGrad.addColorStop(0, 'rgba(245, 158, 11, 0.55)');
      lowerHaloGrad.addColorStop(0.4, 'rgba(168, 85, 247, 0.35)');
      lowerHaloGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.strokeStyle = lowerHaloGrad;
      ctx.lineWidth = baseR * 0.3;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 1.45, 0, Math.PI);
      ctx.stroke();
      ctx.restore();

      // 4. Main Accretion Disk (Tilted Ellipse with Doppler Beaming)
      ctx.save();
      ctx.rotate(tiltAngle);

      // Draw Accretion disk rings
      for (let r = baseR * 1.2; r < baseR * 3.0; r += 7) {
        const ringProgress = (r - baseR * 1.2) / (baseR * 1.8);
        const alpha = Math.sin(ringProgress * Math.PI) * 0.45;

        // Doppler effect: Left side approaching (brighter blue), right side receding (redder/dimmer)
        const diskGrad = ctx.createLinearGradient(-r, 0, r, 0);
        diskGrad.addColorStop(0, `rgba(103, 232, 249, ${alpha * 1.3})`); // Cyan bright Doppler boost
        diskGrad.addColorStop(0.3, `rgba(168, 85, 247, ${alpha * 0.9})`);
        diskGrad.addColorStop(0.7, `rgba(245, 158, 11, ${alpha * 0.7})`);
        diskGrad.addColorStop(1, `rgba(239, 68, 68, ${alpha * 0.4})`); // Dimmer redshifted side

        ctx.strokeStyle = diskGrad;
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Infalling particles orbiting the accretion disk
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;
        p.radius -= 0.08;

        // Reset if sucked past event horizon
        if (p.radius < baseR * 1.05) {
          p.radius = baseR * 2.8 + Math.random() * 40;
          p.angle = Math.random() * Math.PI * 2;
        }

        const px = Math.cos(p.angle) * p.radius;
        const py = Math.sin(p.angle) * (p.radius * 0.28) + p.verticalOffset;

        // Particle trail
        const trailLength = 3;
        const prevAngle = p.angle - p.speed * trailLength;
        const prevPx = Math.cos(prevAngle) * (p.radius + 1);
        const prevPy = Math.sin(prevAngle) * ((p.radius + 1) * 0.28) + p.verticalOffset;

        const pGrad = ctx.createLinearGradient(prevPx, prevPy, px, py);
        pGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        pGrad.addColorStop(1, p.color);

        ctx.strokeStyle = pGrad;
        ctx.lineWidth = p.size;
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore(); // Restore tilt

      // 5. Photon Ring (Ultra-sharp relativistic boundary)
      const photonGrad = ctx.createRadialGradient(0, 0, baseR * 0.98, 0, 0, baseR * 1.15);
      photonGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      photonGrad.addColorStop(0.35, 'rgba(255, 255, 255, 1)');
      photonGrad.addColorStop(0.7, 'rgba(168, 85, 247, 0.9)');
      photonGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = photonGrad;
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 6. Singularity Event Horizon Core (Absolute Void Black)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, baseR * 0.98, 0, Math.PI * 2);
      ctx.fill();

      // Subtle shadow border to guarantee absolute zero light escape
      ctx.strokeStyle = '#050212';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle cosmic scanline and vignette overlay for cinematic sci-fi grain */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
    </div>
  );
};

import { type Language } from '../types.ts';

export const translations: Record<Language, {
  nav: {
    orbit: string;
    about: string;
    experience: string;
    skills: string;
    certifications: string;
    projects: string;
    contact: string;
    downloadResume: string;
  };
  hud: {
    status: string;
    systemNominal: string;
    orbitLocation: string;
    soundOn: string;
    soundOff: string;
    language: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    downloadCv: string;
    freelanceBadge: string;
    locationBadge: string;
    telemetry: {
      experience: string;
      disciplines: string;
      codePushed: string;
      creativity: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    educationTitle: string;
    educationSubtitle: string;
    personalData: {
      age: string;
      location: string;
      status: string;
      alias: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    freelanceTitle: string;
    freelanceDesc: string;
    internshipTitle: string;
    internshipDesc: string;
    highlights: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      web: string;
      systems: string;
      creative: string;
      engineering: string;
    };
  };
  certifications: {
    title: string;
    subtitle: string;
    viewCredential: string;
    issuedBy: string;
    verified: string;
  };
  projects: {
    title: string;
    subtitle: string;
    realtimeBadge: string;
    searchPlaceholder: string;
    filterAll: string;
    refresh: string;
    fetching: string;
    stars: string;
    forks: string;
    viewCode: string;
    liveDemo: string;
    noReposFound: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    copied: string;
    copyEmail: string;
    sendEmail: string;
    terminalTitle: string;
    namePlaceholder: string;
    msgPlaceholder: string;
    sendTransmission: string;
    transmissionSent: string;
  };
  pdf: {
    generating: string;
    downloadSuccess: string;
  };
}> = {
  en: {
    nav: {
      orbit: 'Orbit',
      about: 'Profile',
      experience: 'Missions',
      skills: 'Arsenal',
      certifications: 'Certs',
      projects: 'GitHub Repos',
      contact: 'Comms',
      downloadResume: 'PDF Resume',
    },
    hud: {
      status: 'SYSTEM STATUS',
      systemNominal: 'CORE NOMINAL',
      orbitLocation: 'JAKARTA, ID · 6°12\'S 106°49\'E',
      soundOn: 'Audio Enabled',
      soundOff: 'Audio Muted',
      language: 'Language',
    },
    hero: {
      greeting: 'INITIALIZING DEEP SPACE ORBIT',
      tagline: 'Architecting Digital Realities in the Cosmic Void',
      subtitle: 'Fullstack Software Engineer · UI/UX Designer · 3D Artist (Blender) · 2D Digital Illustrator. Crafting high-performance web, mobile, desktop applications & next-gen visual experiences.',
      ctaProjects: 'Explore Realtime Repos',
      ctaContact: 'Establish Contact',
      downloadCv: 'Download 1-Page PDF',
      freelanceBadge: '3+ Years Freelance Mastery',
      locationBadge: 'Jakarta, Indonesia',
      telemetry: {
        experience: 'Years Freelance',
        disciplines: 'Core Disciplines',
        codePushed: 'GitHub Pulse',
        creativity: 'Limitless Creative',
      },
    },
    about: {
      title: 'Cosmic Logbook',
      subtitle: 'The journey from electrical circuits to fullstack software architecture and 3D visual universes.',
      bio1: 'Greetings! I am Felix (alias 0xFE1C), a multi-disciplinary software engineer and digital artist born in July 2005, operating from Jakarta, Indonesia. I thrive at the intersection of technical engineering, aesthetic mastery, and procedural creativity.',
      bio2: 'Currently pursuing a Bachelor of Science (S1) in Information Technology at Universitas Bina Sarana Informatika (UBSI). My foundational journey began in vocational electrical installation engineering (TITL) at SMK Dinamika Pembangunan 1 Jakarta, giving me an intuitive understanding of raw circuitry, hardware logic, and systems engineering.',
      bio3: 'Beyond coding random and ambitious web, mobile, and desktop applications, I am a 3D artist specializing in Blender modeling & animations, as well as an illustrator with a 2D anime/concept art background originally shared on Pixiv.',
      educationTitle: 'Academic Trajectory',
      educationSubtitle: 'Formal institutions shaping technical rigor and creative perspective.',
      personalData: {
        age: 'Born July 2005 (Gen Z Builder)',
        location: 'Jakarta, Indonesia',
        status: 'Undergraduate IT Student & Freelance Engineer',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: 'Mission Logs',
      subtitle: 'Documented milestones, freelance deployments, and organizational operations.',
      freelanceTitle: 'Independent Software Engineer (Freelance)',
      freelanceDesc: '3 years of end-to-end software development delivering custom web architectures, cross-platform mobile apps, desktop utilities, and fullstack systems with integrated payment gateways and real-time APIs.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — Administrative Assistant',
      internshipDesc: 'Vocational internship (PKL) driving operations: computed employee payroll with attendance & overtime algorithms, categorized warehouse inventory, and managed high-volume buyer relations on Shopee.',
      highlights: 'Key Achievements & Deliverables',
    },
    skills: {
      title: 'Technological Arsenal',
      subtitle: 'Constellations of modern development frameworks, creative software, and engineering disciplines.',
      categories: {
        all: 'All Systems',
        web: 'Web & Mobile',
        systems: 'Fullstack & Core',
        creative: '3D, 2D & UI/UX',
        engineering: 'Hardware & Tools',
      },
    },
    certifications: {
      title: 'Verified Credentials',
      subtitle: 'Formal validations of software engineering, electrical competency, and creative graphics.',
      viewCredential: 'View Details',
      issuedBy: 'Issued by',
      verified: 'Verified Credential',
    },
    projects: {
      title: 'Realtime GitHub Feed',
      subtitle: 'Direct telemetry fetched live from github.com/0xFE1C. Every commit, every repo, updated dynamically.',
      realtimeBadge: 'LIVE GITHUB API',
      searchPlaceholder: 'Search repositories by name, language, or topic...',
      filterAll: 'All Repositories',
      refresh: 'Sync GitHub',
      fetching: 'Streaming deep space repos...',
      stars: 'Stars',
      forks: 'Forks',
      viewCode: 'Source Code',
      liveDemo: 'Live Demo',
      noReposFound: 'No repositories found matching your query.',
    },
    contact: {
      title: 'Quantum Transmission',
      subtitle: 'Open an encrypted channel or connect directly for software contracts, collaborations, or inquiries.',
      emailLabel: 'Encrypted ProtonMail',
      copied: 'Email copied to clipboard!',
      copyEmail: 'Copy Email Address',
      sendEmail: 'Launch Mail Client',
      terminalTitle: 'TRANSMISSION PROTOCOL v2.4',
      namePlaceholder: 'Your Name / Organization',
      msgPlaceholder: 'Transmit message or project proposal...',
      sendTransmission: 'Send Quantum Ping',
      transmissionSent: 'Transmission queued! Opening your email client to deliver to 0xFE1C@proton.me...',
    },
    pdf: {
      generating: 'Compiling 1-Page Vector PDF...',
      downloadSuccess: 'Portfolio Resume PDF generated successfully!',
    },
  },
  id: {
    nav: {
      orbit: 'Orbit',
      about: 'Profil',
      experience: 'Misi Karir',
      skills: 'Keahlian',
      certifications: 'Sertifikasi',
      projects: 'Repo GitHub',
      contact: 'Kontak',
      downloadResume: 'Unduh PDF',
    },
    hud: {
      status: 'STATUS SISTEM',
      systemNominal: 'INTI NORMAL',
      orbitLocation: 'JAKARTA, ID · 6°12\'LS 106°49\'BT',
      soundOn: 'Suara Aktif',
      soundOff: 'Suara Hening',
      language: 'Bahasa',
    },
    hero: {
      greeting: 'INISIALISASI ORBIT LUAR ANGKASA',
      tagline: 'Membangun Realitas Digital di Ruang Hampa Kosmik',
      subtitle: 'Fullstack Software Engineer · Desainer UI/UX · 3D Artist (Blender) · Ilustrator 2D. Mengembangkan aplikasi web, mobile, desktop mutakhir & karya visual berstandar tinggi.',
      ctaProjects: 'Lihat Repo Realtime',
      ctaContact: 'Kirim Pesan',
      downloadCv: 'Unduh Portofolio PDF (1 Hal)',
      freelanceBadge: '3+ Tahun Freelance',
      locationBadge: 'Jakarta, Indonesia',
      telemetry: {
        experience: 'Tahun Freelance',
        disciplines: 'Disiplin Utama',
        codePushed: 'Aktivitas GitHub',
        creativity: 'Kreativitas Tanpa Batas',
      },
    },
    about: {
      title: 'Buku Catatan Kosmik',
      subtitle: 'Perjalanan dari instalasi sirkuit listrik hingga arsitektur fullstack dan visual 3D.',
      bio1: 'Halo! Saya Felix (dengan alias 0xFE1C), seorang software developer dan digital artist kelahiran Juli 2005 yang berdomisili di Jakarta, Indonesia. Saya senang menggabungkan logika pemrograman yang kuat dengan estetika visual interaktif.',
      bio2: 'Saat ini saya menempuh pendidikan Sarjana (S1) Teknologi Informasi di Universitas Bina Sarana Informatika (UBSI). Pondasi teknis saya bermula dari SMK Dinamika Pembangunan 1 Jakarta jurusan Teknik Instalasi Tenaga Listrik (TITL), yang memberi saya pemahaman kuat tentang logika perangkat keras dan sirkuit listrik.',
      bio3: 'Selain suka membikin aplikasi acak yang fungsional di web, mobile, dan desktop, saya juga seorang 3D artist (animasi & modeling di Blender) serta ilustrator 2D yang dulunya mempublikasikan karya seni digital di Pixiv.',
      educationTitle: 'Jejak Pendidikan',
      educationSubtitle: 'Lembaga pendidikan yang membentuk pola pikir teknis dan artistik saya.',
      personalData: {
        age: 'Kelahiran Juli 2005',
        location: 'Jakarta, Indonesia',
        status: 'Mahasiswa S1 TI & Freelance Developer',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: 'Pengalaman & Karir',
      subtitle: 'Jejak rekam misi profesional, proyek lepas (freelance), dan operasional industri.',
      freelanceTitle: 'Software Engineer Lepas (Freelance)',
      freelanceDesc: '3 tahun menangani proyek pengembangan perangkat lunak secara mandiri: mulai dari web app responsif, aplikasi mobile, aplikasi desktop, hingga arsitektur sistem fullstack dengan integrasi payment gateway dan API realtime.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — Asisten Administratif',
      internshipDesc: 'Pengalaman magang/PKL SMK menangani: rekapitulasi gaji karyawan berdasarkan absensi & jam lembur, pendataan stok gudang, dan layanan pelanggan interaktif di toko online Shopee.',
      highlights: 'Pencapaian & Tanggung Jawab Utama',
    },
    skills: {
      title: 'Arsenal Kemampuan',
      subtitle: 'Konstelasi teknologi pemrograman modern, software visual kreatif, dan rekayasa sistem.',
      categories: {
        all: 'Semua Bidang',
        web: 'Web & Mobile',
        systems: 'Fullstack & Backend',
        creative: '3D, 2D & UI/UX',
        engineering: 'Listrik & Alat',
      },
    },
    certifications: {
      title: 'Sertifikasi Terverifikasi',
      subtitle: 'Bukti kompetensi resmi dalam rekayasa software, kelistrikan, dan visual grafis.',
      viewCredential: 'Lihat Rincian',
      issuedBy: 'Diterbitkan oleh',
      verified: 'Sertifikat Terverifikasi',
    },
    projects: {
      title: 'Repo GitHub Realtime',
      subtitle: 'Data langsung ditarik secara otomatis dari API github.com/0xFE1C. Setiap repositori baru akan langsung tampil di sini!',
      realtimeBadge: 'API GITHUB REALTIME',
      searchPlaceholder: 'Cari repositori berdasarkan nama, bahasa, atau topik...',
      filterAll: 'Semua Repositori',
      refresh: 'Sinkronisasi Ulang',
      fetching: 'Menghubungi satelit GitHub...',
      stars: 'Bintang',
      forks: 'Fork',
      viewCode: 'Lihat Kode',
      liveDemo: 'Buka Demo',
      noReposFound: 'Tidak ada repositori yang cocok dengan kata kunci.',
    },
    contact: {
      title: 'Transmisi Kuantum',
      subtitle: 'Buka jalur komunikasi langsung untuk diskusi proyek, freelance, atau tawaran kerja sama.',
      emailLabel: 'Email Terenkripsi ProtonMail',
      copied: 'Alamat email berhasil disalin!',
      copyEmail: 'Salin Alamat Email',
      sendEmail: 'Buka Aplikasi Email',
      terminalTitle: 'TERMINAL KOMUNIKASI v2.4',
      namePlaceholder: 'Nama / Instansi Anda',
      msgPlaceholder: 'Tuliskan pesan atau ide proyek Anda...',
      sendTransmission: 'Kirimkan Transmisi',
      transmissionSent: 'Transmisi diproses! Membuka aplikasi email untuk mengirim ke 0xFE1C@proton.me...',
    },
    pdf: {
      generating: 'Menyusun Portofolio PDF 1 Halaman...',
      downloadSuccess: 'Portofolio PDF berhasil diunduh!',
    },
  },
  ja: {
    nav: {
      orbit: '軌道',
      about: 'プロフィール',
      experience: 'ミッション',
      skills: 'スキル',
      certifications: '資格認定',
      projects: 'リポジトリ',
      contact: '通信',
      downloadResume: '履歴書PDF',
    },
    hud: {
      status: 'システム状態',
      systemNominal: '正常稼働中',
      orbitLocation: 'ジャカルタ · 6°12\'S 106°49\'E',
      soundOn: '音声ON',
      soundOff: '消音',
      language: '言語',
    },
    hero: {
      greeting: '深宇宙軌道を初期化中',
      tagline: '宇宙の深淵にデジタル現実を構築する',
      subtitle: 'フルスタックエンジニア · UI/UXデザイナー · 3Dアーティスト(Blender) · 2Dイラストレーター。Web、モバイル、デスクトップアプリから美麗なCGまで制作。',
      ctaProjects: 'GitHubリポジトリ',
      ctaContact: '連絡を取る',
      downloadCv: 'PDF履歴書をダウンロード',
      freelanceBadge: '3年以上のフリーランス経験',
      locationBadge: 'インドネシア・ジャカルタ',
      telemetry: {
        experience: 'フリーランス歴',
        disciplines: '専門分野',
        codePushed: 'GitHub脈動',
        creativity: '無限の創造性',
      },
    },
    about: {
      title: '宇宙航海日誌',
      subtitle: '電気回路からフルスタックアーキテクチャ、そして3Dグラフィックの世界へ。',
      bio1: '初めまして、Felix（コードネーム: 0xFE1C）です。2005年7月生まれ、インドネシアのジャカルタを拠点に活動するエンジニア兼クリエイターです。',
      bio2: '現在、ビナ・サラナ・インフォマティカ大学(UBSI)で情報技術学士(S1)を専攻中。工業高校(SMK Dinamika Pembangunan 1 Jakarta)では電気設備工学科(TITL)を卒業し、電子回路とハードウェアへの深い知見を有しています。',
      bio3: 'Webやモバイル、デスクトップ向けのユニークなアプリ開発に加え、Blenderを用いた3Dアニメーション制作や、かつてPixivで公開していた2Dデジタルイラストレーションも得意としています。',
      educationTitle: '学歴・経歴',
      educationSubtitle: '技術力と芸術的感性を培った教育の軌跡。',
      personalData: {
        age: '2005年7月生まれ',
        location: 'ジャカルタ、インドネシア',
        status: '情報技術専攻大学生 ＆ フリーランス',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: '職務経歴・実績',
      subtitle: 'フリーランス開発での実績と実務経験の記録。',
      freelanceTitle: 'フリーランス ソフトウェアエンジニア',
      freelanceDesc: '3年間にわたりWeb、モバイル、デスクトップ、フルスタックアプリを個人開発。決済ゲートウェイの統合やリアルタイムAPI連携など多数の実績を達成。',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — 事務アシスタント',
      internshipDesc: '工業高校在学時のインターンシップ。勤怠・残業データを集計した給与計算、倉庫の在庫管理、Shopeeでのカスタマーサポート業務を担当。',
      highlights: '主要実績と担当業務',
    },
    skills: {
      title: '技術スタック',
      subtitle: '最新のプログラミング技術、3D・2D制作ツール、ハードウェア知識。',
      categories: {
        all: 'すべて',
        web: 'Web & モバイル',
        systems: 'フルスタック & コア',
        creative: '3D, 2D & デザイン',
        engineering: '電気 & 開発ツール',
      },
    },
    certifications: {
      title: '取得資格・認定証',
      subtitle: 'ソフトウェア開発、電気技術、グラフィック制作の公的認定。',
      viewCredential: '詳細を見る',
      issuedBy: '発行元',
      verified: '認定済み',
    },
    projects: {
      title: 'リアルタイムGitHubリポジトリ',
      subtitle: 'github.com/0xFE1C からリアルタイムAPIで自動取得。新しいプロジェクトも即座に反映されます。',
      realtimeBadge: 'リアルタイム連動中',
      searchPlaceholder: 'リポジトリ名や言語、タグで検索...',
      filterAll: 'すべてのリポジトリ',
      refresh: '更新する',
      fetching: 'GitHubから通信中...',
      stars: 'スター',
      forks: 'フォーク',
      viewCode: 'コードを見る',
      liveDemo: 'デモを開く',
      noReposFound: '該当するリポジトリが見つかりませんでした。',
    },
    contact: {
      title: '暗号化通信',
      subtitle: '開発のご依頼、コラボレーション、ご質問はお気軽にご連絡ください。',
      emailLabel: 'ProtonMail暗号化メール',
      copied: 'メールアドレスをコピーしました！',
      copyEmail: 'アドレスをコピー',
      sendEmail: 'メーラーを起動',
      terminalTitle: '通信端末 v2.4',
      namePlaceholder: 'お名前 / 企業名',
      msgPlaceholder: 'メッセージまたはプロジェクト内容...',
      sendTransmission: '送信する',
      transmissionSent: '送信準備完了！0xFE1C@proton.me 宛てのメーラーを起動します...',
    },
    pdf: {
      generating: '1ページのPDF履歴書を生成中...',
      downloadSuccess: 'PDF履歴書のダウンロードが完了しました！',
    },
  },
  zh: {
    nav: {
      orbit: '轨道',
      about: '档案',
      experience: '履历',
      skills: '技术栈',
      certifications: '专业认证',
      projects: 'GitHub项目',
      contact: '联系',
      downloadResume: '下载简历',
    },
    hud: {
      status: '系统状态',
      systemNominal: '核心运转正常',
      orbitLocation: '雅加达 · 南纬6°12\' 东经106°49\'',
      soundOn: '声音开启',
      soundOff: '静音',
      language: '语言',
    },
    hero: {
      greeting: '正在初始化深空轨道',
      tagline: '在宇宙虚空中构建数字现实',
      subtitle: '全栈软件工程师 · UI/UX设计师 · 3D艺术家(Blender) · 2D数字插画师。打造卓越的高性能Web、移动、桌面应用及前沿视觉体验。',
      ctaProjects: '浏览实时代码库',
      ctaContact: '建立联系',
      downloadCv: '下载1页PDF简历',
      freelanceBadge: '3年以上自由职业经验',
      locationBadge: '印度尼西亚雅加达',
      telemetry: {
        experience: '年自由开发',
        disciplines: '核心领域',
        codePushed: 'GitHub活力',
        creativity: '无限创造力',
      },
    },
    about: {
      title: '宇宙航海日志',
      subtitle: '从电气工程到全栈软件开发与三维宇宙的跨越。',
      bio1: '您好！我是 Felix（代号 0xFE1C），生于2005年7月，现居印尼雅加达。我热衷于将严谨的工程逻辑与极具表现力的视觉艺术完美融合。',
      bio2: '目前正在印尼碧娜萨拉纳信息技术大学(UBSI)攻读信息技术学士学位(S1)。我最初毕业于 SMK Dinamika Pembangunan 1 Jakarta 电力安装工程专业(TITL)，拥有坚实的电路与硬件基础。',
      bio3: '除了热衷于构建各种趣味与实用兼备的跨平台应用外，我还是熟练运用 Blender 进行建模与动画的3D艺术家，曾活跃于 Pixiv 分享2D数字概念艺术插画。',
      educationTitle: '求学轨迹',
      educationSubtitle: '塑造技术与艺术视野的学术历程。',
      personalData: {
        age: '2005年7月出生',
        location: '印尼 雅加达',
        status: '信息技术本科生 & 自由开发者',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: '使命履历',
      subtitle: '独立开发交付项目与企业实务经验。',
      freelanceTitle: '独立软件工程师 (自由职业)',
      freelanceDesc: '3年独立交付软件开发经验：涵盖Web应用、跨平台移动App、桌面软件及集成支付网关的全栈系统。',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — 行政助理',
      internshipDesc: '中专实习期间负责核算员工考勤与加班薪酬、仓库货物与库存盘点，并在Shopee电商平台提供客户支持。',
      highlights: '主要职责与交付成果',
    },
    skills: {
      title: '武器库装备',
      subtitle: '现代软件工程、三维数字艺术与硬件技术栈。',
      categories: {
        all: '全部技能',
        web: '前端 & 移动',
        systems: '全栈 & 核心',
        creative: '3D, 2D & 设计',
        engineering: '电气 & 工具',
      },
    },
    certifications: {
      title: '专业认证',
      subtitle: '软件工程、电气技术与图形设计的官方能力认证。',
      viewCredential: '查看详情',
      issuedBy: '颁发机构',
      verified: '已认证',
    },
    projects: {
      title: '实时 GitHub 项目库',
      subtitle: '直接从 github.com/0xFE1C 实时拉取最新代码库。新增项目将即时在此呈现！',
      realtimeBadge: '实时API连线',
      searchPlaceholder: '通过项目名、编程语言或标签搜索...',
      filterAll: '所有仓库',
      refresh: '同步更新',
      fetching: '正在连接深空卫星...',
      stars: '星标',
      forks: '派生',
      viewCode: '查看源码',
      liveDemo: '在线演示',
      noReposFound: '未找到匹配的代码仓库。',
    },
    contact: {
      title: '量子信号通讯',
      subtitle: '欢迎就软件项目、自由开发合作或技术交流随时建立联系。',
      emailLabel: 'ProtonMail 加密邮箱',
      copied: '邮箱地址已复制到剪贴板！',
      copyEmail: '复制邮箱地址',
      sendEmail: '启动邮件客户端',
      terminalTitle: '通信终端 v2.4',
      namePlaceholder: '您的姓名 / 机构',
      msgPlaceholder: '输入您的留言或项目方案...',
      sendTransmission: '发送信号',
      transmissionSent: '信号准备就绪！正在调起邮件客户端发送至 0xFE1C@proton.me...',
    },
    pdf: {
      generating: '正在生成高清晰1页PDF简历...',
      downloadSuccess: 'PDF简历下载成功！',
    },
  },
  es: {
    nav: {
      orbit: 'Órbita',
      about: 'Perfil',
      experience: 'Misiones',
      skills: 'Arsenal',
      certifications: 'Certificados',
      projects: 'GitHub',
      contact: 'Contacto',
      downloadResume: 'PDF Currículum',
    },
    hud: {
      status: 'ESTADO DEL SISTEMA',
      systemNominal: 'NÚCLEO OPERATIVO',
      orbitLocation: 'YAKARTA, ID · 6°12\'S 106°49\'E',
      soundOn: 'Audio Activado',
      soundOff: 'Audio Silenciado',
      language: 'Idioma',
    },
    hero: {
      greeting: 'INICIALIZANDO ÓRBITA ESPACIAL',
      tagline: 'Arquitectura de Realidades Digitales en el Vacío Cósmico',
      subtitle: 'Ingeniero de Software Fullstack · Diseñador UI/UX · Artista 3D (Blender) · Ilustrador Digital 2D. Creando aplicaciones web, móviles y de escritorio de última generación.',
      ctaProjects: 'Explorar Repositorios',
      ctaContact: 'Establecer Contacto',
      downloadCv: 'Descargar PDF (1 Pág)',
      freelanceBadge: '3+ Años Freelance',
      locationBadge: 'Yakarta, Indonesia',
      telemetry: {
        experience: 'Años Freelance',
        disciplines: 'Disciplinas Clave',
        codePushed: 'Pulso GitHub',
        creativity: 'Creatividad Total',
      },
    },
    about: {
      title: 'Bitácora Cósmica',
      subtitle: 'La trayectoria desde circuitos eléctricos hasta arquitectura de software fullstack y visuales 3D.',
      bio1: '¡Hola! Soy Felix (alias 0xFE1C), desarrollador de software y artista digital nacido en julio de 2005 en Yakarta, Indonesia. Fusiono lógica de ingeniería con diseño visual vanguardista.',
      bio2: 'Actualmente cursando la Licenciatura en Tecnologías de la Información (S1) en la Universitas Bina Sarana Informatika (UBSI). Mi base técnica proviene de la escuela vocacional SMK Dinamika Pembangunan 1 Jakarta en Ingeniería de Instalaciones Eléctricas (TITL).',
      bio3: 'Además de crear software multiplataforma, soy artista 3D en Blender e ilustrador digital con trayectoria en Pixiv.',
      educationTitle: 'Trayectoria Académica',
      educationSubtitle: 'Instituciones formativas de mi perfil técnico y creativo.',
      personalData: {
        age: 'Nacido en Julio 2005',
        location: 'Yakarta, Indonesia',
        status: 'Estudiante Universitario de TI & Freelance',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: 'Registro de Misiones',
      subtitle: 'Proyectos profesionales independientes y operaciones empresariales.',
      freelanceTitle: 'Ingeniero de Software Independiente (Freelance)',
      freelanceDesc: '3 años desarrollando arquitecturas web, aplicaciones móviles, software de escritorio y sistemas fullstack con pasarelas de pago y APIs en tiempo real.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — Asistente Administrativo',
      internshipDesc: 'Pasantía técnica gestionando nóminas y horas extras de empleados, inventario de almacén y atención a compradores en la plataforma Shopee.',
      highlights: 'Responsabilidades y Logros',
    },
    skills: {
      title: 'Arsenal Tecnológico',
      subtitle: 'Sistemas de desarrollo moderno, herramientas creativas e ingeniería.',
      categories: {
        all: 'Todo',
        web: 'Web & Móvil',
        systems: 'Fullstack & Core',
        creative: '3D, 2D & UI/UX',
        engineering: 'Electricidad & Herramientas',
      },
    },
    certifications: {
      title: 'Credenciales Verificadas',
      subtitle: 'Acreditaciones en desarrollo de software, electricidad y gráficos computacionales.',
      viewCredential: 'Ver Detalles',
      issuedBy: 'Emitido por',
      verified: 'Verificado',
    },
    projects: {
      title: 'Repositorios GitHub en Tiempo Real',
      subtitle: 'Información sincronizada directamente con github.com/0xFE1C en tiempo real.',
      realtimeBadge: 'API EN VIVO',
      searchPlaceholder: 'Buscar repositorios por nombre, lenguaje o etiquetas...',
      filterAll: 'Todos los Repos',
      refresh: 'Sincronizar',
      fetching: 'Conectando con el satélite GitHub...',
      stars: 'Estrellas',
      forks: 'Bifurcaciones',
      viewCode: 'Código Fuente',
      liveDemo: 'Ver Demo',
      noReposFound: 'No se encontraron repositorios.',
    },
    contact: {
      title: 'Transmisión Cuántica',
      subtitle: 'Canal abierto para propuestas de desarrollo, proyectos o consultas.',
      emailLabel: 'Correo Encriptado ProtonMail',
      copied: '¡Correo copiado al portapapeles!',
      copyEmail: 'Copiar Correo',
      sendEmail: 'Abrir Cliente de Correo',
      terminalTitle: 'TERMINAL DE TRANSMISIÓN v2.4',
      namePlaceholder: 'Su Nombre / Entidad',
      msgPlaceholder: 'Escriba su mensaje o propuesta...',
      sendTransmission: 'Enviar Señal',
      transmissionSent: '¡Transmisión preparada! Abriendo cliente de correo hacia 0xFE1C@proton.me...',
    },
    pdf: {
      generating: 'Generando PDF de 1 página...',
      downloadSuccess: '¡Currículum PDF descargado con éxito!',
    },
  },
  de: {
    nav: {
      orbit: 'Orbit',
      about: 'Profil',
      experience: 'Missionen',
      skills: 'Arsenal',
      certifications: 'Zertifikate',
      projects: 'GitHub',
      contact: 'Kontakt',
      downloadResume: 'PDF Lebenslauf',
    },
    hud: {
      status: 'SYSTEMSTATUS',
      systemNominal: 'KERN NOMINAL',
      orbitLocation: 'JAKARTA, ID · 6°12\'S 106°49\'O',
      soundOn: 'Audio Aktiviert',
      soundOff: 'Audio Stumm',
      language: 'Sprache',
    },
    hero: {
      greeting: 'TIEFENRAUM-ORBIT INITIALISIEREN',
      tagline: 'Digitale Realitäten im kosmischen Vakuum erschaffen',
      subtitle: 'Fullstack Software Engineer · UI/UX Designer · 3D Artist (Blender) · 2D Illustrator. Hochmoderne Web-, Mobil- und Desktop-Anwendungen sowie visuelle Kunst.',
      ctaProjects: 'GitHub Repositories',
      ctaContact: 'Kontakt aufnehmen',
      downloadCv: '1-Seiten PDF herunterladen',
      freelanceBadge: '3+ Jahre Freelance-Erfahrung',
      locationBadge: 'Jakarta, Indonesien',
      telemetry: {
        experience: 'Jahre Freelance',
        disciplines: 'Hauptdisziplinen',
        codePushed: 'GitHub Puls',
        creativity: 'Grenzenlos Kreativ',
      },
    },
    about: {
      title: 'Kosmisches Logbuch',
      subtitle: 'Vom Stromkreis zu Fullstack-Systemen und 3D-Welten.',
      bio1: 'Hallo! Ich bin Felix (Alias 0xFE1C), Software-Entwickler und Digitalkünstler, geboren im Juli 2005 in Jakarta, Indonesien.',
      bio2: 'Derzeit studiere ich Informationstechnologie (S1) an der Universitas Bina Sarana Informatika (UBSI). Zuvor absolvierte ich eine Ausbildung in elektrischer Energietechnik (TITL) an der SMK Dinamika Pembangunan 1 Jakarta.',
      bio3: 'Neben Desktop-, Mobil- und Websoftware bin ich 3D-Artist mit Blender und habe früher digitale 2D-Illustrationen auf Pixiv geteilt.',
      educationTitle: 'Bildungsweg',
      educationSubtitle: 'Institutionen meiner technischen und gestalterischen Entwicklung.',
      personalData: {
        age: 'Geboren Juli 2005',
        location: 'Jakarta, Indonesien',
        status: 'IT-Student & Freiberuflicher Ingenieur',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: 'Missionsprotokoll',
      subtitle: 'Freiberufliche Softwareprojekte und betriebliche Erfahrungen.',
      freelanceTitle: 'Freiberuflicher Software-Ingenieur',
      freelanceDesc: '3 Jahre Entwicklung moderner Webanwendungen, Apps, Desktop-Software und Fullstack-Systeme mit Payment-Gateways und Echtzeit-APIs.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — Verwaltungsassistent',
      internshipDesc: 'Betriebspraktikum während der Berufsschule: Gehaltsabrechnung nach Anwesenheit und Überstunden, Lagerbestandsverwaltung und Shopee-Kundenbetreuung.',
      highlights: 'Wichtige Aufgaben & Erfolge',
    },
    skills: {
      title: 'Technologisches Arsenal',
      subtitle: 'Moderne Software-Stacks, visuelle Grafiktools und Elektrotechnik.',
      categories: {
        all: 'Alle',
        web: 'Web & Mobil',
        systems: 'Fullstack & Core',
        creative: '3D, 2D & Design',
        engineering: 'Elektrotechnik & Tools',
      },
    },
    certifications: {
      title: 'Zertifikate & Qualifikationen',
      subtitle: 'Verifizierte Nachweise in Software, Elektrotechnik und 3D-Design.',
      viewCredential: 'Details ansehen',
      issuedBy: 'Ausgestellt von',
      verified: 'Verifiziert',
    },
    projects: {
      title: 'Echtzeit GitHub Repositories',
      subtitle: 'Live synchronisiert über die offizielle GitHub API von github.com/0xFE1C.',
      realtimeBadge: 'ECHTZEIT-API',
      searchPlaceholder: 'Repositories suchen...',
      filterAll: 'Alle Repos',
      refresh: 'Aktualisieren',
      fetching: 'Verbindung zu GitHub...',
      stars: 'Sterne',
      forks: 'Forks',
      viewCode: 'Quellcode',
      liveDemo: 'Live-Demo',
      noReposFound: 'Keine passenden Repositories gefunden.',
    },
    contact: {
      title: 'Quanten-Signal',
      subtitle: 'Direkte verschlüsselte Verbindung für Projektanfragen oder Zusammenarbeit.',
      emailLabel: 'Verschlüsseltes ProtonMail',
      copied: 'E-Mail-Adresse kopiert!',
      copyEmail: 'E-Mail kopieren',
      sendEmail: 'E-Mail-Programm öffnen',
      terminalTitle: 'ÜBERTRAGUNGSTERMINAL v2.4',
      namePlaceholder: 'Ihr Name / Unternehmen',
      msgPlaceholder: 'Ihre Nachricht oder Projektidee...',
      sendTransmission: 'Signal senden',
      transmissionSent: 'Übertragung vorbereitet! E-Mail-Programm wird für 0xFE1C@proton.me geöffnet...',
    },
    pdf: {
      generating: 'Generiere 1-Seiten PDF...',
      downloadSuccess: 'Lebenslauf-PDF erfolgreich heruntergeladen!',
    },
  },
  fr: {
    nav: {
      orbit: 'Orbite',
      about: 'Profil',
      experience: 'Missions',
      skills: 'Arsenal',
      certifications: 'Certificats',
      projects: 'GitHub',
      contact: 'Contact',
      downloadResume: 'CV PDF',
    },
    hud: {
      status: 'ÉTAT DU SYSTÈME',
      systemNominal: 'CŒUR NOMINAL',
      orbitLocation: 'JAKARTA, ID · 6°12\'S 106°49\'E',
      soundOn: 'Audio Activé',
      soundOff: 'Audio Muet',
      language: 'Langue',
    },
    hero: {
      greeting: 'INITIALISATION DE L\'ORBITE PROFONDE',
      tagline: 'Façonner des Réalités Numériques dans le Vide Cosmique',
      subtitle: 'Ingénieur Logiciel Fullstack · Designer UI/UX · Artiste 3D (Blender) · Illustrateur 2D. Création d\'applications web, mobiles et de bureau haute performance.',
      ctaProjects: 'Explorer les Dépôts',
      ctaContact: 'Me Contacter',
      downloadCv: 'Télécharger le PDF (1 Page)',
      freelanceBadge: '3+ Ans en Freelance',
      locationBadge: 'Jakarta, Indonésie',
      telemetry: {
        experience: 'Ans Freelance',
        disciplines: 'Disciplines Clés',
        codePushed: 'Activité GitHub',
        creativity: 'Créativité Infinie',
      },
    },
    about: {
      title: 'Journal de Bord Cosmique',
      subtitle: 'Du circuit électrique à l\'architecture logicielle et aux univers 3D.',
      bio1: 'Bonjour ! Je m\'appelle Felix (alias 0xFE1C), développeur de logiciels et artiste numérique né en juillet 2005 à Jakarta, en Indonésie.',
      bio2: 'Actuellement en Licence de Technologies de l\'Information (S1) à l\'Universitas Bina Sarana Informatika (UBSI). J\'ai débuté mon parcours en génie électrique (TITL) au SMK Dinamika Pembangunan 1 Jakarta.',
      bio3: 'En plus du développement d\'applications interactives, je suis artiste 3D sous Blender et ancien illustrateur 2D sur Pixiv.',
      educationTitle: 'Parcours Académique',
      educationSubtitle: 'Institutions ayant formé mon esprit technique et artistique.',
      personalData: {
        age: 'Né en Juillet 2005',
        location: 'Jakarta, Indonésie',
        status: 'Étudiant en Licence TI & Développeur Indépendant',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: 'Journal des Missions',
      subtitle: 'Réalisations en freelance et missions professionnelles.',
      freelanceTitle: 'Ingénieur Logiciel Indépendant (Freelance)',
      freelanceDesc: '3 ans de création d\'applications web complètes, mobiles et de bureau, avec intégration de passerelles de paiement et d\'APIs en temps réel.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — Assistant Administratif',
      internshipDesc: 'Stage professionnel : calcul des salaires et heures supplémentaires des employés, gestion des stocks et support client Shopee.',
      highlights: 'Missions et Réalisations Clés',
    },
    skills: {
      title: 'Arsenal Technologique',
      subtitle: 'Technologies de développement moderne, outils 3D et ingénierie.',
      categories: {
        all: 'Tous',
        web: 'Web & Mobile',
        systems: 'Fullstack & Core',
        creative: '3D, 2D & UI/UX',
        engineering: 'Électrique & Outils',
      },
    },
    certifications: {
      title: 'Certifications Reconnues',
      subtitle: 'Titres certifiés en génie logiciel, électrotechnique et modélisation.',
      viewCredential: 'Voir les détails',
      issuedBy: 'Délivré par',
      verified: 'Vérifié',
    },
    projects: {
      title: 'Dépôts GitHub en Temps Réel',
      subtitle: 'Données synchronisées en direct depuis l\'API officielle github.com/0xFE1C.',
      realtimeBadge: 'API EN DIRECT',
      searchPlaceholder: 'Rechercher un dépôt...',
      filterAll: 'Tous les Dépôts',
      refresh: 'Actualiser',
      fetching: 'Connexion satellite...',
      stars: 'Étoiles',
      forks: 'Forks',
      viewCode: 'Code Source',
      liveDemo: 'Démo en Ligne',
      noReposFound: 'Aucun dépôt trouvé.',
    },
    contact: {
      title: 'Transmission Quantique',
      subtitle: 'Canal de communication pour projets, contrats ou collaborations.',
      emailLabel: 'Courriel Chiffré ProtonMail',
      copied: 'Adresse email copiée !',
      copyEmail: 'Copier l\'adresse',
      sendEmail: 'Ouvrir le client email',
      terminalTitle: 'TERMINAL DE TRANSMISSION v2.4',
      namePlaceholder: 'Votre Nom / Organisation',
      msgPlaceholder: 'Votre message ou proposition...',
      sendTransmission: 'Envoyer le Signal',
      transmissionSent: 'Signal prêt ! Ouverture de votre messagerie vers 0xFE1C@proton.me...',
    },
    pdf: {
      generating: 'Génération du PDF 1 page...',
      downloadSuccess: 'CV PDF téléchargé avec succès !',
    },
  },
  ko: {
    nav: {
      orbit: '궤도',
      about: '프로필',
      experience: '이력',
      skills: '기술 스택',
      certifications: '자격 인증',
      projects: 'GitHub 저장소',
      contact: '연락처',
      downloadResume: 'PDF 이력서',
    },
    hud: {
      status: '시스템 상태',
      systemNominal: '정상 가동 중',
      orbitLocation: '자카르타 · 남위 6°12\' 동경 106°49\'',
      soundOn: '오디오 켬',
      soundOff: '음소거',
      language: '언어',
    },
    hero: {
      greeting: '심우주 궤도 초기화 중',
      tagline: '우주의 공허 속에 디지털 현실을 구축하다',
      subtitle: '풀스택 소프트웨어 엔지니어 · UI/UX 디자이너 · 3D 아티스트(Blender) · 2D 일러스트레이터. 고성능 웹, 모바일, 데스크톱 앱 및 차세대 인터랙티브 비주얼을 제작합니다.',
      ctaProjects: '실시간 저장소 확인',
      ctaContact: '연락하기',
      downloadCv: '1페이지 PDF 이력서 다운로드',
      freelanceBadge: '3년 이상의 프리랜서 경력',
      locationBadge: '인도네시아 자카르타',
      telemetry: {
        experience: '프리랜서 경력(년)',
        disciplines: '전문 분야',
        codePushed: 'GitHub 활동',
        creativity: '무한한 창의성',
      },
    },
    about: {
      title: '우주 항해 일지',
      subtitle: '전기 회로에서 풀스택 아키텍처와 3D 디지털 세계로.',
      bio1: '안녕하세요! 저는 2005년 7월생으로 인도네시아 자카르타에 거주하는 개발자이자 디지털 아티스트인 Felix(0xFE1C)입니다.',
      bio2: '현재 비나 사라나 인포마티카 대학교(UBSI)에서 정보기술 학사(S1) 과정을 이수 중입니다. 직업고등학교(SMK Dinamika Pembangunan 1 Jakarta)에서 전기설비공학(TITL)을 전공하여 하드웨어와 회로 로직에 대한 깊은 이해를 갖추고 있습니다.',
      bio3: '웹, 모바일, 데스크톱 전반의 창의적인 애플리케이션 개발은 물론, Blender를 통한 3D 모델링 및 애니메이션, 과거 Pixiv에서 활동했던 2D 일러스트레이션 역량을 보유하고 있습니다.',
      educationTitle: '학업 여정',
      educationSubtitle: '기술적 깊이와 예술적 안목을 다진 교육 과정입니다.',
      personalData: {
        age: '2005년 7월 출생',
        location: '인도네시아 자카르타',
        status: '정보기술 학부생 & 프리랜서 개발자',
        alias: '0xFE1C / Felix',
      },
    },
    experience: {
      title: '미션 및 경력 로그',
      subtitle: '프리랜서 소프트웨어 구축과 기업 실무 경험입니다.',
      freelanceTitle: '독립 소프트웨어 엔지니어 (프리랜서)',
      freelanceDesc: '3년간 웹, 모바일, 데스크톱 소프트웨어 및 결제 게이트웨이와 실시간 API를 결합한 풀스택 애플리케이션을 성공적으로 개발 및 납품했습니다.',
      internshipTitle: 'PT INDOPINTAN ADI PERKASA — 행정 보조 (실습)',
      internshipDesc: '근태 및 연장 근무를 반영한 급여 정산, 물류 창고 재고 관리 및 Shopee 플랫폼 고객 응대를 수행했습니다.',
      highlights: '주요 역할 및 성과',
    },
    skills: {
      title: '기술 무기고',
      subtitle: '현대적인 소프트웨어 개발 프레임워크와 3D/2D 그래픽 툴셋.',
      categories: {
        all: '전체',
        web: '웹 & 모바일',
        systems: '풀스택 & 코어',
        creative: '3D, 2D & UI/UX',
        engineering: '전기 & 도구',
      },
    },
    certifications: {
      title: '공인 자격 및 수료증',
      subtitle: '소프트웨어 엔지니어링, 전기 자격 및 그래픽스 공인 역량.',
      viewCredential: '세부 정보',
      issuedBy: '발급 기관',
      verified: '인증 완료',
    },
    projects: {
      title: '실시간 GitHub 저장소',
      subtitle: 'github.com/0xFE1C 에서 실시간 API로 직접 동기화됩니다. 새로운 프로젝트가 업로드되면 즉시 웹에 반영됩니다.',
      realtimeBadge: '실시간 API 연동',
      searchPlaceholder: '프로젝트 이름, 언어, 태그로 검색...',
      filterAll: '전체 저장소',
      refresh: '동기화 새로고침',
      fetching: 'GitHub 위성과 통신 중...',
      stars: '스타',
      forks: '포크',
      viewCode: '코드 보기',
      liveDemo: '데모 보기',
      noReposFound: '검색된 저장소가 없습니다.',
    },
    contact: {
      title: '양자 신호 통신',
      subtitle: '소프트웨어 개발 의뢰, 프로젝트 협업 또는 문의사항을 언제든 보내주세요.',
      emailLabel: '암호화된 ProtonMail',
      copied: '이메일 주소가 복사되었습니다!',
      copyEmail: '이메일 주소 복사',
      sendEmail: '메일 앱 실행',
      terminalTitle: '통신 단말기 v2.4',
      namePlaceholder: '성함 / 소속 기관',
      msgPlaceholder: '프로젝트 제안이나 메시지를 입력하세요...',
      sendTransmission: '신호 전송',
      transmissionSent: '신호 전송 준비 완료! 0xFE1C@proton.me 로 연결되는 메일 앱을 엽니다...',
    },
    pdf: {
      generating: '1페이지 고화질 PDF 생성 중...',
      downloadSuccess: 'PDF 이력서가 성공적으로 다운로드되었습니다!',
    },
  },
};

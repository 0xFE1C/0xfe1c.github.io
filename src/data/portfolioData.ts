import { type EducationItem, type ExperienceItem, type CertificationItem, type SkillCategory, type GithubRepo, type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';

export const educationData: EducationItem[] = [
  {
    id: 'ubsi',
    institution: 'Universitas Bina Sarana Informatika',
    degree: 'S1 Teknologi Informasi (Bachelor of Information Technology)',
    field: 'Information Technology / Computer Science',
    period: '2023 – Present (In Progress)',
    location: 'Jakarta, Indonesia',
    description: 'Undergraduate academic program focusing on advanced software engineering, distributed systems, database architectures, algorithmic problem solving, and modern computing networks.',
    highlights: [
      'Core focus on fullstack web technologies, algorithms, and database modeling',
      'Active developer experimenting with bleeding-edge web standards and spatial 3D interactive applications',
      'Maintaining strong theoretical and practical software development benchmarks',
    ],
    icon: 'GraduationCap',
    badge: 'Undergraduate / Current',
  },
  {
    id: 'smk-dp1',
    institution: 'SMK Dinamika Pembangunan 1 Jakarta',
    degree: 'Teknik Instalasi Tenaga Listrik (TITL)',
    field: 'Electrical Power Installation Engineering',
    period: '2020 – 2023',
    location: 'Jakarta Timur, Indonesia',
    description: 'Vocational high school engineering program delivering comprehensive mastery over electrical circuits, power installations, industrial automation, relay logic, and electrical safety standards.',
    highlights: [
      'Hands-on expertise in electrical schematic design, single-phase & three-phase wiring',
      'Gained deep analytical thinking for hardware logic, relays, and low-level system mechanics',
      'Successfully completed industrial apprenticeship (PKL) with commendation',
    ],
    icon: 'Zap',
    badge: 'Vocational Diploma',
  },
  {
    id: 'sdn-kgt03',
    institution: 'SDN KGT 03',
    degree: 'Pendidikan Dasar (Primary Education)',
    field: 'Basic Sciences & General Studies',
    period: '2014 – 2020',
    location: 'Jakarta Utara, Indonesia',
    description: 'Formative primary education building fundamental mathematics, sciences, literacy, and early curiosity for computer technology and digital creative arts.',
    highlights: [
      'Early interest in digital illustration and computer graphics',
      'Graduated with strong foundations in mathematics and science',
    ],
    icon: 'School',
    badge: 'Primary Education',
  },
];

export const getExperienceData = (lang: Language): ExperienceItem[] => {
  const tExp = translations[lang].experience;
  return [
    {
      id: 'freelance-dev',
      role: tExp.freelanceTitle,
      company: 'Self-Employed / Global Clients',
      period: '2021 – Present (3+ Years)',
      location: 'Jakarta, Indonesia (Remote)',
      type: lang === 'id' ? 'Freelance & Kontrak' : 'Freelance & Contract',
      description: tExp.freelanceDesc,
      achievements: [
        lang === 'id'
          ? 'Merancang aplikasi mobile dan desktop lintas platform sesuai kebutuhan bisnis klien'
          : 'Engineered cross-platform mobile and desktop apps tailored to bespoke business workflows and user experiences',
        lang === 'id'
          ? 'Membangun arsitektur payment gateway aman dengan webhook otomatis dan verifikasi tanda tangan digital'
          : 'Architected secure payment gateway transaction pipelines with automated webhooks, signature verification, and instant status synchronizations',
        lang === 'id'
          ? 'Mengembangkan aplikasi web fullstack responsif dengan performa Lighthouse optimal'
          : 'Delivered end-to-end fullstack web applications with responsive glassmorphic UI, real-time database reactivity, and optimal Lighthouse performance',
        lang === 'id'
          ? 'Menjalankan otomasi CI/CD dan deployment cloud tanpa downtime'
          : 'Provided ongoing technical maintenance, CI/CD pipeline automation, and zero-downtime cloud deployments',
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'Payment Gateways', 'Mobile Apps', 'Desktop Dev', 'Tailwind CSS', 'REST APIs', 'PostgreSQL'],
      icon: 'Code2',
    },
    {
      id: 'hmti-litbang',
      role: tExp.hmtiTitle,
      company: tExp.hmtiCompany,
      period: '2025 – 2026',
      location: 'Jakarta, Indonesia',
      type: tExp.hmtiType,
      description: tExp.hmtiDesc,
      achievements: tExp.hmtiAchievements,
      skills: ['Leadership', 'Technology R&D', 'Organizational Governance', 'Technical Mentorship', 'Event Coordination', 'Strategic Planning'],
      icon: 'Users',
    },
    {
      id: 'pt-indopintan',
      role: tExp.internshipTitle,
      company: 'PT INDOPINTAN ADI PERKASA',
      period: lang === 'id' ? 'Magang PKL SMK' : 'Vocational High School Internship',
      location: 'Jakarta, Indonesia',
      type: lang === 'id' ? 'Magang On-site' : 'On-site Internship',
      description: tExp.internshipDesc,
      achievements: [
        lang === 'id'
          ? 'Menghitung rekap payroll bulanan karyawan melalui pengolahan data absensi dan jam lembur'
          : 'Calculated monthly employee payroll records by analyzing and computing daily employee attendance logs, working days, and overtime hours',
        lang === 'id'
          ? 'Melakukan audit inventaris fisik gudang serta memutakhirkan pencatatan stok keluar-masuk'
          : 'Supervised and organized physical warehouse inventory, categorizing stock items and updating internal inventory databases to minimize discrepancy',
        lang === 'id'
          ? 'Menangani layanan pelanggan dan resolusi pesanan dengan respon cepat di marketplace Shopee'
          : 'Handled rapid customer service communications on the Shopee e-commerce marketplace, answering product inquiries and resolving customer orders promptly',
      ],
      skills: ['Payroll Processing', 'Warehouse Management', 'Inventory Auditing', 'E-commerce (Shopee)', 'Data Entry', 'Customer Communication'],
      icon: 'Briefcase',
    },
  ];
};

export const experienceData: ExperienceItem[] = getExperienceData('en');

export const skillCategories: SkillCategory[] = [
  {
    title: 'Fullstack Web & Systems',
    icon: 'Globe',
    skills: [
      { name: 'React / Next.js', level: 95, description: 'Modern reactive component architectures, server components & performance tuning' },
      { name: 'TypeScript / JavaScript', level: 94, description: 'Type-safe programming, async systems, ESNext standards & clean code' },
      { name: 'Tailwind CSS', level: 98, description: 'Pixel-perfect custom design systems, modern responsive glassmorphism' },
      { name: 'Node.js & Express', level: 90, description: 'RESTful microservices, API authentication, webhooks & backend logic' },
      { name: 'Databases & ORM', level: 86, description: 'PostgreSQL, MySQL, SQLite, MongoDB, Prisma & indexing strategies' },
      { name: 'Payment Gateways', level: 92, description: 'Third-party payment gateways, webhook verification & transaction security' },
    ],
  },
  {
    title: 'Mobile, Desktop & Cross-Platform',
    icon: 'Smartphone',
    skills: [
      { name: 'Cross-Platform Mobile', level: 88, description: 'Responsive mobile applications with native device integrations' },
      { name: 'Desktop App Development', level: 85, description: 'Electron / Tauri / C# desktop utilities and custom software tools' },
      { name: 'Realtime & WebSockets', level: 89, description: 'Bi-directional live communication, chat protocols & live telemetry' },
      { name: 'Git & GitHub Workflows', level: 92, description: 'Branching strategies, CI/CD actions, automated deployments & open source' },
    ],
  },
  {
    title: '3D Art, Animation & 2D Illustration',
    icon: 'Palette',
    skills: [
      { name: 'Blender 3D Modeling', level: 90, description: 'Hard surface & organic modeling, topology optimization, spatial assets' },
      { name: '3D Animation & Rigging', level: 87, description: 'Keyframe timing, camera choreography, cinematic space simulations' },
      { name: 'Procedural Shading & Lighting', level: 89, description: 'Cycles/Eevee materials, PBR workflows, cosmic lighting & volumetric effects' },
      { name: '2D Digital Illustration', level: 86, description: 'Anime/concept art illustration background with previous portfolio on Pixiv' },
      { name: 'Figma UI/UX Design', level: 94, description: 'Design systems, auto-layout, interactive micro-interactions & modern HUDs' },
    ],
  },
  {
    title: 'Hardware & Engineering Foundation',
    icon: 'Cpu',
    skills: [
      { name: 'Electrical Installation (TITL)', level: 92, description: 'Industrial & residential electrical wiring, relays, and circuit dynamics' },
      { name: 'Hardware & Logic Troubleshooting', level: 88, description: 'Systematic diagnosis of hardware circuitry, voltage balancing & safety' },
      { name: 'Warehouse & Operations Workflow', level: 86, description: 'Inventory management, payroll algorithm calculations & marketplace support' },
    ],
  },
];

export const getCertificationsData = (lang: Language): CertificationItem[] => {
  const t = translations[lang].certifications.items;
  return [
    {
      id: 'cert-hmti-litbang',
      title: t.hmti.title,
      issuer: t.hmti.issuer,
      date: '01 Nov 2025 (2025/2026)',
      credentialId: '05/SRT/17230448/DPC PEMUDA/HMTI/XI/2025',
      category: 'organization',
      recipientName: 'Felix (0xFE1C)',
      pdfUrl: './certificates/hmti-litbang-certificate.pdf',
      downloadName: 'Sertifikat_HMTI_Litbang_Felix.pdf',
      previewImages: [
        './certificates/hmti-cert-page1.png',
        './certificates/hmti-cert-page2.png',
      ],
      skills: t.hmti.skills,
      description: t.hmti.description,
    },
    {
      id: 'cert-cisco-python',
      title: t.cisco.title,
      issuer: t.cisco.issuer,
      date: '19 Jul 2024',
      credentialId: 'CISCO-PCAP-2024-UBSI',
      category: 'dev',
      recipientName: 'Felix (0xFE1C)',
      pdfUrl: './certificates/cisco-python-pcap-certificate.pdf',
      downloadName: 'Cisco_Python_PCAP_Certificate_Felix.pdf',
      previewImages: ['./certificates/cisco-python-cert.png'],
      skills: t.cisco.skills,
      description: t.cisco.description,
    },
    {
      id: 'cert-ubsi-transformasi',
      title: t.ubsi.title,
      issuer: t.ubsi.issuer,
      date: '27 Nov 2023',
      credentialId: 'UBSI-FTI-TALENTA-2023',
      category: 'dev',
      recipientName: 'Felix (0xFE1C)',
      pdfUrl: './certificates/ubsi-digital-transformation-certificate.pdf',
      downloadName: 'Sertifikat_Seminar_Transformasi_Digital_UBSI_Felix.pdf',
      previewImages: ['./certificates/ubsi-seminar-cert.png'],
      skills: t.ubsi.skills,
      description: t.ubsi.description,
    },
  ];
};

// Default export with only the 3 real authentic certificates (all fake 2023 certs removed)
export const certificationsData: CertificationItem[] = getCertificationsData('en');

// No hardcoded repositories - all repositories are fetched directly from live GitHub API
export const fallbackRepos: GithubRepo[] = [];

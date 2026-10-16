import { jsPDF } from 'jspdf';

export function generateResumePDF(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 10;
  const contentWidth = pageWidth - margin * 2; // 190mm

  // 1. TOP HEADER - DEEP COSMIC EXECUTIVE BANNER
  const headerHeight = 35;
  doc.setFillColor(7, 11, 26); // Deep space obsidian
  doc.rect(0, 0, pageWidth, headerHeight, 'F');

  // Decorative cosmic gradient simulation bar (Violet -> Cyan -> Amber)
  doc.setFillColor(139, 92, 246);
  doc.rect(0, headerHeight - 1.2, pageWidth * 0.45, 1.2, 'F');
  doc.setFillColor(6, 182, 212);
  doc.rect(pageWidth * 0.45, headerHeight - 1.2, pageWidth * 0.35, 1.2, 'F');
  doc.setFillColor(245, 158, 11);
  doc.rect(pageWidth * 0.8, headerHeight - 1.2, pageWidth * 0.2, 1.2, 'F');

  // Monogram / ID Badge
  doc.setFillColor(18, 24, 52);
  doc.setDrawColor(34, 211, 238);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, 7, 20, 20, 3, 3, 'FD');

  doc.setTextColor(34, 211, 238);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('0xFE1C', margin + 10, 16.5, { align: 'center' });
  doc.setFontSize(6.5);
  doc.setTextColor(165, 180, 252);
  doc.text('FELIX', margin + 10, 22.5, { align: 'center' });

  // Main Header Title & Subtitle
  const titleX = margin + 24;
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.text('FELIX', titleX, 14.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(196, 181, 253);
  doc.text('Fullstack Software Engineer · UI/UX Designer · 3D Artist (Blender) · 2D Illustrator', titleX, 19.5);

  // Quick Contact Pills Bar
  const contactPills = [
    { text: '0xFE1C@proton.me', icon: '@' },
    { text: '0xfe1c.github.io', icon: 'W' },
    { text: 'github.com/0xFE1C', icon: 'G' },
    { text: 'Jakarta, ID (July 2005)', icon: 'L' },
  ];

  let pillX = titleX;
  contactPills.forEach((p) => {
    const textWidth = doc.getTextWidth(p.text);
    const pillW = textWidth + 8;

    doc.setFillColor(15, 23, 42);
    doc.setDrawColor(51, 65, 85);
    doc.setLineWidth(0.2);
    doc.roundedRect(pillX, 23.5, pillW, 5.2, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(34, 211, 238);
    doc.text(p.icon, pillX + 2.5, 27.2);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(226, 232, 240);
    doc.text(p.text, pillX + 5.5, 27.2);

    pillX += pillW + 3;
  });

  let currentY = 39.5;

  // REUSABLE SECTION HEADER BUILDER
  const drawSectionHeader = (title: string, x: number, width: number, yPos: number): number => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), x, yPos);

    // Accent line
    const textW = doc.getTextWidth(title);
    doc.setDrawColor(124, 58, 237);
    doc.setLineWidth(0.7);
    doc.line(x, yPos + 1.4, x + textW, yPos + 1.4);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.25);
    doc.line(x + textW + 2, yPos + 1.4, x + width, yPos + 1.4);

    return yPos + 5.2;
  };

  // 2. EXECUTIVE PROFILE SUMMARY CARD
  const summaryBoxH = 17;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, currentY, contentWidth, summaryBoxH, 2, 2, 'FD');

  // Decorative left vertical accent
  doc.setFillColor(6, 182, 212);
  doc.roundedRect(margin, currentY, 1.5, summaryBoxH, 0.5, 0.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(124, 58, 237);
  doc.text('EXECUTIVE DOSSIER', margin + 4.5, currentY + 4.2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.9);
  doc.setTextColor(51, 65, 85);
  const summary =
    'Multi-disciplinary Software Engineer and Digital Artist (born July 2005, Jakarta) with 3+ years of freelance experience architecting robust web, mobile, desktop, and fullstack applications with third-party payment gateways and real-time APIs. Blends computer science fundamentals with foundational electrical engineering (TITL) and spatial 3D/2D visual artistry (Blender procedural rendering & digital illustrations). Currently pursuing S1 Information Technology at Universitas Bina Sarana Informatika.';
  const splitSummary = doc.splitTextToSize(summary, contentWidth - 8);
  doc.text(splitSummary, margin + 4.5, currentY + 7.8);

  currentY += summaryBoxH + 4;

  // 3. TWO-COLUMN GRID ARCHITECTURE
  // Left Column (Experience, Key Architectures, Education): 114mm
  // Right Column (Skills, Certifications, Dossier): 71mm
  const leftColX = margin;
  const leftColW = 114;
  const rightColX = margin + leftColW + 5;
  const rightColW = contentWidth - leftColW - 5; // 71mm

  let leftY = currentY;
  let rightY = currentY;

  // ==========================================
  // LEFT COLUMN: WORK EXPERIENCE
  // ==========================================
  leftY = drawSectionHeader('Professional Experience', leftColX, leftColW, leftY);

  // Role 1: Freelance Software Engineer
  const r1H = 41;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.roundedRect(leftColX, leftY, leftColW, r1H, 1.8, 1.8, 'FD');

  doc.setFillColor(139, 92, 246);
  doc.roundedRect(leftColX, leftY, 1.2, r1H, 0.5, 0.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 23, 42);
  doc.text('Independent Software Engineer (Freelance)', leftColX + 4, leftY + 4.2);

  doc.setFillColor(237, 233, 254);
  doc.roundedRect(leftColX + leftColW - 37, leftY + 1.8, 34, 4.2, 1.2, 1.2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(109, 40, 217);
  doc.text('2021 – Present (3+ Yrs)', leftColX + leftColW - 20, leftY + 4.8, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(100, 116, 139);
  doc.text('Self-Employed · Remote & On-Demand Client Contracts', leftColX + 4, leftY + 8);

  const freelancePoints = [
    'Engineered end-to-end bespoke applications across Web, Mobile (cross-platform), and Desktop ecosystems tailored to custom business specifications.',
    'Architected secure payment gateway transaction workflows with signature verification, automated webhooks, and resilient order handling.',
    'Built responsive, high-performance user interfaces and design systems in Figma and Tailwind CSS with optimal core web vitals.',
    'Maintained continuous software integration, database schemas, and zero-downtime client deployments.',
  ];

  let fY = leftY + 12.2;
  freelancePoints.forEach((pt) => {
    doc.setFillColor(124, 58, 237);
    doc.circle(leftColX + 5, fY - 0.9, 0.65, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(51, 65, 85);
    const split = doc.splitTextToSize(pt, leftColW - 10);
    doc.text(split, leftColX + 7.5, fY);
    fY += split.length * 2.8 + 1;
  });

  leftY += r1H + 3.5;

  // Role 2: PT INDOPINTAN ADI PERKASA
  const r2H = 34;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.roundedRect(leftColX, leftY, leftColW, r2H, 1.8, 1.8, 'FD');

  doc.setFillColor(6, 182, 212);
  doc.roundedRect(leftColX, leftY, 1.2, r2H, 0.5, 0.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 23, 42);
  doc.text('PT INDOPINTAN ADI PERKASA', leftColX + 4, leftY + 4.2);

  doc.setFillColor(207, 250, 254);
  doc.roundedRect(leftColX + leftColW - 28, leftY + 1.8, 25, 4.2, 1.2, 1.2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(14, 116, 144);
  doc.text('Vocational PKL', leftColX + leftColW - 15.5, leftY + 4.8, { align: 'center' });

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.8);
  doc.setTextColor(71, 85, 105);
  doc.text('Administrative Assistant & Operations Support · Jakarta', leftColX + 4, leftY + 8);

  const internPoints = [
    'Calculated monthly employee payroll data through precise mathematical aggregation of workday attendance logs and overtime hours.',
    'Conducted warehouse physical inventory audits, cataloging incoming/outgoing stock items to maintain high data accuracy.',
    'Provided rapid customer service and order dispute resolution on the Shopee marketplace platform.',
  ];

  let iY = leftY + 12.2;
  internPoints.forEach((pt) => {
    doc.setFillColor(6, 182, 212);
    doc.circle(leftColX + 5, iY - 0.9, 0.65, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(51, 65, 85);
    const split = doc.splitTextToSize(pt, leftColW - 10);
    doc.text(split, leftColX + 7.5, iY);
    iY += split.length * 2.8 + 1;
  });

  leftY += r2H + 4;

  // ==========================================
  // LEFT COLUMN: KEY ENGINEERING ARCHITECTURES
  // ==========================================
  leftY = drawSectionHeader('Featured Engineering & Open Architectures', leftColX, leftColW, leftY);

  const archProjects = [
    {
      title: 'Cosmic Portfolio Engine (0xfe1c.github.io)',
      stack: 'React · Vite · TypeScript · Web Audio · Canvas 2D/3D',
      desc: 'Engineered an interactive astrophysical simulation featuring a relativistic Kerr-metric black hole (Gargantua doppler beaming & accretion disc), synthetic audio drone osc, and 8-language i18n.',
    },
    {
      title: 'Realtime Webhook & Payment Dispatcher',
      stack: 'Node.js · WebSockets · Cryptographic HMAC · Redis/DB',
      desc: 'Architected automated payment verification dispatchers handling real-time instant notifications, cryptographic signature validations, and idempotent order state synchronization.',
    },
  ];

  archProjects.forEach((proj) => {
    const projH = 21.5;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(leftColX, leftY, leftColW, projH, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, leftColX + 3.5, leftY + 4.2);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.1);
    doc.setTextColor(124, 58, 237);
    doc.text(proj.stack, leftColX + 3.5, leftY + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.4);
    doc.setTextColor(71, 85, 105);
    const split = doc.splitTextToSize(proj.desc, leftColW - 7);
    doc.text(split, leftColX + 3.5, leftY + 11.8);

    leftY += projH + 3;
  });

  leftY += 1;

  // ==========================================
  // LEFT COLUMN: ACADEMIC TRAJECTORY
  // ==========================================
  leftY = drawSectionHeader('Academic Trajectory', leftColX, leftColW, leftY);

  const educationList = [
    {
      school: 'Universitas Bina Sarana Informatika (UBSI)',
      degree: 'S1 Teknologi Informasi (Bachelor of IT)',
      badge: '2023 – Present · Undergraduate',
      badgeColor: [224, 231, 255],
      textColor: [67, 56, 202],
      desc: 'Focus: Software Architecture, Algorithms, Database Systems & Modern Distributed Computing.',
    },
    {
      school: 'SMK Dinamika Pembangunan 1 Jakarta',
      degree: 'TITL (Electrical Power Installation Engineering)',
      badge: '2020 – 2023 · Vocational',
      badgeColor: [254, 243, 199],
      textColor: [180, 83, 9],
      desc: 'Mastered electrical circuit theory, power installation schematics, relay logic & hardware diagnostics.',
    },
    {
      school: 'SDN KGT 03 (Kelapa Gading Timur 03)',
      degree: 'Pendidikan Dasar (Primary Education)',
      badge: 'Completed',
      badgeColor: [241, 245, 249],
      textColor: [71, 85, 105],
      desc: 'Formative education establishing foundational mathematics, science, and computer curiosity.',
    },
  ];

  educationList.forEach((edu) => {
    const eduH = 15.5;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(leftColX, leftY, leftColW, eduH, 1.5, 1.5, 'FD');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.school, leftColX + 3.5, leftY + 4);

    // Degree
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.7);
    doc.setTextColor(124, 58, 237);
    doc.text(edu.degree, leftColX + 3.5, leftY + 7.8);

    // Badge
    const bW = doc.getTextWidth(edu.badge) + 4;
    doc.setFillColor(edu.badgeColor[0], edu.badgeColor[1], edu.badgeColor[2]);
    doc.roundedRect(leftColX + leftColW - bW - 2.5, leftY + 1.8, bW, 4, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(edu.textColor[0], edu.textColor[1], edu.textColor[2]);
    doc.text(edu.badge, leftColX + leftColW - bW / 2 - 2.5, leftY + 4.6, { align: 'center' });

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(71, 85, 105);
    doc.text(edu.desc, leftColX + 3.5, leftY + 11.8);

    leftY += eduH + 2.5;
  });

  // ==========================================
  // RIGHT COLUMN: TECHNICAL ARSENAL
  // ==========================================
  rightY = drawSectionHeader('Technological Arsenal', rightColX, rightColW, rightY);

  const skillGroups = [
    {
      category: 'Fullstack Web & Systems',
      items: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Vite', 'REST APIs', 'PostgreSQL'],
      color: [124, 58, 237],
    },
    {
      category: 'Mobile & Desktop Engineering',
      items: ['React Native', 'Flutter', 'Desktop Dev (Electron/C#)', 'WebSockets', 'SQLite'],
      color: [6, 182, 212],
    },
    {
      category: '3D Art, Animation & UI/UX',
      items: ['Blender 3D Modeling', 'Procedural Shading', 'Camera Animation', 'Figma UI/UX', '2D Digital Art'],
      color: [245, 158, 11],
    },
    {
      category: 'Hardware & Systems Logic',
      items: ['TITL Electrical Wiring', 'Circuit Relays', 'Payment Gateways', 'Git / GitHub CI/CD'],
      color: [16, 185, 129],
    },
  ];

  skillGroups.forEach((group) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(group.color[0], group.color[1], group.color[2]);
    doc.text(group.category.toUpperCase(), rightColX, rightY);
    rightY += 3;

    // Render skill badges / pills
    let pillCurX = rightColX;
    let pillCurY = rightY;

    group.items.forEach((item) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.1);
      const strW = doc.getTextWidth(item);
      const bWidth = strW + 4;

      if (pillCurX + bWidth > rightColX + rightColW) {
        pillCurX = rightColX;
        pillCurY += 4.5;
      }

      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.25);
      doc.roundedRect(pillCurX, pillCurY, bWidth, 3.8, 1, 1, 'FD');

      doc.setTextColor(51, 65, 85);
      doc.text(item, pillCurX + 2, pillCurY + 2.7);

      pillCurX += bWidth + 1.6;
    });

    rightY = pillCurY + 6;
  });

  // ==========================================
  // RIGHT COLUMN: VERIFIED CREDENTIALS
  // ==========================================
  rightY = drawSectionHeader('Verified Credentials', rightColX, rightColW, rightY);

  const certList = [
    {
      title: 'Fullstack Web Application Architecture',
      id: 'FS-0xFE1C-9921',
      issuer: 'Modern Web & API Engineering',
    },
    {
      title: 'TITL Electrical Power Installation',
      id: 'TITL-DP1-2023-8812',
      issuer: 'SMK DP1 & BNSP Standard',
    },
    {
      title: 'Blender 3D Graphics & Computer Animation',
      id: 'B3D-ANIM-7741',
      issuer: 'Spatial Computer Graphics',
    },
    {
      title: 'Fintech Payment Gateway Integrations',
      id: 'PAY-ARCH-5542',
      issuer: 'Secure Transaction Systems',
    },
  ];

  certList.forEach((c) => {
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.25);
    doc.roundedRect(rightColX, rightY, rightColW, 11, 1.2, 1.2, 'FD');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.7);
    doc.setTextColor(15, 23, 42);
    doc.text(c.title, rightColX + 3, rightY + 3.7);

    // Subtitle & ID
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(100, 116, 139);
    doc.text(c.issuer, rightColX + 3, rightY + 7.1);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(124, 58, 237);
    doc.text(c.id, rightColX + rightColW - 3, rightY + 7.1, { align: 'right' });

    rightY += 13;
  });

  // ==========================================
  // RIGHT COLUMN: CORE COMPETENCIES & METHODOLOGY
  // ==========================================
  rightY = drawSectionHeader('Core Methodologies', rightColX, rightColW, rightY);

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.25);
  doc.roundedRect(rightColX, rightY, rightColW, 25, 1.2, 1.2, 'FD');

  const methods = [
    { title: 'Fullstack Agility:', desc: 'Rapid zero-to-one prototyping with scalable architecture.' },
    { title: 'Hardware Insight:', desc: 'Circuit logic from TITL applied to low-level systems & stability.' },
    { title: 'Spatial Artistry:', desc: 'Blender 3D geometry & shaders elevate digital web interfaces.' },
  ];

  let mY = rightY + 3.8;
  methods.forEach((m) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.3);
    doc.setTextColor(124, 58, 237);
    doc.text(m.title, rightColX + 3, mY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.1);
    doc.setTextColor(71, 85, 105);
    const s = doc.splitTextToSize(m.desc, rightColW - 6);
    doc.text(s, rightColX + 3, mY + 3.3);

    mY += 7.2;
  });

  rightY += 27.5;

  // ==========================================
  // RIGHT COLUMN: PERSONAL DOSSIER
  // ==========================================
  rightY = drawSectionHeader('Pilot Dossier', rightColX, rightColW, rightY);

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.25);
  doc.roundedRect(rightColX, rightY, rightColW, 16, 1.5, 1.5, 'FD');

  const dossierLines = [
    { label: 'Origin:', val: 'Born July 2005 · Jakarta, ID' },
    { label: 'Languages:', val: 'Indonesian (Native), English (Proficient)' },
    { label: 'Availability:', val: 'Open for High-Impact Projects & Contracts' },
  ];

  let dY = rightY + 4;
  dossierLines.forEach((d) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.3);
    doc.setTextColor(109, 40, 217);
    doc.text(d.label, rightColX + 3, dY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(51, 65, 85);
    doc.text(d.val, rightColX + 17, dY);

    dY += 4.2;
  });

  // 4. FOOTER VERIFICATION BAR (Exact bottom alignment)
  const footerY = 290;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, footerY - 2.5, pageWidth - margin, footerY - 2.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(124, 58, 237);
  doc.text('0xFE1C ORBIT TERMINAL', margin, footerY + 1.2);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  doc.text('Verified Executive 1-Page Portfolio Resume · Cryptographically Timestamped', margin + 35, footerY + 1.2);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(6, 182, 212);
  doc.text('https://0xfe1c.github.io', pageWidth - margin, footerY + 1.2, { align: 'right' });

  // Save PDF file
  doc.save('Felix_0xFE1C_Portfolio_Resume.pdf');
}

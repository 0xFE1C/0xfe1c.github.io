import { jsPDF } from 'jspdf';

export function generateResumePDF(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;

  // Background - subtle luxury deep slate/white paper with cyber cosmic header banner
  doc.setFillColor(8, 12, 28);
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Decorative cosmic gradient simulation bar
  doc.setFillColor(124, 58, 237);
  doc.rect(0, 37, pageWidth * 0.45, 1.2, 'F');
  doc.setFillColor(6, 182, 212);
  doc.rect(pageWidth * 0.45, 37, pageWidth * 0.35, 1.2, 'F');
  doc.setFillColor(245, 158, 11);
  doc.rect(pageWidth * 0.8, 37, pageWidth * 0.2, 1.2, 'F');

  // Header Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('FELIX · 0xFE1C', margin, 16);

  // Subtitle
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(165, 180, 252);
  doc.text('Fullstack Software Engineer · UI/UX Designer · 3D Artist (Blender) · 2D Illustrator', margin, 23);

  // Contact line
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225);
  doc.text('Email: 0xFE1C@proton.me   |   GitHub: github.com/0xFE1C   |   Location: Jakarta, Indonesia', margin, 31);
  doc.text('Portfolio: https://0xfe1c.github.io   |   Born: July 2005', pageWidth - margin, 31, { align: 'right' });

  let y = 46;

  // Reusable section header renderer
  const renderSectionHeader = (title: string, currentY: number): number => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, currentY);

    // Subtle line
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(margin + doc.getTextWidth(title) + 4, currentY - 1, pageWidth - margin, currentY - 1);

    return currentY + 5;
  };

  // 1. EXECUTIVE SUMMARY
  y = renderSectionHeader('Executive Summary', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Multi-disciplinary Software Engineer and Digital Artist with 3+ years of freelance experience developing robust web, mobile, desktop, and fullstack systems with integrated payment gateways and real-time APIs. Combines rigorous computer science fundamentals with foundational electrical installation engineering and advanced visual artistry (Blender 3D & 2D digital illustration). Currently pursuing S1 Information Technology at Universitas Bina Sarana Informatika.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 3.8 + 3;

  // 2-COLUMN LAYOUT: Left (Experience & Education, 60%), Right (Skills & Certifications, 40%)
  const leftColWidth = contentWidth * 0.58;
  const rightColX = margin + leftColWidth + 6;
  const rightColWidth = contentWidth - leftColWidth - 6;

  let leftY = y;
  let rightY = y;

  // LEFT COLUMN: WORK EXPERIENCE
  leftY = renderSectionHeader('Experience & Missions', leftY);

  // Role 1: Freelance
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Independent Software Engineer (Freelance)', margin, leftY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2022 – Present (3 Years) | Jakarta, ID', margin + leftColWidth, leftY, { align: 'right' });
  leftY += 3.8;

  const freelanceBullets = [
    'Engineered custom end-to-end applications across Web, Mobile, and Desktop platforms tailored to unique client requirements.',
    'Architected secure payment gateway transaction workflows, webhook verification pipelines, and automated order processing.',
    'Designed responsive user interfaces and prototypes in Figma, translating complex specs into intuitive client software.',
    'Maintained high client satisfaction through clean modular code, performance optimization, and reliable system deployment.',
  ];

  freelanceBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(124, 58, 237);
    doc.text('•', margin + 1, leftY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(7.8);
    const split = doc.splitTextToSize(bullet, leftColWidth - 6);
    doc.text(split, margin + 4, leftY);
    leftY += split.length * 3.3 + 1;
  });
  leftY += 2;

  // Role 2: PT Indopintan
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('PT Indopintan Adi Perkasa', margin, leftY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Internship (PKL)', margin + leftColWidth, leftY, { align: 'right' });
  leftY += 3.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Administrative Assistant & Operations Support', margin, leftY);
  leftY += 3.8;

  const internBullets = [
    'Calculated monthly employee payroll records by processing workday attendance and overtime hour logs.',
    'Organized warehouse inventory tracking, cataloging incoming/outgoing stock to reduce discrepancies.',
    'Provided responsive e-commerce customer support on Shopee, addressing product queries and order updates.',
  ];

  internBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(6, 182, 212);
    doc.text('•', margin + 1, leftY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(7.8);
    const split = doc.splitTextToSize(bullet, leftColWidth - 6);
    doc.text(split, margin + 4, leftY);
    leftY += split.length * 3.3 + 1;
  });
  leftY += 3;

  // LEFT COLUMN: EDUCATION
  leftY = renderSectionHeader('Education & Academics', leftY);

  const eduItems = [
    {
      school: 'Universitas Bina Sarana Informatika (UBSI)',
      degree: 'S1 Information Technology (Undergraduate)',
      year: 'In Progress (Current)',
      desc: 'Focus: Software Engineering, Database Systems, Computer Networks & Modern Web.',
    },
    {
      school: 'SMK Dinamika Pembangunan 1 Jakarta',
      degree: 'TITL (Electrical Power Installation Engineering)',
      year: 'Vocational High School',
      desc: 'Mastered electrical circuit theory, industrial automation, and hardware systems.',
    },
    {
      school: 'SDN KGT 03 (Kelapa Gading Timur 03)',
      degree: 'Primary Education',
      year: 'Completed',
      desc: 'Foundational elementary studies in Jakarta.',
    },
  ];

  eduItems.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(item.school, margin, leftY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.3);
    doc.setTextColor(100, 116, 139);
    doc.text(item.year, margin + leftColWidth, leftY, { align: 'right' });
    leftY += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(124, 58, 237);
    doc.text(item.degree, margin, leftY);
    leftY += 3.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.3);
    doc.setTextColor(71, 85, 105);
    doc.text(item.desc, margin, leftY);
    leftY += 4.2;
  });

  // RIGHT COLUMN: SKILLS ARSENAL
  const renderRightHeader = (title: string, currentY: number): number => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), rightColX, currentY);

    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(rightColX + doc.getTextWidth(title) + 3, currentY - 1, pageWidth - margin, currentY - 1);

    return currentY + 4.5;
  };

  rightY = renderRightHeader('Technical Arsenal', rightY);

  const skillGroups = [
    {
      name: 'Fullstack & Web',
      items: 'React, TypeScript, JavaScript, Node.js, Express, Tailwind CSS, Vite, HTML5/CSS3, REST APIs',
    },
    {
      name: 'Mobile & Desktop',
      items: 'Cross-platform Mobile (React Native/Flutter), Desktop App Development (Electron/C#), SQLite',
    },
    {
      name: 'Creative & 3D / 2D Art',
      items: 'Blender 3D (Modeling, Animation, Procedural Shaders), Figma (UI/UX Systems), 2D Digital Art',
    },
    {
      name: 'Engineering & Hardware',
      items: 'Electrical Installation (TITL), Circuit Wiring, Payment Gateway Integration, Git & CI/CD',
    },
  ];

  skillGroups.forEach((group) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(124, 58, 237);
    doc.text(group.name, rightColX, rightY);
    rightY += 3.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    const split = doc.splitTextToSize(group.items, rightColWidth);
    doc.text(split, rightColX, rightY);
    rightY += split.length * 3.2 + 2;
  });
  rightY += 2;

  // RIGHT COLUMN: CERTIFICATIONS
  rightY = renderRightHeader('Certifications', rightY);

  const certs = [
    {
      title: 'Fullstack Web Application Architecture',
      issuer: 'Technical Credential · Modern JavaScript & APIs',
    },
    {
      title: 'TITL Electrical Power Installation Competency',
      issuer: 'SMK Dinamika Pembangunan 1 & Industry Standards',
    },
    {
      title: 'Blender 3D Modeling & Animation Mastery',
      issuer: 'Creative Computer Graphics & Spatial Art',
    },
    {
      title: 'Payment Gateway & Secure Webhook Integration',
      issuer: 'Fintech Transaction Workflows & API Security',
    },
  ];

  certs.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    const splitTitle = doc.splitTextToSize(cert.title, rightColWidth);
    doc.text(splitTitle, rightColX, rightY);
    rightY += splitTitle.length * 3.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(cert.issuer, rightColX, rightY);
    rightY += 3.8;
  });
  rightY += 1;

  // RIGHT COLUMN: LANGUAGES & ATTRIBUTES
  rightY = renderRightHeader('Languages & Traits', rightY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text('• Indonesian: Native proficiency', rightColX, rightY);
  rightY += 3.2;
  doc.text('• English: Professional working proficiency', rightColX, rightY);
  rightY += 3.2;
  doc.text('• Key Strengths: Rapid Prototyping, Systems Thinking, High Aesthetic Standards', rightColX, rightY);

  // FOOTER BAR
  const maxY = Math.max(leftY, rightY);
  const footerY = Math.min(pageHeight - 7, Math.max(maxY + 6, pageHeight - 10));

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, footerY - 2, pageWidth - margin, footerY - 2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.text('Verified 1-Page Portfolio Resume · Generated dynamically from 0xFE1C Orbit Terminal', margin, footerY + 1.5);
  doc.text('github.com/0xFE1C/0xFE1C', pageWidth - margin, footerY + 1.5, { align: 'right' });

  // Save PDF
  doc.save('Felix_0xFE1C_Portfolio_Resume.pdf');
}

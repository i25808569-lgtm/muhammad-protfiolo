import { Project, Skill, Service, WorkflowStep, Testimonial } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Zenith Luxury Commerce',
    description: 'An ultra-premium headless e-commerce store with floating 3D galleries, customized page transitions, and a frictionless cart system.',
    category: 'web',
    imageUrl: '/src/assets/images/ui_dashboard_1783856633153.jpg', // UI Dashboard
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    liveUrl: 'https://zenith-luxury.example.com',
    codeUrl: 'https://github.com/ibrahimfazal/zenith-luxury',
    role: 'Lead Full Stack Developer & UI/UX Designer',
    client: 'Zenith Atelier Paris',
    year: '2026',
    details: 'Zenith Luxury Commerce is a bespoke online boutique. I crafted the user interface with microscopic visual detail and fluid motion, achieving 100% lighthouse scores and unparalleled premium visual styling.'
  },
  {
    id: 'p2',
    title: 'Aether Monogram Identity',
    description: 'A minimalist monogram brand system for an elite venture capital firm. Incorporates gold and platinum vector geometric layouts.',
    category: 'logo',
    imageUrl: '/src/assets/images/logo_luxury_1783856590527.jpg', // Luxury Logo
    techStack: ['Adobe Illustrator', 'Figma', 'Vector Geometry', 'Brand Strategy'],
    liveUrl: 'https://aether-branding.example.com',
    role: 'Principal Brand Identity Designer',
    client: 'Aether Capital',
    year: '2025',
    details: 'For Aether, the requirement was absolute sophistication. I engineered a modular vector monogram that remains perfectly legible at 16px as well as on large display billboards, establishing a luxury reputation.'
  },
  {
    id: 'p3',
    title: 'NeonPulse Promos',
    description: 'A high-fidelity retro-futuristic creative agency poster design, presenting beautiful human-cybernetic face silhouettes and abstract geometries.',
    category: 'design',
    imageUrl: '/src/assets/images/poster_cyberpunk_1783856575815.jpg', // Cyberpunk Poster
    techStack: ['Adobe Photoshop', 'Digital Illustration', 'Creative Manipulation'],
    liveUrl: 'https://neonpulse.example.com',
    role: 'Graphic Artist & Visual Designer',
    client: 'NeonPulse Agency',
    year: '2026',
    details: 'Inspired by cybernetic futures, this creative poster explores glowing lighting, intricate digital details, and a high-contrast color scheme. It serves as key advertising material for electronic art festivals.'
  },
  {
    id: 'p4',
    title: 'Architectura Swiss Modernism',
    description: 'A vertical typographic and architectural grid poster focusing on Swiss minimalism, structural layouts, and bold crimson accents.',
    category: 'design',
    imageUrl: '/src/assets/images/poster_brutalist_1783856609402.jpg', // Swiss Brutalist
    techStack: ['InDesign', 'Adobe Illustrator', 'Swiss Grid System', 'Typography'],
    liveUrl: 'https://architectura-poster.example.com',
    role: 'Poster Designer & Typographer',
    client: 'Modern Architecture Exhibition',
    year: '2025',
    details: 'An exhibition poster exploring the purity of spatial layout. I implemented a mathematically precise grid with high-end negative space to guide the eye across editorial sections effortlessly.'
  }
];

export const SKILLS_DATA: Skill[] = [
  // Development
  { name: 'HTML5 / CSS3', level: 98, category: 'dev' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'dev' },
  { name: 'TypeScript', level: 92, category: 'dev' },
  { name: 'React / Vite', level: 96, category: 'dev' },
  { name: 'Next.js', level: 90, category: 'dev' },
  { name: 'Tailwind CSS', level: 98, category: 'dev' },
  { name: 'Node.js / Express', level: 88, category: 'dev' },
  { name: 'Firebase', level: 85, category: 'dev' },
  { name: 'Framer Motion', level: 94, category: 'dev' },

  // Design
  { name: 'Figma (UI/UX)', level: 96, category: 'design' },
  { name: 'Adobe Photoshop', level: 94, category: 'design' },
  { name: 'Adobe Illustrator', level: 95, category: 'design' },
  { name: 'Logo Design', level: 97, category: 'design' },
  { name: 'Poster Design', level: 93, category: 'design' },
  { name: 'Brand Identity', level: 96, category: 'design' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'Premium Web Development',
    description: 'Fully responsive, hand-crafted full-stack web applications and interactive frontends. Standard-setting performance meets elegant logic.',
    icon: 'Code',
    deliverables: ['Custom React & Next.js Apps', 'Frictionless E-Commerce Engines', 'State-of-the-Art Animations', 'SEO & Performance Audits']
  },
  {
    id: 's2',
    title: 'UI/UX Design & Prototyping',
    description: 'Transforming complex systems into clear, intuitive, and visually arresting user interfaces. Focusing on motion design and user psychological flows.',
    icon: 'Figma',
    deliverables: ['Bespoke Figma Prototypes', 'User Journey Mapping', 'Design Systems (Tokens & Assets)', 'Interactive Micro-Animations']
  },
  {
    id: 's3',
    title: 'Brand Identity & Logo Design',
    description: 'Engineering pristine geometric logo systems and monograms that encapsulate the true soul and prestige of a luxury brand.',
    icon: 'Compass',
    deliverables: ['Minimalist Monograms', 'Vector Icon Systems', 'Typography Guidelines', 'Full Brand Guidelines Document']
  },
  {
    id: 's4',
    title: 'Poster & Graphic Design',
    description: 'Creating high-impact, award-winning visual and typographic posters. Blending Swiss Grid precision with artistic, eye-catching creative elements.',
    icon: 'Palette',
    deliverables: ['Swiss Typographic Posters', 'Cyberpunk & Abstract Key Visuals', 'Digital Art Illustrations', 'Marketing Campaign Collateral']
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Idea & Conceptualization',
    description: 'The foundation of prestige is understanding intent. We brainstorm and research keywords, competitor trends, and luxury aesthetic references.',
    details: 'Through exhaustive alignment calls and creative mood boards, we establish a definitive direction before a single line of code or pixel is drawn.'
  },
  {
    number: '02',
    title: 'Wireframing & UI/UX Design',
    description: 'We translate raw ideas into structural layouts and beautiful wireframes, mapping out logical and interactive micro-motions inside Figma.',
    details: 'Here, the visual layout is perfected. Colors, luxury gradients, and custom font structures are defined in a comprehensive design system.'
  },
  {
    number: '03',
    title: 'Artistic Graphic Design',
    description: 'For projects requiring branding, logos, or editorial posters, we design vectors and graphics using Illustrator and Photoshop.',
    details: 'I hand-craft logos and posters with mathematical grids to ensure perfect geometric proportions and breathtaking visual impact.'
  },
  {
    number: '04',
    title: 'High-End Web Development',
    description: 'We turn flat designs into responsive interactive realities, compiling clean typescript, React, and motion physics animations.',
    details: 'Every micro-interaction is optimized to operate at a stable 60/120fps. Backends and integrations are engineered for bulletproof reliability.'
  },
  {
    number: '05',
    title: 'The Launch & Perfection',
    description: 'After rigorous QA across various display matrices, mobile grids, and web systems, we launch your pristine experience to the world.',
    details: 'The site is deployed onto lightning-fast edge networks, backed by robust security guidelines, server-side caching, and flawless SEO indexing.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Sébastien Laurent',
    role: 'Creative Director',
    company: 'Zenith Atelier Paris',
    comment: 'Ibrahim did not just build our e-commerce platform; he breathed absolute artistic life into it. His unique combination of pure visual taste and masterful full-stack coding is incredibly rare. He is our go-to creative developer.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    company: 'Aether Capital',
    comment: 'Our branding and emblem needed to communicate trust and extreme premium values. Ibrahim engineered an absolute masterpiece vector design and supplemented it with an immaculate interactive landing page. Highly professional.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Marcus K.',
    role: 'Art Director',
    company: 'NeonPulse Agency',
    comment: 'The poster designs Ibrahim crafted for our electronic music festival became the absolute talking point of our entire advertising campaign. His eye for typography balance and neon color harmony is outstanding.',
    rating: 5
  }
];

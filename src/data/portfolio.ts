export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohith Kumar G',
  displayName: 'Rohith Kumar G',
  firstName: 'ROHITH',
  seriesTag: 'THE SERIES',
  originalLabel: 'A ROHITH KUMAR ORIGINAL',
  role: 'The Builder • ECE Student & Software Developer',
  tagline: ['ECE Student', 'Software Developer', 'AI Enthusiast'],
  intro:
    'An Electronics & Communication Engineering student, software builder, and technology explorer passionate about systems thinking, AI interfaces, and turning bold ideas into reliable digital experiences.',
  location: 'India',
  email: 'rohithkumar55666@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rohith-kumar-99630b382?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  resumePdf: '#',
  portrait: {
    src: './assets/portrait-720.webp',
    srcSet: './assets/portrait-420.webp 420w, ./assets/portrait-720.webp 720w, ./assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rohith Kumar G',
  },
  interests: ['Artificial Intelligence', 'Software Development', 'System Architecture', 'Prompt Engineering', 'Creative Web'],
};

export const education = [
  {
    school: 'Engineering College',
    place: 'India',
    degree: 'Bachelor of Technology — Electronics and Communication Engineering (ECE)',
    period: 'Pursuing',
    score: 'B.Tech ECE',
  },
];

export const experience = [
  {
    company: 'Agriverse Initiative',
    role: 'Web Developer Intern',
    place: 'India',
    period: 'Internship',
    points: [
      'Contributed as a web developer to build and refine the Agriverse agricultural marketplace platform.',
      'Developed responsive catalog pages and UI layouts allowing users to browse and discover farm products, grains, vegetables, and fruits.',
      'Collaborated on content workflows, CMS management, and e-commerce structure serving real user requirements.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  image?: string;
  palette: Palette;
  motif: 'ai' | 'agri' | 'skill' | 'series';
};

export const projects: Project[] = [
  {
    id: 'smartbot-ai',
    title: 'Personal AI / SmartBot',
    year: '2025',
    genre: 'AI • LLM • Assistant',
    logline: 'A private intelligence and passcode-protected assistant interface built around personal workflows and thought processes.',
    stack: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'LLM API', 'Prompt Engineering'],
    build: [
      'Engineered a private AI chatbot interface connected to modern LLM APIs with custom prompt engineering workflows.',
      'Architected a passcode-protected private environment for rapid brainstorming, technical ideation, and concept research.',
      'Designed a sleek, distraction-free conversational canvas calibrated specifically for personal productivity.',
    ],
    features: [
      'Direct LLM API integration with real-time prompt steering',
      'Passcode-protected private access control',
      'Context-aware chat history and research ideation toolset',
      'Responsive, lightweight custom frontend client',
    ],
    metrics: [
      { value: 'Private', label: 'passcode protected' },
      { value: '100%', label: 'custom interface' },
      { value: 'Real-Time', label: 'LLM responses' },
      { value: 'Zero', label: 'third-party bloat' },
    ],
    image: './assets/smartbot.png',
    palette: { from: '#061826', via: '#0d3859', to: '#040b12', accent: '#4cc9ff' },
    motif: 'ai',
  },
  {
    id: 'agriverse',
    title: 'Agriverse',
    year: '2024',
    genre: 'E-Commerce • Web Development • CMS',
    logline: 'An agricultural commerce platform empowering farmers and consumers to discover and trade grains, vegetables, and produce.',
    stack: ['Web Development', 'CMS', 'E-Commerce', 'JavaScript', 'Responsive UI'],
    build: [
      'Developed key catalog and marketplace interfaces during an internship to connect agricultural producers directly with consumers.',
      'Configured CMS schemas and product hierarchies for organic grains, seasonal fruits, and fresh farm harvests.',
      'Optimized page delivery and mobile browsing for reliable access across rural and urban connection speeds.',
    ],
    features: [
      'Agricultural marketplace for fresh farm produce and staples',
      'Structured CMS-driven product catalog and categories',
      'Mobile-first responsive shopping experience',
      'Clean navigation architecture tailored for diverse end-users',
    ],
    metrics: [
      { value: 'Internship', label: 'production experience' },
      { value: '100%', label: 'mobile responsive' },
      { value: 'Direct', label: 'farm-to-consumer vision' },
      { value: 'Multi-category', label: 'grain, fruit & vegetable catalogs' },
    ],
    image: './assets/agriverse.png',
    palette: { from: '#031a0e', via: '#0c522f', to: '#040d07', accent: '#46e3a8' },
    motif: 'agri',
  },
  {
    id: 'skill-bridge',
    title: 'Skill Bridge',
    year: '2025',
    genre: 'Smart Education • Voice-First • AI Learning',
    logline: 'A smart education concept designed around voice-first interaction, accessible learning pathways, and personalized skill development.',
    stack: ['AI Concepts', 'Voice UI', 'EdTech Architecture', 'JavaScript', 'Modern Web'],
    build: [
      'Conceptualized and architected an inclusive learning interface removing literacy and tech barriers through conversational voice commands.',
      'Structured personalized curriculum paths adapting dynamically to individual comprehension speeds and learning styles.',
      'Formulated an accessible, multimodal learning journey uniting speech synthesis, audio cues, and intuitive visual milestones.',
    ],
    features: [
      'Voice-first conversational navigation for inclusive accessibility',
      'Adaptive learning tracks tailored to individual user capability',
      'Bite-sized milestone achievements and skill validation',
      'Multimodal interface blending audio, visual, and textual cues',
    ],
    metrics: [
      { value: 'Voice-First', label: 'inclusive interaction' },
      { value: 'Adaptive', label: 'personalized skill pacing' },
      { value: 'Universal', label: 'accessible design philosophy' },
      { value: 'Concept', label: 'smart education system' },
    ],
    palette: { from: '#1a0c02', via: '#733706', to: '#0a0602', accent: '#ffb547' },
    motif: 'skill',
  },
  {
    id: 'rohith-the-series',
    title: 'Rohith: The Series',
    year: '2026',
    genre: 'Cinematic Web • Motion Design • Creative Engineering',
    logline: 'A streaming-platform-inspired portfolio transforming an engineering resume into an episodic cinematic series.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vite'],
    build: [
      'Architected a 60fps streaming-grade digital experience with custom letterbox transitions, intro reels, and viewer profile routing.',
      'Engineered pinned horizontal scroll rails on desktop with fluid fallback to native momentum swipe on mobile devices.',
      'Implemented full keyboard accessibility (Esc, Space, Enter, Arrow keys) and strict respect for prefers-reduced-motion.',
    ],
    features: [
      'Studio-grade opening sequence with skip controls and audio-visual timing',
      'Viewer profile selection (Recruiter, Developer, Creative) dynamically prioritizing sections',
      'Pinned title sequences, detailed project modals, and keyboard-driven highlight reels',
      'Zero layout shifts and full responsive fidelity from phones to 4K monitors',
    ],
    metrics: [
      { value: '60 FPS', label: 'fluid motion' },
      { value: '3 Profiles', label: 'tailored viewer lenses' },
      { value: '100%', label: 'custom cinematic typography' },
      { value: 'Accessible', label: 'reduced motion & keyboard' },
    ],
    palette: { from: '#220409', via: '#780c1d', to: '#080508', accent: '#ff3d5a' },
    motif: 'series',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'coding-prize',
    title: 'First Prize Winner',
    org: 'College Coding Competition',
    detail: 'Won 1st Prize in an inter-college coding competition, excelling in rapid problem-solving, algorithm efficiency, and clean code implementation.',
    laurel: 'Champion',
  },
  {
    id: 'internship-milestone',
    title: 'Agriverse Contributor',
    org: 'Web Development Internship',
    detail: 'Successfully completed internship milestone delivering core catalog and e-commerce platform components for real-world agricultural commerce.',
    laurel: 'Industry Project',
  },
  {
    id: 'personal-ai-milestone',
    title: 'SmartBot Architecture',
    org: 'Independent AI Engineering',
    detail: 'Designed and deployed an independent private AI platform integrating LLM APIs with passcode security and prompt-engineering pipelines.',
    laurel: 'Independent Creation',
  },
  {
    id: 'ece-journey',
    title: 'ECE Builder & Creator',
    org: 'Electronics & Communication',
    detail: 'Bridging hardware systems thinking, embedded curiosity, and software development into integrated digital applications.',
    laurel: 'Engineering Focus',
  },
];

export type Certification = { issuer: string; name: string };

export const certifications: Certification[] = [
  { issuer: 'College Tech', name: 'First Prize — College Coding Competition' },
  { issuer: 'Internship', name: 'Web Development Certification — Agriverse' },
  { issuer: 'Self-Directed', name: 'LLM Prompt Engineering & AI Systems' },
  { issuer: 'Web Dev', name: 'Frontend Architecture & Modern JavaScript' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Languages & Core',
    subtitle: 'Languages used to turn ideas into systems',
    skills: [
      { name: 'Python', mono: 'Py', note: 'AI & Scripting' },
      { name: 'JavaScript', mono: 'Js', note: 'Modern Web' },
      { name: 'C', mono: 'C', note: 'Low-Level' },
      { name: 'C++', mono: 'C+', note: 'Systems' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frameworks',
    subtitle: 'Interface and platform layer',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Vite', mono: 'Vt' },
      { name: 'CMS & E-Commerce', mono: 'Cm' },
      { name: 'Responsive UI', mono: 'Ui' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Exploration',
    subtitle: 'Extending curiosity into intelligence',
    skills: [
      { name: 'Prompt Engineering', mono: 'Pe', note: 'Core focus' },
      { name: 'LLM APIs', mono: 'Lm' },
      { name: 'AI Chatbots', mono: 'Cb' },
      { name: 'Smart Education Models', mono: 'Se' },
      { name: 'AI Tooling', mono: 'At' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Core developer environment',
    skills: [
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Browser DevTools', mono: 'Dt' },
      { name: 'Terminal / CLI', mono: 'Sh' },
    ],
  },
  {
    id: 'mindset',
    title: 'Product Thinking',
    subtitle: 'How ideas become reality',
    skills: [
      { name: 'Research Deeply', mono: 'Rs' },
      { name: 'Build Systems', mono: 'Bs' },
      { name: 'Iterative Refinement', mono: 'Ir' },
      { name: 'Systems Thinking', mono: 'St' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Personal AI / SmartBot', 'Automation scripts', 'LLM workflows'],
  JavaScript: ['Agriverse', 'Rohith: The Series', 'SmartBot Client'],
  C: ['College Coding Competition', 'Low-level programming', 'ECE coursework'],
  'C++': ['Algorithmic problem solving', '1st Prize Competition', 'OOP concepts'],
  HTML5: ['Agriverse', 'Personal AI', 'Creative Web'],
  CSS3: ['Agriverse', 'Rohith: The Series', 'Cinematic styling'],
  React: ['Rohith: The Series', 'Modern UI platforms'],
  'Tailwind CSS': ['Rohith: The Series', 'Responsive design', 'Design token systems'],
  TypeScript: ['Rohith: The Series', 'Strict type safety', 'Component contracts'],
  Vite: ['Rohith: The Series', 'Fast HMR & bundling', 'Singlefile production builds'],
  'CMS & E-Commerce': ['Agriverse marketplace'],
  'Responsive UI': ['Agriverse platform', 'Mobile-first layouts', 'Touch gestures'],
  'Prompt Engineering': ['Personal AI / SmartBot', 'LLM API integration', 'Workflow automation'],
  'LLM APIs': ['Personal AI / SmartBot'],
  'AI Chatbots': ['Personal AI / SmartBot', 'Conversational design', 'Real-time streaming'],
  'Smart Education Models': ['Skill Bridge concept', 'Voice-first interaction', 'Adaptive pathways'],
  'AI Tooling': ['Prompt steering pipelines', 'LLM automation', 'Productivity tools'],
  'VS Code': ['Primary development IDE', 'Extension ecosystem', 'Git workflow'],
  'Browser DevTools': ['Performance profiling', 'Network inspection', 'Responsive emulation'],
  'Terminal / CLI': ['Build tooling & scripts', 'Git version control', 'Node / Python environments'],
  'Research Deeply': ['Methodology & design', 'Pre-build exploration', 'System architecture'],
  'Build Systems': ['Iterative engineering', 'End-to-end deployment', 'Production readiness'],
  'Iterative Refinement': ['Continuous testing', 'Motion tuning', 'Feedback incorporation'],
  'Systems Thinking': ['ECE coursework', 'Platform architecture'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Origin',
    period: 'The Spark',
    synopsis: 'Discovered the thrill of technology — recognizing that code, hardware, and creative curiosity give ideas a direct path into reality.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Curiosity as an Engine',
        description: 'Technology interested me not as abstract theory, but because it accelerates execution and makes the impossible buildable.',
        tags: ['Curiosity', 'ECE', 'Origin'],
        runtime: 'Origin Arc',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Hardware-Software Bridge',
        description: 'Studying Electronics and Communication Engineering cultivated deep systems thinking — from signals and circuits to software logic.',
        tags: ['Electronics', 'Systems', 'Foundation'],
        runtime: 'Academic Arc',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Mindset',
    period: 'Learning to Build',
    synopsis: 'Formulating the core personal philosophy: Research deeply before building, turn understanding into working code, and iterate relentlessly.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Research Before Code',
        description: 'When encountering the unknown, investigate it with precision. Understanding before acting is not caution — it is precision.',
        tags: ['Methodology', 'Research', 'Precision'],
        runtime: 'Philosophy Arc',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: '1st Place Coding Champion',
        description: 'Secured First Prize in the college coding competition, solving complex algorithmic challenges under strict time constraints.',
        tags: ['Coding', '1st Prize', 'Champion'],
        runtime: 'Tournament Arc',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning by Building',
    period: 'Real World Proof',
    synopsis: 'Applying code to serve genuine human needs — an e-commerce platform for farmers and a personal AI built for one mind.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Agriverse: Serving People',
        description: 'Web development internship delivering an agricultural commerce platform connecting farmers directly to consumers.',
        tags: ['Agriverse', 'E-Commerce', 'Web Dev'],
        runtime: 'Internship Arc',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'SmartBot: A Private Intelligence',
        description: 'Built a passcode-protected personal AI chatbot interface tuned for custom research, ideation, and rapid problem-solving.',
        tags: ['Python', 'LLM API', 'SmartBot'],
        runtime: 'Creation Arc',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Skill Bridge: Voice for All',
        description: 'Architecting an inclusive, voice-first educational platform enabling customized skill journeys without interface friction.',
        tags: ['Smart Education', 'Voice-First', 'EdTech'],
        runtime: 'Concept Arc',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'What Comes Next',
    period: 'Now Streaming',
    synopsis: 'Expanding the horizon: full-stack systems, generative AI interfaces, and laying the groundwork for a technology business.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Cinematic Standard',
        description: 'Crafting this streaming-platform portfolio experience from scratch using React, Framer Motion, and cinematic typography.',
        tags: ['React', 'Framer Motion', 'The Series'],
        runtime: 'Current Era',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'To Be Continued',
        description: 'Aiming to build useful technology, solve meaningful problems, and scale creation into a enduring technology enterprise.',
        tags: ['Vision', 'Ambition', 'Future'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Private Assistant', title: 'Personal AI / SmartBot', detail: 'Passcode-protected LLM assistant built for one mind', palette: ocean },
  { label: 'Real-World Platform', title: 'Agriverse', detail: 'Agricultural marketplace connecting farmers & consumers', palette: jade },
  { label: 'EdTech Concept', title: 'Skill Bridge', detail: 'Voice-first inclusive learning and adaptive skill pathways', palette: amber },
  { label: 'Competition Champion', title: '1st Prize Winner', detail: 'Won First Place in College Coding Competition', palette: crimson },
  { label: 'Core Methodology', title: 'Research & Build', detail: 'Investigate deeply before engineering; iterate to perfection', palette: violet },
  { label: 'Academic Foundation', title: 'ECE Engineering', detail: 'Electronics & Communication — hardware to software systems', palette: ocean },
  { label: 'The Creative Frontier', title: 'The Series Portfolio', detail: 'Streaming platform experience with 60fps motion architecture', palette: crimson },
  { label: 'AI Specialization', title: 'Prompt Engineering', detail: 'Guiding LLM logic, persona tuning & real-time workflows', palette: amber },
  { label: 'Development Toolset', title: 'Python & JavaScript', detail: 'Versatile dual-stack for automation, interfaces & systems', palette: jade },
  { label: 'Future Horizon', title: 'Technology Empire', detail: 'Long-term mission to build impactful software enterprises', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'The Builder.',
    lines: ['Rohith Kumar G', 'Electronics and Communication Engineering student', 'Software developer and AI enthusiast'],
    chips: ['ECE', 'Developer', 'AI'],
  },
  {
    kicker: 'Creations',
    title: 'What I Build',
    lines: [
      'SmartBot — Private passcode-protected AI assistant',
      'Agriverse — Agricultural marketplace for farm produce',
      'Skill Bridge — Voice-first adaptive learning concept',
    ],
    chips: ['SmartBot', 'Agriverse', 'Skill Bridge', 'The Series'],
  },
  {
    kicker: 'Milestone',
    title: 'Coding Champion',
    lines: ['First Prize Winner at College Coding Competition', 'Awarded 1st place for algorithmic precision and problem-solving speed'],
    chips: ['1st Prize', 'Coding Champion', 'First Place'],
  },
  {
    kicker: 'Philosophy',
    title: 'Research. Build. Improve.',
    lines: [
      '“Technology is like a knife. Proper usage will make you excellent.”',
      'Investigate the unknown until understanding turns into code.',
    ],
  },
  {
    kicker: 'Toolkit',
    title: 'The Core Stack',
    lines: ['Python, JavaScript, C, C++, HTML5, CSS3', 'React, Prompt Engineering, LLM APIs'],
    chips: ['Python', 'JavaScript', 'React', 'Prompt Engineering'],
  },
  {
    kicker: 'The Future',
    title: 'To Be Continued…',
    lines: ['Building technology that solves meaningful problems', 'Moving toward full-stack engineering and technology entrepreneurship'],
  },
];

export type ProfileId = 'rohith' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rohith',
    name: 'Rohith',
    blurb: 'The full cinematic series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects, achievements & verified credentials first',
    color: '#4cc9ff',
    order: ['originals', 'moments', 'skills', 'about', 'journey', 'picks', 'story'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Technical implementations, architecture & tech stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'picks', 'journey', 'moments', 'about', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Storytelling arc, visual philosophy & experiments first',
    color: '#ffb547',
    order: ['journey', 'originals', 'picks', 'about', 'skills', 'moments', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'The Pilot', card: 'Who I Am', meta: 'The Pilot • Background & mindset', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'What I Build', meta: `${projects.length} Originals • Verified projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: '10 Defining Highlights', palette: jade },
  skills: { nav: 'Toolkit', card: 'Technical Toolkit', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Milestones & Awards', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Screenplay', card: 'The Screenplay', meta: 'Overview & Connect', palette: violet },
};

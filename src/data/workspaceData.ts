export type WorkspaceId =
  | 'work'
  | 'caseStudies'
  | 'services'
  | 'process'
  | 'assets'
  | 'clients'
  | 'about'
  | 'contact';

export type Project = {
  id: string;
  title: string;
  category: string;
  hero: string;
  metrics: { label: string; value: string }[];
  summary: string;
  video?: string;
};

export const sidebarItems: { id: WorkspaceId; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'caseStudies', label: 'Case Studies' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'assets', label: 'Assets' },
  { id: 'clients', label: 'Clients' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const projects: Project[] = [
  {
    id: 'pulsar',
    title: 'Pulsar Commerce OS',
    category: 'Digital Product System',
    hero: 'Gradient frame · retail command center',
    summary: 'Unified visual architecture across storefront, content ops, and campaign orchestration.',
    metrics: [
      { label: 'Conversion Lift', value: '+41%' },
      { label: 'Design Velocity', value: '2.7x' },
      { label: 'Time to Ship', value: '-34%' },
    ],
  },
  {
    id: 'alto',
    title: 'ALTO Brand Interface',
    category: 'Brand + Experience',
    hero: 'Notion-like storytelling board',
    summary: 'A modular narrative system connecting identity, motion, and editorial surfaces.',
    metrics: [
      { label: 'Retention', value: '+28%' },
      { label: 'NPS', value: '+19' },
      { label: 'Content Reuse', value: '68%' },
    ],
  },
  {
    id: 'sora',
    title: 'SORA Mobility Studio',
    category: 'Service Design',
    hero: 'Transit planning canvas with live insights',
    summary: 'Cross-team design ops playbook for scaling service design and experimentation.',
    metrics: [
      { label: 'User Completion', value: '+33%' },
      { label: 'Ops Efficiency', value: '+51%' },
      { label: 'Prototype Cycle', value: '5d' },
    ],
  },
];

export const services = [
  {
    title: 'Design Systems',
    detail: 'Token architecture, component libraries, governance and release workflows.',
  },
  {
    title: 'Product Strategy',
    detail: 'Opportunity mapping, positioning systems, and north-star experience frameworks.',
  },
  {
    title: 'Creative Direction',
    detail: 'Identity-driven interaction language across web, product, and campaign touchpoints.',
  },
  {
    title: 'Design Operations',
    detail: 'Rituals, standards, and tooling for high-velocity multidisciplinary teams.',
  },
];

export const processFlow = [
  'Signal Mapping',
  'System Blueprint',
  'Prototype Sprints',
  'Release + Learn',
  'Scale Library',
];

export const clients = ['A24', 'Stripe', 'Linear', 'Notion', 'Vercel', 'Figma', 'Arc', 'Rivian'];

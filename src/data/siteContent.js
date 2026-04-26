export const siteConfig = {
  name: 'ACTA',
  fullName: 'ACTA — Legislative Impact Engine',
  tagline: 'Turn Legislative Changes Into Client-Specific Actions',
  description:
    'ACTA monitors Romanian and European legislative changes, interprets their impact, and tells tax consultants exactly what each client must do next.',
  positioning:
    'ACTA turns legislative changes into client-specific actions — automatically, accurately, and at scale.',
  differentiator: "We don't deliver information. We deliver decisions.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@acta.ro',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://acta.ro',
  demoUrl: '/demo',
  nav: [
    { label: 'Product', href: '/product' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Vision', href: '/vision' },
  ],
};

export const heroContent = {
  label: 'Legislative Impact Engine',
  headline: 'Turn Legislative Changes Into Client-Specific Actions',
  subheadline:
    'ACTA monitors Romanian and European legislative changes, interprets their impact, and tells tax consultants exactly what each client must do next.',
  primaryCta: { label: 'Request a Demo', href: '/demo' },
  secondaryCta: { label: 'View Platform', href: '/product' },
  dashboardMetrics: [
    { value: '17', label: 'Clients Affected', status: 'high' },
    { value: '5', label: 'Must Change Tax Regime', status: 'medium' },
    { value: '3', label: 'At Risk of Penalties', status: 'urgent' },
    { value: '9', label: 'Optimization Opportunities', status: 'opportunity' },
  ],
  dashboardAlert: {
    tag: 'New Fiscal Regulation Detected',
    text: 'OUG 115/2024 — Fiscal Code amendments affecting multiple tax regimes',
    deadline: 'Deadline: March 31, 2025',
    risk: 'HIGH',
  },
};

export const problemContent = {
  label: 'The Problem',
  headline: 'Tax Consultants Are Overloaded and Exposed to Risk',
  subheadline:
    'Every consultant manages 30–100+ clients while navigating a constant stream of complex, overlapping legislative changes. The workflow is entirely manual — every time something changes.',
  cards: [
    {
      icon: '⚠',
      title: 'Errors Under Pressure',
      description:
        'Manually tracking hundreds of legislative sources while serving clients creates unavoidable blind spots. One missed change can mean wrong advice.',
    },
    {
      icon: '⏱',
      title: 'Penalties for Clients',
      description:
        "Missed deadlines, incorrect filings, and outdated compliance guidance expose clients to tax penalties and damage the consultant's reputation.",
    },
    {
      icon: '📊',
      title: 'Impossible to Scale',
      description:
        "There is no systematic way to assess the impact of a new law across 50+ clients. Manual review doesn't scale — so growth comes at the cost of quality.",
    },
  ],
  insight:
    'Consultants lack clear, client-specific actions. They have information. They need decisions.',
};

export const solutionContent = {
  label: 'The Solution',
  headline: 'An AI-Powered Client Impact Engine',
  subheadline:
    'ACTA automatically monitors legislative changes, interprets their meaning with AI, maps the precise impact to every client portfolio, and delivers clear actions, deadlines, and risk signals.',
  steps: [
    {
      number: '01',
      icon: '◉',
      title: 'Monitor',
      description:
        'Real-time monitoring of Romanian and EU legislation — automatically captured and classified as soon as it publishes.',
      tag: 'Always current',
    },
    {
      number: '02',
      icon: '◈',
      title: 'Interpret',
      description:
        'AI reads and contextualises each legislative change — identifying which tax regimes, client types, and thresholds are affected.',
      tag: 'AI-powered analysis',
    },
    {
      number: '03',
      icon: '◎',
      title: 'Map',
      description:
        'Every change is matched to specific clients in your portfolio. ACTA identifies who is affected, at what threshold, and how urgently.',
      tag: 'Portfolio precision',
    },
    {
      number: '04',
      icon: '◆',
      title: 'Act',
      description:
        'Consultants receive a clear briefing: action required, affected clients, legal deadline, and risk severity. One click to prepare and send.',
      tag: 'Decisive and fast',
      highlighted: true,
    },
  ],
};

export const workflowContent = {
  label: 'The Workflow',
  headline: 'From Law to Action in Seconds',
  subheadline:
    'From legislative event to consultant action — automatically, accurately, and at scale.',
  steps: [
    {
      number: '01',
      title: 'Legislative Change Occurs',
      description:
        'A new law, ordinance, fiscal regulation, or procedural update is published in the Official Gazette or EU Official Journal.',
    },
    {
      number: '02',
      title: 'AI Processes & Interprets',
      description:
        'ACTA reads, parses, and contextualises the legal text — identifying affected tax regimes, client types, thresholds, and compliance deadlines.',
    },
    {
      number: '03',
      title: 'Affected Clients Are Identified',
      description:
        'The system cross-references the change with every client profile in your portfolio — scoring risk level, urgency, and required action.',
    },
    {
      number: '04',
      title: 'Consultant Receives a Full Briefing',
      description:
        'Affected clients, required actions, deadlines, legal basis, and risk level appear in one structured view. Ready to review, draft, and send.',
    },
  ],
  briefingExample: {
    title: 'Impact Briefing',
    source: 'OUG 115/2024 — Fiscal Code, Art. 291',
    interpretation:
      'VAT rates revised for hospitality sector. Clients operating restaurants, hotels, or events must update invoicing configurations before the effective date.',
    affected: '5 clients',
    action: 'Update VAT settings, notify clients, file correction if needed',
    deadline: 'January 1, 2025',
    risk: 'HIGH',
    legalRef: 'Art. 291 (2) lit. e) Codul Fiscal',
  },
};

export const portfolioMetrics = [
  { value: '17', label: 'Clients Affected', color: 'high', description: 'Require immediate review following the latest fiscal regulation.' },
  { value: '5', label: 'Must Change Tax Regime', color: 'medium', description: 'Eligible for regime change based on updated thresholds.' },
  { value: '3', label: 'At Risk of Penalties', color: 'urgent', description: 'Non-compliance risk if no action taken before deadline.' },
  { value: '9', label: 'Optimization Opportunities', color: 'opportunity', description: 'Clients eligible for tax optimization under the new legislation.' },
];

export const differentiationContent = {
  label: 'Why ACTA',
  headline: "We Don't Deliver Information. We Deliver Decisions.",
  subheadline: 'Other tools leave you to do the work. ACTA does it for you.',
  capabilities: [
    { label: 'Legislative data', portals: true, newsletters: true, software: false, acta: true },
    { label: 'Summaries & updates', portals: true, newsletters: true, software: false, acta: true },
    { label: 'Client-specific impact mapping', portals: false, newsletters: false, software: false, acta: true },
    { label: 'Actionable decisions', portals: false, newsletters: false, software: false, acta: true },
    { label: 'Risk scoring & deadlines', portals: false, newsletters: false, software: false, acta: true },
    { label: 'Continuous learning system', portals: false, newsletters: false, software: false, acta: true },
  ],
  columns: ['Legislative Portals', 'Newsletters', 'Accounting Software', 'ACTA'],
};

export const visionContent = {
  label: 'The Vision',
  headline: 'From Tax Compliance to Regulatory Intelligence',
  subheadline:
    'ACTA starts with Romanian tax law. The vision is the complete regulatory intelligence layer for any professional firm.',
  stages: [
    {
      phase: 'Today',
      title: 'Tax Compliance Intelligence',
      description:
        'AI-powered legislative monitoring and client-specific impact mapping for Romanian IRS, corporate tax, VAT, and Social Security legislation.',
      active: true,
    },
    {
      phase: 'Next — 2025',
      title: 'Full Regulatory Coverage',
      description:
        'Expanding to labor law, environmental regulation, corporate governance, GDPR compliance, and EU directive monitoring for any advisory practice.',
      active: false,
    },
    {
      phase: 'Future — 2026+',
      title: 'Operational Intelligence Layer',
      description:
        'ACTA becomes the compliance and advisory intelligence system that powers strategic and operational decisions across professional organizations.',
      active: false,
    },
  ],
};

export const marketContent = {
  label: 'Market Opportunity',
  headline: 'A Large, Underserved, and Urgent Market',
  tam: { value: '€4.2B', label: 'TAM', description: 'EU tax advisory and legal compliance software market' },
  sam: { value: '€280M', label: 'SAM', description: 'Romanian and CEE tax consultant software addressable market' },
  som: { value: '€8M', label: 'SOM', description: '3-year serviceable market with existing consultant relationships' },
  whyNow: [
    {
      title: 'Exploding Legislative Complexity',
      description: 'Romania passed 800+ fiscal regulations in 2023 alone. EU directives add another layer of constant change.',
    },
    {
      title: 'Rising Compliance Pressure',
      description: 'ANAF enforcement has intensified. Tax consultants face growing liability and client expectations for proactive guidance.',
    },
    {
      title: 'AI Is Now Ready',
      description: 'Large language models can now reliably interpret legal text, map impact, and generate client-specific action plans.',
    },
  ],
  traction: [
    'Real workflows validated with practising tax consultants',
    'Manual delivery process tested and confirmed willingness to pay',
    'Active pilot with consulting firms in Bucharest and Cluj-Napoca',
    'Letter of intent from first enterprise client',
  ],
  moat: [
    {
      title: 'Proprietary Client Context',
      description: 'ACTA learns each client\'s profile, history, and risk tolerance over time — creating a dataset no competitor can replicate.',
    },
    {
      title: 'Embedded Daily Workflow',
      description: 'By becoming the daily monitoring tool, ACTA creates deep switching costs and accumulates operational intelligence.',
    },
    {
      title: 'Localized Legislative Expertise',
      description: 'Deep integration with Romanian fiscal sources, ANAF guidance, and EU directive transposition creates a significant barrier.',
    },
    {
      title: 'Decision Intelligence That Grows',
      description: 'Every consultant action and client outcome trains ACTA\'s models — making the system smarter with every use.',
    },
  ],
};

export const faqContent = [
  {
    question: 'Does ACTA replace a tax consultant?',
    answer:
      'No. ACTA is a tool for tax consultants — it amplifies their expertise by automating the monitoring and interpretation work so they can focus on advising clients. The consultant remains fully in control of every decision and communication.',
  },
  {
    question: 'What legislative sources does ACTA monitor?',
    answer:
      'ACTA monitors the Romanian Official Gazette (Monitorul Oficial), ANAF guidance and orders, the Fiscal Code, Social Security legislation, and EU directives relevant to Romanian tax law. New sources are added continuously.',
  },
  {
    question: 'Can I review the legal basis for each recommendation?',
    answer:
      'Yes. Every action, risk, and opportunity in ACTA includes a direct legal reference — article number, publication date, and official source. You always know exactly why a recommendation was made.',
  },
  {
    question: 'Is client data secure?',
    answer:
      'Client data is encrypted at rest and in transit, stored on EU-based servers, and never shared or used to train third-party AI models. ACTA is fully GDPR-compliant.',
  },
  {
    question: 'Can I export briefings and share them with clients?',
    answer:
      'Yes. Every impact briefing can be exported as a formatted PDF or shared internally via a link. You can also draft client-facing messages directly from the briefing view.',
  },
  {
    question: 'Is ACTA available only in Romania?',
    answer:
      'The initial release focuses on Romanian tax legislation and EU directives transposed into Romanian law. EU-wide coverage for additional jurisdictions is on our 2025 roadmap.',
  },
];

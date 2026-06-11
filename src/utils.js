const heroBg = new URL('./assets/images/hero-bg.jpg', import.meta.url).href;
const spendwiseImg = new URL('./assets/images/spendwise-card.svg', import.meta.url).href;
const pantryImg = new URL('./assets/images/pantry-book.jpeg', import.meta.url).href;
const smartmartImg = new URL('./assets/images/smartmart.jpg', import.meta.url).href;
const travelImg = new URL('./assets/images/travel-tracker.jpg', import.meta.url).href;
const aiLmsImg = new URL('./assets/images/AI Enterprise LMS System.webp', import.meta.url).href;
const marketplaceAiImg = new URL('./assets/images/Marketplace AI.webp', import.meta.url).href;
const pantryBookAiImg = new URL('./assets/images/Pantry Book AI.webp', import.meta.url).href;
const spendwiseAiImg = new URL('./assets/images/Spendwise AI.webp', import.meta.url).href;
const travelTrackerAiImg = new URL('./assets/images/Travel Tracker AI.webp', import.meta.url).href;
const sentinelAiImg = new URL('./assets/images/sentinelai-card.svg', import.meta.url).href;
const careGuardImg = new URL('./assets/images/careguard-card.svg', import.meta.url).href;
const agenthonImg = new URL('./assets/images/agenthon-card.svg', import.meta.url).href;
const ragSuiteImg = new URL('./assets/images/rag-suite-card.svg', import.meta.url).href;

export const profile = {
  name: 'Nekha Bose',
  title: 'Senior Software Engineer | Full-Stack | AI & Agentic Systems | Cloud Architecture',
  summary:
    'High-impact full-stack engineer building AI, RAG, and cloud-native products with measurable business outcomes. I lead cross-functional teams, design enterprise-grade systems, and translate product goals into scalable delivery.',
  about:
    'I build resilient product platforms across React, TypeScript, Node.js, FastAPI, and cloud infrastructure. My recent work spans AI recommendation systems, retrieval-augmented workflows, multi-tenant platform design, and high-scale API delivery, with a focus on shipping reliable systems that improve velocity, engagement, and operational clarity.',
  location: 'Chicago, IL',
  email: 'nekhabose1998@gmail.com',
  phone: '+1 312-874-9702',
  linkedin: 'https://www.linkedin.com/in/nekha-bose',
  github: 'https://github.com/nekhabose',
  site: 'https://nekhabose.com',
  resumeFile: 'nekhaBoseResume.pdf',
  focusAreas: [
    'AI and agentic product delivery',
    'Cloud-native backend architecture',
    'Enterprise full-stack systems',
    'Engineering leadership and execution',
  ],
  heroMetrics: [
    { value: '6+', label: 'Years enterprise delivery' },
    { value: '10M+', label: 'Users on shipped platforms' },
    { value: '40%', label: 'Avg. performance gains' },
    { value: 'Fortune 100', label: 'Client tier' },
  ],
  achievements: [
    'Led 15+ engineers across product and platform delivery.',
    'Improved rollout speed by 30 percent through tighter Agile execution.',
    'Lifted product engagement by 12 percent with A/B-tested UI improvements.',
    'Delivered ETL redesigns that cut processing time by 40 percent.',
  ],
};

export const experiences = [
  {
    id: 'breatheit',
    company: 'BreatheIT Inc.',
    role: 'Lead Software Developer',
    period: 'Dec 2024 - Present',
    location: 'Chicago, IL (Hybrid)',
    metrics: ['150+ APIs on GCP', '75+ PostgreSQL schemas', '30% faster rollout', '12% engagement lift'],
    bullets: [
      'Lead engineering for an AI-powered lifestyle platform spanning a Node.js and TypeScript backend, React portal, and React Native mobile apps.',
      'Built FastAPI recommendation services across seven life disciplines using OpenAI and Groq to deliver personalized guidance flows.',
      'Integrated Google Maps, YouTube, and Amazon services into core product journeys to expand utility and retention.',
      'Scaled the platform with 75+ PostgreSQL schemas, 150+ production APIs on GCP, and Docker, Nginx, and Redis rate limiting.',
      'Led 15+ engineers in Agile delivery, improving rollout speed by 30 percent and increasing engagement by 12 percent through A/B-tested UI updates.',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'React',
      'React Native',
      'FastAPI',
      'OpenAI',
      'Groq',
      'PostgreSQL',
      'GCP',
      'Docker',
      'Nginx',
      'Redis',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    role: 'Senior Software Engineer',
    period: 'Mar 2021 - Dec 2023',
    location: 'Nike account, remote',
    metrics: ['10M+ users', '40% faster ETL', '30% faster retrieval', '20% retention lift'],
    bullets: [
      'Delivered a Java Spring Boot and React e-commerce platform at scale for 10M+ users using Docker and Kubernetes.',
      'Improved MongoDB and PostgreSQL performance to reduce response times and support a smoother high-volume user experience.',
      'Redesigned ETL pipelines for Nike with Autosys, Airflow, and AWS, cutting processing time by 40 percent and improving retrieval speed by 30 percent.',
      'Built Tableau dashboards that helped stakeholders track business performance and act faster on operational signals.',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'PostgreSQL',
      'Autosys',
      'Airflow',
      'AWS',
      'Tableau',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelancer',
    role: 'Software Engineer',
    period: 'Oct 2018 - Mar 2021',
    location: 'Remote',
    metrics: ['End-to-end delivery', 'Vendor consulting', 'Design to deployment'],
    bullets: [
      'Delivered end-to-end web and product builds for multiple vendors, from discovery and scoping through deployment and support.',
      'Owned architecture choices, front-end implementation, API integration, and production readiness for client-facing applications.',
      'Partnered directly with stakeholders to translate goals into scoped roadmaps, faster feedback cycles, and stable releases.',
    ],
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'SQL',
      'Product discovery',
      'Client delivery',
    ],
  },
];

export const projects = [
  {
    id: 'sentinelai',
    title: 'SentinelAI',
    category: 'AI Identity Security Platform',
    short:
      'AI-native identity security platform that discovers, scores, and auto-remediates risk across human and machine identities, built for a world where AI agents are first-class identities.',
    thumb: sentinelAiImg,
    hero: sentinelAiImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/SentinelAI' }],
    tech: [
      'Python 3.14',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'NetworkX',
      'SQLAlchemy',
      'Recharts',
    ],
    metrics: [
      '5-factor risk scoring engine',
      'Blast-radius circuit breaker',
      'AI agent behavioral monitoring',
      '66 passing test cases',
    ],
    problem:
      'Existing IAM tools were never built to understand AI agent behavior, blast radius, or behavioral baselines for automated identities. As organizations deploy agents at scale, a growing share of identities are non-human and effectively ungoverned.',
    users:
      'Built for security and platform teams who need to govern both human and machine identities, including the AI agents now operating inside production systems.',
    constraints: [
      'Auto-remediation cannot break legitimate access, so enforcement needs blast-radius gates and protected tags.',
      'AI agents require identity-aware signals such as prompt tracking, tool allowlisting, and delegation chains.',
      'Every automated action must be auditable and reversible.',
    ],
    approach: [
      'Built a four-layer pipeline: ingestion from AWS IAM, CloudTrail, Okta, Azure AD, and agent SDKs; processing via an identity graph and behavior engine; enforcement; and an API and dashboard layer.',
      'Designed a 5-factor risk score combining permission blast radius, behavioral anomaly, staleness, association, and AI-specific factors.',
      'Implemented a circuit breaker that delivers graduated, reversible responses with one-click rollback and full logging.',
    ],
    architectureFlow: [
      'Identity sources and agent SDKs',
      'Identity graph and behavior engine',
      'Risk scoring',
      'Circuit-breaker enforcement',
      'FastAPI and React dashboard',
    ],
    challenges: [
      'Modeling AI agents as identities with their own behavioral baselines and blast radius.',
      'Making auto-remediation aggressive enough to matter but safe enough to trust in production.',
      'Surfacing risk clearly through real-time KPIs without overwhelming the operator.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A Phase 1 MVP with working risk scoring, enforcement, and dashboard, seeded with 120 realistic identities.',
      'Reversible, audited auto-remediation with protected tags and blast-radius gates.',
      'Agent-aware monitoring (prompt hashing, tool allowlisting, delegation detection) in a market where almost no tooling secures agentic AI.',
    ],
  },
  {
    id: 'careguard',
    title: 'CareGuard',
    category: 'Agentic Healthcare AI',
    short:
      'AI-powered post-discharge care coordination system that calls patients, runs voice-based clinical assessments, and escalates urgent concerns to care teams to prevent readmissions.',
    thumb: careGuardImg,
    hero: careGuardImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/Care-Guard' }],
    tech: [
      'Python 3.12',
      'FastAPI',
      'SQLAlchemy 2.0 async',
      'Claude',
      'Twilio ConversationRelay',
      'Epic FHIR R4',
      'PostgreSQL',
      'AWS ECS Fargate',
    ],
    metrics: [
      'Projected 94x ROI',
      'Condition-specific care protocols',
      'Three-tier clinical escalation',
      'HIPAA-compliant by design',
    ],
    problem:
      'Hospital readmissions are costly and often preventable, but care teams cannot manually call and assess every discharged patient during the critical recovery window.',
    users:
      'Designed for hospital care coordination teams and discharged patients recovering from conditions like heart failure, COPD, pneumonia, joint replacement, and cardiac events.',
    constraints: [
      'Clinical conversations and patient data demand strict HIPAA compliance, encryption, and audit logging.',
      'Assessments must follow condition-specific clinical protocols, not generic prompts.',
      'Urgent findings must escalate to humans fast and reliably.',
    ],
    approach: [
      'Wired Epic EHR discharge webhooks (FHIR R4) into a risk-scoring intake layer that triggers AI-driven outreach.',
      'Built agentic voice conversations over Twilio ConversationRelay, with clinical tools and a unified LLM interface backed by Claude.',
      'Implemented a three-tier escalation system with SNS alerts and deployed on AWS ECS Fargate with KMS-encrypted PostgreSQL and CloudTrail auditing.',
    ],
    architectureFlow: [
      'Epic FHIR discharge webhook',
      'Risk scoring and intake',
      'AI voice assessment with clinical tools',
      'Three-tier escalation and alerts',
      'Encrypted data and audit layer',
    ],
    challenges: [
      'Keeping AI-led clinical conversations safe, on-protocol, and escalation-aware.',
      'Maintaining full HIPAA compliance across voice, EHR, and data layers.',
      'Designing escalation thresholds that catch urgent cases without alarm fatigue.',
    ],
    resultsTitle: 'Projected impact',
    results: [
      'For a 300-bed hospital with CHF patients: projected prevention of 4 to 5 readmissions monthly, preserving roughly $68,400 in revenue against about $720 in agent costs, a 94x ROI.',
      'Condition-specific protocols across heart failure, COPD, pneumonia, hip and knee replacement, and AMI/CABG.',
      'A compliant, auditable foundation for autonomous post-discharge care at scale.',
    ],
  },
  {
    id: 'agenthon',
    title: 'Agenthon',
    category: 'Multi-Agent Sales Automation',
    short:
      'Multi-agent system that automates the full sales engagement loop, from lead discovery and research to personalized outreach and reply tracking, through specialized cooperating agents.',
    thumb: agenthonImg,
    hero: agenthonImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/Agenthon' }],
    tech: [
      'Next.js',
      'TypeScript',
      'Python',
      'Drizzle ORM',
      'PostgreSQL',
      'Docker',
      'Agent orchestration',
    ],
    metrics: [
      'Four specialized agents',
      'Automated lead discovery',
      'Personalized outreach generation',
      'Reply tracking and memory',
    ],
    problem:
      'Sales teams lose time stitching together prospecting, research, outreach, and follow-up across disconnected tools, with most of the work being repetitive and rules-driven.',
    users:
      'Built for sales and growth teams who want to automate top-of-funnel engagement while keeping outreach personalized and trackable.',
    constraints: [
      'Each stage needs a different capability, so a single monolithic agent would be brittle.',
      'Outreach has to feel personalized, not templated.',
      'The system must retain context across the engagement lifecycle.',
    ],
    approach: [
      'Decomposed the workflow into four specialized agents: lead discovery, research and analysis, personalized outreach generation, and reply tracking.',
      'Built a modular full-stack architecture with a Next.js and TypeScript frontend and a Python backend, including dedicated memory and type-definition modules.',
      'Used Drizzle ORM and Docker for a reproducible, containerized data and deployment layer.',
    ],
    architectureFlow: [
      'Lead discovery agent',
      'Research and analysis agent',
      'Personalized outreach agent',
      'Reply tracking agent',
      'Shared memory and data layer',
    ],
    challenges: [
      'Coordinating handoffs between agents without losing prospect context.',
      'Generating outreach that is personalized rather than generic.',
      'Designing a memory layer that keeps the engagement state coherent over time.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'An end-to-end agentic pipeline that automates discovery, research, outreach, and reply tracking.',
      'A modular architecture where each agent can be improved or swapped independently.',
      'A practical template for applying multi-agent orchestration to real go-to-market workflows.',
    ],
  },
  {
    id: 'enterprise-rag-suite',
    title: 'Enterprise RAG Suite',
    category: 'Multi-Tenant RAG + Security',
    short:
      'Multi-tenant learning platform with role-based access control, strict tenant isolation, and AI tutoring powered by PostgreSQL pgvector, engineered with security as a first-class concern.',
    thumb: ragSuiteImg,
    hero: ragSuiteImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/enterprise-rag-suite' }],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'FastAPI',
      'Python 3.11',
      'PostgreSQL',
      'pgvector',
      'Docker',
    ],
    metrics: [
      '6 roles, 28 granular permissions',
      'Middleware-enforced tenant isolation',
      'Auditable admin impersonation',
      'AI tutoring and quiz generation',
    ],
    problem:
      'Enterprise learning platforms need AI tutoring across many tenants without leaking data between them, and without weak authorization opening the door to IDOR-class vulnerabilities.',
    users:
      'Built for three distinct portals: super admins, university and tenant admins, and end users, each with scoped permissions.',
    constraints: [
      'Tenant isolation must be enforced at the middleware layer, never trusting user-supplied tenant identifiers.',
      'Authentication needs short-lived access tokens with rotating refresh tokens.',
      'Every cross-tenant access path has to be closed against IDOR.',
    ],
    approach: [
      'Built a three-tier system: React role-specific portals, a Node.js and Express API with JWT auth and RBAC middleware, and a FastAPI AI service for chat, embeddings, and quiz generation.',
      'Stored vector embeddings in PostgreSQL 16 with pgvector for semantic search and AI tutoring.',
      'Hardened the platform: tenant ID taken only from trusted JWT claims, all IDs validated against tenant scope, parameterized queries, rate limiting, and audited super-admin impersonation.',
    ],
    architectureFlow: [
      'React role-based portals',
      'Express API with RBAC middleware',
      'FastAPI AI service',
      'PostgreSQL with pgvector',
      'Audit and rate-limit layer',
    ],
    challenges: [
      'Enforcing isolation across six roles and global plus per-tenant scopes.',
      'Preventing IDOR while still supporting admin impersonation for support.',
      'Combining production-grade security with usable AI tutoring and quiz workflows.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A security-first multi-tenant RAG platform with 28 granular permissions across 6 roles.',
      'Document ingestion, vector search, AI tutoring chat, and automated quiz generation.',
      'IDOR-resistant authorization with audited impersonation and middleware-enforced isolation.',
    ],
  },
  {
    id: 'enterprise-ai-lms',
    title: 'Enterprise AI Learning Management System',
    category: 'RAG + Agentic Platform',
    short:
      'Multi-tenant learning platform with pluggable RAG pipelines, strict data isolation, and enterprise-ready orchestration for AI-assisted learning.',
    thumb: aiLmsImg,
    hero: aiLmsImg,
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'FAISS',
      'ChromaDB',
      'Pinecone',
      'Qdrant',
    ],
    metrics: [
      'Multi-tenant architecture',
      'Strict tenant data isolation',
      'Pluggable chunking and retrieval',
      'Multi-LLM support',
    ],
    problem:
      'Enterprise learning teams need AI search and tutoring capabilities, but they cannot compromise on tenant isolation, auditability, or flexibility across models and retrieval strategies.',
    users:
      'Built for platform admins, instructors, learners, and enterprise customers with separate tenant boundaries and role-based permissions.',
    constraints: [
      'Strict data isolation between tenants and departments.',
      'Need to support multiple chunking, retrieval, and reranking strategies without rewriting the stack.',
      'Requirement to swap LLM providers based on cost, latency, and policy constraints.',
    ],
    approach: [
      'Designed a modular RAG platform where ingestion, indexing, retrieval, reranking, and generation can be configured per tenant or use case.',
      'Used Node.js and FastAPI services to separate product APIs, orchestration workflows, and AI processing concerns.',
      'Built a React and TypeScript admin and learner experience focused on explainable AI interactions, upload controls, and retrieval transparency.',
    ],
    architectureFlow: [
      'React portal',
      'Node.js API gateway',
      'LangGraph and LangChain orchestration',
      'FastAPI AI services',
      'Vector stores and model providers',
    ],
    challenges: [
      'Balancing flexible retrieval design with predictable latency and operational control.',
      'Maintaining tenant-safe indexing and retrieval paths across shared infrastructure.',
      'Supporting both experimentation and enterprise governance in the same platform.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Configurable RAG stack with pluggable chunking, retrieval, reranking, and model routing.',
      'Enterprise-ready tenant boundaries, role-aware access patterns, and scalable API composition.',
      'A foundation for AI chat, knowledge retrieval, guided learning flows, and extensible agentic workflows.',
    ],
  },
  {
    id: 'smartmart',
    title: 'SmartMart',
    category: 'Role-Based E-Commerce Platform',
    short:
      'Enterprise-style commerce platform focused on role-based access control, modular business flows, and deployment-ready backend patterns.',
    thumb: marketplaceAiImg,
    hero: marketplaceAiImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/SmartMart-WebApp' }],
    tech: [
      'Jakarta EE',
      'JSF',
      'Facelets',
      'JPA',
      'MVC',
      'DAO',
      'Jakarta Security',
      'Payara',
    ],
    metrics: [
      'Role-based storefront',
      'Admin and customer modules',
      'Secure checkout flows',
      'Server deployment on Payara',
    ],
    problem:
      'Commerce systems need clear separation between customer and admin workflows while keeping catalog, checkout, and order management reliable and secure.',
    users:
      'Designed for administrators, store managers, and end customers with distinct permissions and workflow boundaries.',
    constraints: [
      'Needed maintainable server-side rendering and clean separation of concerns.',
      'Security and payment-adjacent flows required strict role enforcement.',
      'The application had to stay modular enough for future catalog and admin feature growth.',
    ],
    approach: [
      'Structured the system with MVC and DAO layers to keep persistence, business logic, and UI responsibilities separate.',
      'Used Jakarta Security for authenticated role-based flows and protected management operations.',
      'Implemented catalog, cart, checkout, and admin modules with JPA-backed persistence and Payara deployment support.',
    ],
    architectureFlow: [
      'JSF and Facelets UI',
      'MVC controllers',
      'Service and DAO layer',
      'JPA persistence',
      'Payara runtime',
    ],
    challenges: [
      'Keeping authorization rules consistent across customer and admin interfaces.',
      'Avoiding tight coupling between UI templates and business logic as features expanded.',
      'Making deployment and environment setup predictable for testing and demos.',
    ],
    resultsTitle: 'Results',
    results: [
      'Delivered a role-based e-commerce foundation with secure navigation, catalog management, and order handling.',
      'Created a maintainable architecture suited for future payment, inventory, and user management enhancements.',
      'Improved clarity and safety across admin operations by enforcing explicit role boundaries.',
    ],
  },
  {
    id: 'pantrybook',
    title: 'PantryBook',
    category: 'Inventory + Productivity',
    short:
      'Smart pantry and recipe helper built to track inventory, reduce waste, and support better household planning.',
    thumb: pantryBookAiImg,
    hero: pantryBookAiImg,
    links: [
      { label: 'Live Demo', href: 'https://pantrybook.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/nekhabose/pantry_book' },
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    metrics: ['Inventory tracking', 'Recipe suggestions', 'Expiry awareness'],
    problem:
      'Home inventory usually lives in notes or memory, which leads to duplicate purchases and food waste.',
    users:
      'Designed for individuals and households who need a simple way to track pantry items and plan meals.',
    constraints: [
      'Needed a clean interface that made inventory updates fast.',
      'Required reliable state updates for frequent list changes.',
    ],
    approach: [
      'Built inventory CRUD flows, category organization, and recipe suggestion support around a simple, responsive UX.',
      'Used typed front-end patterns and a lightweight backend workflow to keep the product easy to maintain.',
    ],
    architectureFlow: ['React UI', 'Typed client state', 'Supabase data layer', 'Hosted front-end delivery'],
    challenges: [
      'Keeping the interaction model simple enough for repeated daily use.',
      'Making status signals clear without overloading the screen with controls.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Faster pantry management, clearer visibility into expiring items, and easier recipe-driven planning.',
    ],
  },
  {
    id: 'spendwise',
    title: 'SpendWise',
    category: 'Fintech Dashboard',
    short:
      'Budgeting dashboard focused on clear decision support, visual spending insights, and disciplined delivery through CI/CD.',
    thumb: spendwiseAiImg,
    hero: spendwiseAiImg,
    links: [
      { label: 'Live Demo', href: 'https://spendwize-fintech.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/nekhabose/spendwise-ci-cd' },
    ],
    tech: ['React', 'Vite', 'Chart.js', 'Firebase', 'Netlify', 'GitHub Actions'],
    metrics: ['Budget tracking', 'Automated deploys', 'Visual KPI cards'],
    problem:
      'Many personal finance tools make quick decisions harder by hiding signals inside cluttered screens and weak release workflows.',
    users:
      'Built for users who want simple budget visibility and for teams that need a safe front-end CI/CD reference project.',
    constraints: [
      'The dashboard had to remain approachable while surfacing useful trend data.',
      'Deployment had to be repeatable and low-risk.',
    ],
    approach: [
      'Designed a clean dashboard with budget cards, trend views, and focused interaction patterns.',
      'Added CI/CD automation with GitHub Actions and Netlify to keep releases consistent.',
    ],
    architectureFlow: ['React UI', 'Client visualization layer', 'Firebase services', 'CI/CD pipeline'],
    challenges: [
      'Balancing UI simplicity with enough financial detail to feel useful.',
      'Keeping the project a strong delivery reference, not just a visual demo.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Clear budget visibility, faster confidence in release quality, and a reusable CI/CD reference for front-end projects.',
    ],
  },
  {
    id: 'travel-tracker',
    title: 'Travel Tracker',
    category: 'Mobile AI Assistant',
    short:
      'Mobile travel planner with AI-assisted itinerary support, maps integration, and offline-friendly trip management.',
    thumb: travelTrackerAiImg,
    hero: travelTrackerAiImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/TravelTrackerApp' }],
    tech: ['Android', 'Kotlin', 'Google Maps SDK', 'Gemini AI', 'Room', 'WorkManager'],
    metrics: ['AI itinerary support', 'Route planning', 'Offline-friendly state'],
    problem:
      'Trip planning often breaks across multiple apps, tabs, and notes, which makes it harder to keep plans usable on the go.',
    users:
      'Designed for travelers who want planning, routing, and itinerary support in a single mobile workflow.',
    constraints: [
      'Plans needed to stay usable when network access was inconsistent.',
      'Location and route interactions had to remain fast on mobile.',
    ],
    approach: [
      'Combined AI-assisted planning, route mapping, and cached trip data into a single mobile experience.',
      'Used local persistence and background refresh patterns to keep trips available and current.',
    ],
    architectureFlow: ['Android client', 'AI prompt flows', 'Maps integration', 'Local cache and sync'],
    challenges: [
      'Merging AI-generated suggestions with practical route and time constraints.',
      'Keeping the mobile UX smooth while handling map and background sync requirements.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A single travel workflow that supports itinerary planning, navigation context, and more reliable offline access.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React Native', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'pgvector', 'MongoDB', 'Drizzle ORM'],
  },
  {
    title: 'AI and Agentic',
    items: ['Claude', 'OpenAI', 'Groq', 'RAG systems', 'Multi-agent systems', 'LangChain', 'LangGraph', 'LlamaIndex', 'NetworkX', 'Voice AI (Twilio)', 'Prompt orchestration'],
  },
  {
    title: 'Cloud and DevOps',
    items: ['GCP', 'AWS (ECS Fargate)', 'Docker', 'Kubernetes', 'Nginx', 'Redis', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Security and Compliance',
    items: ['RBAC', 'Multi-tenant isolation', 'JWT auth', 'IDOR prevention', 'HIPAA compliance', 'Audit logging', 'Identity risk scoring'],
  },
  {
    title: 'Healthcare and Integrations',
    items: ['Epic FHIR R4', 'OAuth 2.0', 'AWS IAM', 'Okta', 'Azure AD', 'CloudTrail', 'Webhook pipelines'],
  },
  {
    title: 'Data and ETL',
    items: ['Airflow', 'Autosys', 'Tableau', 'Data pipelines', 'Query optimization', 'Analytics reporting'],
  },
  {
    title: 'Testing and Methods',
    items: ['Postman', 'A/B testing', 'Agile', 'Scrum', 'API validation', 'Production rollout discipline'],
  },
  {
    title: 'Design and Collaboration',
    items: ['Product discovery', 'Figma collaboration', 'Stakeholder alignment', 'Mentorship', 'Technical leadership'],
  },
];

export const education = [
  {
    degree: 'MS, Information Technology and Management',
    school: 'Illinois Institute of Technology',
    meta: 'GPA 3.90 / 4.0',
  },
  {
    degree: 'B.Tech, Information Technology',
    school: 'APJ Abdul Kalam Technological University',
    meta: '',
  },
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    detail: 'Applied AI engineering credential aligned with enterprise AI solution delivery.',
  },
];

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
const helmFinanceImg = new URL('./assets/images/helm-finance-card.svg', import.meta.url).href;
const clinaraImg = new URL('./assets/images/clinara-card.svg', import.meta.url).href;
const relaygridImg = new URL('./assets/images/relaygrid-card.svg', import.meta.url).href;
const callproofImg = new URL('./assets/images/callproof-card.svg', import.meta.url).href;

export const profile = {
  name: 'Nekha Bose',
  title: 'Founding Engineer | Full-Stack | Agentic AI & LLM Systems | Cloud Architecture',
  summary:
    'Founding engineer with 6+ years shipping production agentic AI for Fortune 100 clients and high-growth startups. I build governed AI, where deterministic, versioned logic owns every decision and language models assist only where they are safe, under human-in-the-loop approval, policy-gated actions, and audit-grade traceability.',
  about:
    'I lead architecture and delivery of production AI platforms across React, TypeScript, Python, FastAPI, AWS, and GCP. I built a four-service AI platform at BreatheIT and migrated Nike supply-chain tooling to a lakehouse processing 50+ million records a day. My focus is governed AI: agentic and multi-agent systems where deterministic logic makes the decisions, the model assists only where it is safe, and every action is policy-gated, auditable, and reversible.',
  location: 'San Francisco Bay Area',
  email: 'nekhabose1998@gmail.com',
  phone: '+1 312-874-9702',
  linkedin: 'https://www.linkedin.com/in/nekha-bose',
  github: 'https://github.com/nekhabose',
  site: 'https://nekhabose.com',
  resumeFile: 'nekhaBoseResume.pdf',
  focusAreas: [
    'Agentic and multi-agent AI delivery',
    'Human-in-the-loop and policy-gated automation',
    'RAG, retrieval, and AI governance',
    'Cloud architecture and event-driven data systems',
  ],
  heroMetrics: [
    { value: '6+', label: 'Years shipping production AI' },
    { value: '50M+', label: 'Records/day at Nike scale' },
    { value: '0 to launch', label: 'Ultopia in 4 months' },
    { value: 'Fortune 100', label: 'Client tier' },
  ],
  achievements: [
    'Founding engineer for Ultopia, taken from zero to App Store launch in 4 months.',
    'Designed a Claude-powered agent layer with prompt caching that cut token cost 60 percent.',
    'Migrated Nike supply-chain tooling to a lakehouse, cutting refresh latency 60 percent.',
    'Led 7 engineers on a weekly production cadence across architecture, review, and release.',
  ],
};

export const experiences = [
  {
    id: 'breatheit',
    company: 'BreatheIT',
    role: 'Founding Engineer',
    period: 'Dec 2024 - Present',
    location: 'Remote',
    metrics: ['0 to launch in 4 months', '4 deployable services', '60% lower token cost', '31 native mobile screens'],
    bullets: [
      'Architected and shipped Ultopia, a production lifestyle-intelligence platform spanning four deployable services on a single PostgreSQL source of truth with Redis WebSocket fan-out, taking it from zero to App Store launch in 4 months and reaching thousands of users across client and internal deployments.',
      'Designed a Claude-powered agent layer, one concierge orchestrating seven discipline specialists over a streaming tool-use loop with prompt caching that cut token cost 60 percent, under a hard human-in-the-loop invariant so no action writes without user confirmation.',
      'Built an event-sourced metric store feeding two scoring engines, a cold-start benchmark scorer and an adaptive personal scorer that weights leading signals over lagging outcomes, cut over from shadow to live across tens of thousands of user records with zero scoring regressions.',
      'Built a provider-integration framework spanning 75 providers across finance, health, wearables, and social, each normalized into canonical metrics through thin config and pure mappers across six auth patterns including SSRF-guarded self-host.',
      'Hardened the platform with AES-256-GCM encryption at rest, JWT auth with refresh and blacklist, signed OAuth state, per-key rate limiting, and an append-only audit log, with graceful degradation on every external dependency.',
      'Led 7 engineers across architecture, code review, and release on a weekly production cadence, delivering 31 native mobile screens and a shared PWA on one typed API layer.',
    ],
    tech: [
      'Claude',
      'Anthropic SDK',
      'Node.js',
      'TypeScript',
      'React Native',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'WebSockets',
      'GCP',
      'Docker',
      'Event sourcing',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    role: 'Senior Software Engineer',
    period: 'Mar 2021 - Dec 2023',
    location: 'On-site, India · Enterprise client accounts',
    metrics: ['50M+ records/day', '60% lower refresh latency', '30% lower compute cost', 'Fortune 100 clients'],
    bullets: [
      'Delivered production data and platform engineering for multiple Fortune 100 clients, including Nike.',
      'Migrated Nike legacy supply-chain tooling to an Airflow-orchestrated AWS lakehouse processing 50+ million records a day, cutting refresh latency 60 percent and compute cost 30 percent by replacing a slow legacy batch cycle with near-real-time refresh every one to two hours.',
      'Built the ingestion path streaming source events into S3 through transformation, staging, and consumption layers so downstream users always queried clean, near-real-time data.',
      'Engineered the transformation layer to filter multi-region source data to US-relevant records and segregate freight, shipments, and profiles into separate domains with quality checks before promotion.',
      'Tuned PostgreSQL query paths and built Tableau dashboards that gave supply-chain stakeholders faster, clearer operational signal for freight and shipment decisions.',
    ],
    tech: [
      'Airflow',
      'AWS',
      'S3',
      'Lakehouse',
      'PostgreSQL',
      'Tableau',
      'ETL',
      'Data pipelines',
      'Query optimization',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Oct 2018 - Mar 2021',
    location: 'Remote',
    metrics: ['5+ clients', 'End-to-end delivery', 'Architecture to release'],
    bullets: [
      'Delivered end-to-end web and product builds for 5+ clients, owning architecture, frontend, API integration, and production readiness from scoping through release.',
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
    id: 'helm-finance-agent',
    title: 'Helm Finance Agent',
    category: 'Agentic Finance Automation',
    short:
      'Autonomous finance copilot for SMBs that forecasts cash flow, drafts collections, codes vendor invoices, and reconciles the books, while keeping the owner at the helm through human-in-the-loop approvals.',
    thumb: helmFinanceImg,
    hero: helmFinanceImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/Helm-Finance-Agent' }],
    tech: [
      'Python',
      'Pydantic',
      'Claude',
      'pytest',
      'QuickBooks Online',
      'Plaid',
      'Stripe',
      'Gusto',
      'PostgreSQL (RLS)',
    ],
    metrics: [
      'Four production-ready finance agents',
      'Deterministic 13-week cash forecast',
      'Human-in-the-loop approval queue',
      '110 passing tests, fully offline',
    ],
    problem:
      'Small and medium businesses run finance across fragmented tools, with cash forecasting, collections, invoice coding, and reconciliation done manually. Pure-LLM automation is unsafe here because numbers must be auditable and every external action must be reviewable.',
    users:
      'Built for SMB owners and finance teams who want autonomous help with day-to-day finance operations while retaining final approval over anything that touches money or vendors.',
    constraints: [
      'Numbers must be computed deterministically from code, not generated by an LLM, so forecasts are auditable and replayable.',
      'Every external effect has to pass through a single approval chokepoint with an immutable, cited audit trail.',
      'Multi-tenant data requires structural cross-tenant isolation, not trust-based filtering.',
    ],
    approach: [
      'Built four specialized agents: a Cashflow Copilot (13-week rolling forecast and payroll-risk scenarios), AR Collections (tone-calibrated reminders and dispute escalation), AP Clerk (invoice categorization and payment scheduling), and Reconciliation (transaction matching and duplicate detection).',
      'Separated concerns so the deterministic forecast engine computes the numbers and Claude writes only the narrative, with tool schemas auto-generated from Pydantic models.',
      'Routed every external action through a single ActionService.submit() chokepoint backed by a policy engine for bounded autonomy and an append-only audit log with citations to source transactions.',
    ],
    architectureFlow: [
      'Clients and API gateway',
      'Integration connectors (QBO, Plaid, Stripe, Gusto)',
      'Agent orchestrator and forecast engine',
      'Action and approval service',
      'Canonical ledger with audit and tenant isolation',
    ],
    challenges: [
      'Keeping financial numbers deterministic and auditable while still using an LLM for reasoning and narrative.',
      'Designing bounded autonomy: draft-and-approve by default, with policy-gated automation as trust grows.',
      'Guaranteeing tenant isolation and full replay from stored inputs across every agent action.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A complete V1 MVP where all four agents draft actions and route them through an approval queue, validated by 110 tests that run fully offline via a MockLLM with no API key.',
      'A deterministic forecast engine and append-only, citation-backed audit log that make every decision traceable and reproducible.',
      'Normalizing connectors for QuickBooks Online, Plaid, Stripe, and Gusto, plus a policy engine and multi-tenant store with a clear path to Postgres row-level security.',
    ],
  },
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
    id: 'clinara-healthos',
    title: 'Clinara HealthOS',
    category: 'Governed Clinical-Workflow Intelligence',
    short:
      'Governed clinical-workflow intelligence platform where deterministic, versioned logic makes every clinical decision and the LLM only summarizes, drafts, and translates around it.',
    thumb: clinaraImg,
    hero: clinaraImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/clinara-healthos' }],
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Claude',
      'Transactional outbox',
      'Event-driven',
      'Multi-tenant RLS',
      'Immutable audit',
    ],
    metrics: [
      'Deterministic logic decides, LLM assists',
      'Critical values bypass queues',
      'No silent event loss',
      'Clinician rule studio',
    ],
    problem:
      'Clinicians drown in result review, refill approvals, and patient-portal messages. Existing AI triage tools either stay shallow to stay safe, or let a language model make clinical judgments it cannot be trusted to make, mislabeling a critical potassium value, silently dropping a message, or inventing reassurance that is not warranted. In healthcare, a plausible-but-wrong automated action is worse than no automation at all.',
    users:
      'Built for health systems and clinical teams handling inbound lab and diagnostic results, prescription refills, and patient messages, with strict tenant isolation across organizations.',
    constraints: [
      'The clinical decision must exist before the LLM is ever called; the model never chooses classification, priority, thresholds, or actions.',
      'Nothing can disappear silently; every inbound event is processed, parked in a visible queue, or escalated, enforced structurally by a transactional outbox.',
      'Critical values must bypass queues and cannot be weakened by client or clinician configuration.',
    ],
    approach: [
      'Built a single governed pipeline for every module: ingest, normalize to a canonical model, patient-match, snapshot an immutable context, evaluate a deterministic versioned protocol, then let the LLM assist only with summary, draft, and translation.',
      'Enforced a hard safety floor: a red-flag detector can only raise urgency, never lower it, and unsupported units block interpretation rather than guessing.',
      'Backed it with a transactional outbox, immutable audit, and tenant isolation, plus a clinician rule studio to author, simulate, shadow-deploy, and roll back logic without an engineering release.',
    ],
    architectureFlow: [
      'Ingest and normalize to canonical model',
      'Patient match and immutable snapshot',
      'Deterministic versioned protocol decision',
      'LLM assists (summarize, draft, translate)',
      'Safety gate, human review, and write-back',
    ],
    challenges: [
      'Keeping every clinical decision deterministic and auditable while still using LLMs for communication.',
      'Guaranteeing no inbound event is ever silently dropped across results, refills, and messages.',
      'Letting clinicians change rules safely without shipping code, via simulate and shadow-deploy.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A governed decision pipeline that would still produce a safe, complete clinical outcome even with the LLM removed entirely.',
      'Results, refill, and patient-message intelligence with critical-value protection and controlled-substance handling.',
      'A clinician rule studio with author, simulate, shadow-deploy, and rollback, backed by immutable audit and tenant isolation.',
    ],
  },
  {
    id: 'relaygrid-ai',
    title: 'RelayGrid AI',
    category: 'AI-Native Freight Marketplace',
    short:
      'AI-native freight operations and two-sided marketplace where AI agents interpret and propose while domain services validate and execute, built on an event-driven, multi-tenant NestJS and Drizzle monorepo.',
    thumb: relaygridImg,
    hero: relaygridImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/RelayGrid-AI' }],
    tech: [
      'TypeScript',
      'NestJS',
      'Drizzle ORM',
      'PostgreSQL',
      'Temporal',
      'Turborepo',
      'Event-driven',
      'Ports and adapters',
    ],
    metrics: [
      'Five delivery phases',
      'Double-booking-safe workflows',
      'Transactional outbox and idempotency',
      'SSO, SCIM 2.0, and EDI X12',
    ],
    problem:
      'Freight brokerage and carrier dispatch run on brittle, disconnected tooling where double-booking, dropped tracking events, and manual reconciliation cost money, and where naive AI automation would put transactional truth inside a model prompt.',
    users:
      'Built for freight brokers, carrier dispatchers, and drivers across a two-sided marketplace, up to enterprise shippers needing SSO, SCIM, and EDI integration.',
    constraints: [
      'Transactional truth can never live in a prompt or model output; AI agents interpret and propose, domain services validate and execute.',
      'Booking and cover-load flows must be double-booking-safe under concurrency.',
      'Everything must be multi-tenant, event-driven, observable, and auditable, with no silent event loss.',
    ],
    approach: [
      'Structured a pnpm and Turborepo monorepo on ports and adapters, so business logic depends only on interfaces and in-memory backends swap for Postgres, SQS, and Temporal without touching feature code.',
      'Delivered five phases, from broker-side load coverage and matching to TMS tracking, carrier dispatch, a two-sided marketplace with fraud and risk scoring, and an enterprise platform.',
      'Hardened the skeleton with durable Postgres and row-level security, real JWT auth, real Temporal execution, and a transactional outbox with relay, dead-lettering, and database-enforced idempotency.',
    ],
    architectureFlow: [
      'Contracts, ports, and event envelope',
      'Pure domain logic (broker, carrier, marketplace)',
      'Temporal workflows and transactional outbox',
      'Postgres with RLS and idempotency',
      'Enterprise identity, EDI, and audit',
    ],
    challenges: [
      'Keeping AI proposals strictly separate from deterministic transactional execution.',
      'Making booking and re-cover workflows safe under concurrency and partial failure.',
      'Layering enterprise identity, EDI translation, and BYOK encryption onto the core cleanly.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'An event-driven freight platform with double-booking-safe booking, deterministic exception handling, and no silent event loss.',
      'A two-sided marketplace with deterministic fraud verification, a nine-component risk score, and human-decided review cases.',
      'An enterprise layer with SSO/SAML/OIDC, SCIM 2.0, advanced RBAC, ANSI X12 EDI, and customer-managed keys.',
    ],
  },
  {
    id: 'call-proof',
    title: 'Call Proof',
    category: 'Bounded Inbound Voice Agent',
    short:
      'Inbound-call voice agent for US home-services contractors that captures and books every job through a deterministic state machine, then keeps score on its own booking accuracy.',
    thumb: callproofImg,
    hero: callproofImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/Voice-agent-Call-proof' }],
    tech: [
      'TypeScript',
      'Voice AI',
      'State machine',
      'Housecall Pro',
      'Jobber',
      'ASR and LLM',
      'Vitest',
    ],
    metrics: [
      '1047 passing tests, 99.3% coverage',
      '1.00 emergency recall',
      'Books into Housecall Pro and Jobber',
      'Self-scored booking accuracy',
    ],
    problem:
      'When a homeowner calls a plumber, HVAC shop, or electrician and nobody picks up, that missed call is a lost job worth hundreds of dollars. But the best ASR-to-LLM pipeline fills tool-call parameters correctly only about 60 percent of the time, and multi-step workflows collapse to 5 to 15 percent, so an open-ended voice agent walks straight into a wall.',
    users:
      'Built for US home-services contractors, plumbers, HVAC shops, and electricians, who lose revenue on every missed inbound call.',
    constraints: [
      'The conversation is bounded: name, address, problem, urgency, and time window, a five-field form, not an open-ended dialogue.',
      'The model must never plan or chain tool calls; code advances a state machine on validated slots.',
      'Emergencies, gas leaks, fire, carbon monoxide, or danger, must warm-transfer to a human within a single turn.',
    ],
    approach: [
      'Drove the whole call with a deterministic state machine that extracts one validated field per turn instead of asking the model to orchestrate tools.',
      'Booked the job into the contractor’s existing CRM, Housecall Pro or Jobber, as a deterministic transaction with rollback after the call ends.',
      'Ran a deterministic emergency classifier that never asks a model for permission, and recorded every booking the contractor later corrects as a labeled failure to publish real reliability.',
    ],
    architectureFlow: [
      'Inbound call and ASR',
      'State machine extracts one validated slot per turn',
      'Deterministic emergency classifier and warm transfer',
      'Post-call booking transaction with rollback',
      'Self-scoring and published accuracy',
    ],
    challenges: [
      'Getting reliable bookings on models that fail the open-ended voice benchmark.',
      'Guaranteeing emergencies escalate to a human within a single turn.',
      'Measuring and publishing real booking accuracy instead of asserting it.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A bounded voice agent that answers missed calls and books jobs reliably where general agents collapse.',
      'A 1.00-recall emergency classifier that warm-transfers danger cases without asking a model for permission.',
      '1047 passing tests at 99.3 percent coverage, with self-scored, publishable booking accuracy per shop.',
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
    title: 'AI and Agentic Systems',
    items: ['Claude and Anthropic SDK', 'OpenAI', 'Gemini', 'Model Context Protocol (MCP)', 'Multi-agent orchestration', 'LangGraph', 'OpenAI Agents SDK', 'AutoGen', 'CrewAI', 'LangChain', 'LlamaIndex', 'Tool use and function calling', 'Structured outputs', 'Prompt caching', 'Model routing and fallback', 'Agent memory', 'Bounded autonomy', 'Human-in-the-loop'],
  },
  {
    title: 'Retrieval and RAG',
    items: ['Hybrid retrieval', 'Reranking', 'GraphRAG', 'pgvector', 'Embeddings', 'Semantic search', 'Context engineering'],
  },
  {
    title: 'LLM Ops, Eval and Safety',
    items: ['Eval-driven development (Braintrust, LangSmith, Ragas)', 'LLM observability (Langfuse, Arize Phoenix)', 'OpenTelemetry GenAI', 'Guardrails', 'Prompt-injection defense (OWASP LLM Top 10)', 'Red-teaming', 'Cost and latency optimization'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'React Native', 'Next.js (App Router, Server Components)', 'Expo', 'Vite', 'Tailwind CSS', 'WebSockets and SSE streaming', 'Accessible and responsive design'],
  },
  {
    title: 'Backend and APIs',
    items: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'REST', 'Event-driven APIs', 'Async SQLAlchemy', 'Drizzle ORM', 'Prisma', 'Pydantic', 'Zod', 'Ports and adapters'],
  },
  {
    title: 'Data and Streaming',
    items: ['PostgreSQL', 'pgvector', 'TimescaleDB', 'MongoDB', 'Redis', 'NATS', 'Event sourcing', 'Transactional outbox', 'Airflow', 'Tableau', 'Query optimization'],
  },
  {
    title: 'Cloud and DevOps',
    items: ['AWS (ECS Fargate, RDS, S3, SQS, SNS, KMS, CloudTrail, IAM)', 'GCP', 'Docker', 'Kubernetes', 'Temporal', 'CI/CD', 'GitHub Actions', 'OpenTelemetry', 'Playwright', 'Vitest'],
  },
  {
    title: 'Security and Compliance',
    items: ['Multi-tenant isolation (Postgres RLS)', 'RBAC', 'SSO (SAML, OIDC)', 'SCIM 2.0', 'JWT with refresh and blacklist', 'OAuth 2.0 and OAuth1', 'AES-256-GCM at rest', 'BYOK', 'SSRF and IDOR defense', 'Immutable audit logging', 'HIPAA-eligible design'],
  },
];

export const education = [
  {
    degree: 'MS, Information Technology and Management',
    school: 'Illinois Institute of Technology, Chicago, IL',
    meta: 'Jan 2024 - Dec 2025 · GPA 3.90 / 4.0',
  },
  {
    degree: 'B.Tech, Information Technology',
    school: 'APJ Abdul Kalam Technological University, Kerala, India',
    meta: '',
  },
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    detail: 'Applied AI engineering credential aligned with enterprise AI solution delivery.',
  },
];

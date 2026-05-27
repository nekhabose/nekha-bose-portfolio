export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  description: string;
  content: string; // markdown-style HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-multi-tenant-rag-system-langchain-langgraph',
    title: 'How I Built a Multi-Tenant RAG System with LangChain and LangGraph',
    date: '2025-04-15',
    readTime: '8 min read',
    tags: ['RAG', 'LangChain', 'LangGraph', 'AI Engineering', 'Multi-tenant'],
    description:
      'A deep dive into designing a pluggable RAG architecture with strict tenant isolation, configurable retrieval strategies, and LangGraph-based orchestration for enterprise learning platforms.',
    content: `
<h2>Why RAG for Enterprise Learning?</h2>
<p>When I started building the Enterprise AI LMS, the core challenge was clear: how do you give learners natural language access to course materials — across textbooks, video transcripts, PDFs, and custom uploads — without letting one tenant's data bleed into another's?</p>
<p>Generic chatbots fail here. They hallucinate. They have no awareness of your proprietary content. And in enterprise environments, data isolation isn't optional — it's a compliance requirement. That's where Retrieval-Augmented Generation (RAG) becomes the right architecture.</p>

<h2>The Architecture: Pluggable by Design</h2>
<p>The biggest mistake in RAG systems is hardcoding your chunking strategy, retrieval method, or model provider. Business requirements change. A strategy that works for dense academic text fails for conversational transcripts. So I designed every layer to be swappable:</p>
<ul>
  <li><strong>Chunking:</strong> semantic, page-based, overlap, and parent-child strategies — selected per content type</li>
  <li><strong>Retrieval:</strong> BM25 (keyword), semantic (embedding), and hybrid — configurable per tenant or use case</li>
  <li><strong>Reranking:</strong> cross-encoder reranking to improve result quality before generation</li>
  <li><strong>Vector stores:</strong> FAISS for local dev, ChromaDB and Pinecone for production, Qdrant for self-hosted enterprise</li>
  <li><strong>LLM providers:</strong> OpenAI GPT-4o, Claude 3.5, Gemini, Groq — switchable at runtime</li>
</ul>

<h2>Tenant Isolation with LangGraph</h2>
<p>The orchestration layer is where multi-tenancy gets hard. Every retrieval call, every vector lookup, every generation request must be scoped to the authenticated tenant. I used LangGraph to build the orchestration graph with tenant context flowing through each node as state.</p>
<p>The graph looks like this: <strong>ingest → chunk → embed → index</strong> for the data pipeline, and <strong>retrieve → rerank → augment → generate</strong> for the query pipeline. Each node receives a <code>TenantContext</code> object that enforces namespace boundaries at the vector store level.</p>
<p>This means tenant A's documents are physically isolated in a separate vector namespace from tenant B — not just filtered at query time, but stored separately. That distinction matters for compliance audits.</p>

<h2>The Hybrid Retrieval Trick</h2>
<p>Pure semantic search misses exact terminology. Pure BM25 misses conceptual similarity. For course material — where learners ask "explain backpropagation" but the text says "gradient descent through layers" — hybrid retrieval with a tuned alpha weight between sparse and dense scores consistently outperformed either alone. I used a weighted Reciprocal Rank Fusion (RRF) merge to combine BM25 and embedding results before the reranker pass.</p>

<h2>What I'd Do Differently</h2>
<p>Chunking strategy has more impact than model choice. We spent weeks tuning the LLM and got marginal gains, then switched from fixed-size chunking to parent-child chunking and saw a 30%+ improvement in retrieval relevance overnight. Start with chunking before you optimize models.</p>
<p>Also: instrument your retrieval pipeline from day one. Log what was retrieved, what was reranked out, and what the final generation context looked like. Without that visibility, you're debugging blind.</p>

<h2>Tech Stack Summary</h2>
<ul>
  <li>Orchestration: LangGraph, LangChain, LlamaIndex</li>
  <li>Vector stores: FAISS, ChromaDB, Pinecone, Qdrant</li>
  <li>Backend: FastAPI (AI services), Node.js (product API)</li>
  <li>Frontend: React + TypeScript</li>
  <li>LLMs: OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini, Groq</li>
</ul>
    `.trim(),
  },
  {
    slug: 'ai-agentic-systems-full-stack-engineering-at-scale',
    title: 'AI Agentic Systems in Production: What Full-Stack Engineers Need to Know',
    date: '2025-05-10',
    readTime: '6 min read',
    tags: ['AI Agents', 'Agentic Systems', 'Full-Stack', 'LangChain', 'Production AI'],
    description:
      'Building agentic AI workflows that hold up in production requires more than prompting — it demands the same engineering rigor as any distributed system. Here\'s what I learned shipping agentic features at scale.',
    content: `
<h2>What "Agentic" Actually Means in Production</h2>
<p>Everyone's talking about AI agents, but the term gets used to mean everything from a single tool-calling LLM to a full multi-agent orchestration system. In practice, an agentic system is any workflow where the AI decides what to do next — routing between tools, delegating to sub-agents, or looping until a goal is met.</p>
<p>At BreatheIT, I built recommendation agents across 7 life disciplines (health, finance, personal branding, relationships, and more) that dynamically select data sources, enrich responses via external APIs (Google Maps, YouTube, Amazon), and score outputs using structured signals from user behavior. That's a real agentic pipeline — not just a chatbot.</p>

<h2>The Full-Stack Surface Area of Agentic Features</h2>
<p>Most AI tutorials stop at the Python notebook. But in production, your agentic feature touches every layer of the stack:</p>
<ul>
  <li><strong>Frontend:</strong> Streaming responses, loading states that reflect agent "thinking," graceful degradation when tools fail</li>
  <li><strong>API gateway:</strong> Auth, rate limiting, tenant scoping before any agent invocation</li>
  <li><strong>Orchestration layer:</strong> LangGraph / LangChain workflow graphs, tool definitions, retry logic</li>
  <li><strong>Tool layer:</strong> FastAPI services wrapping external APIs with structured outputs</li>
  <li><strong>Observability:</strong> Tracing agent decisions, tool call logs, token usage, latency per step</li>
</ul>
<p>If you treat AI as a black box that lives in one Python file, you'll ship something that works in demos and breaks in production.</p>

<h2>Reliability Patterns That Actually Work</h2>
<p>Agentic systems fail in ways traditional software doesn't. The LLM might decide to call a tool in the wrong order, hallucinate a tool name, or loop indefinitely. Here's what I use to handle that:</p>
<ul>
  <li><strong>Structured outputs everywhere:</strong> Never parse free-form LLM text for decision logic. Use function calling / tool use with strict JSON schemas.</li>
  <li><strong>Max iteration guards:</strong> Every agent loop has a hard ceiling. An agent that runs 50 tool calls is broken, not thorough.</li>
  <li><strong>Fallback chains:</strong> If the primary model fails or times out, route to a faster/cheaper model. Groq as a fallback for GPT-4o works well.</li>
  <li><strong>Redis rate limiting:</strong> External API tools (Maps, YouTube) get rate-limited at the Redis layer before the agent even invokes them.</li>
</ul>

<h2>The Infrastructure That Carries Agentic Workloads</h2>
<p>On GCP with Docker and Nginx, I separate the agentic services from the core product API. This matters because agentic calls are unpredictable in latency — a 3-hop tool chain might take 8 seconds. You don't want that blocking your main API workers. Separate service, separate scaling policy, async where possible.</p>

<h2>For Engineers Moving into AI</h2>
<p>The engineers who ship the best agentic systems aren't the ones who know the most prompt tricks — they're the ones who apply the same rigor they'd use for any distributed system: clear interfaces, observability, failure modes, and tests. The AI part is one layer. The engineering underneath it is what makes it reliable.</p>
<p>If you're a full-stack engineer looking to move into AI, start by wrapping a model call in a proper API — auth, validation, error handling, logging. Then add tools. Then add orchestration. Build it layer by layer, the same way you'd build any system.</p>
    `.trim(),
  },
];

export const site = {
  name: 'Aditya Gidh',
  role: 'Software Engineer, IBM Research',
  email: 'adigidh20@gmail.com',
  intro:
    'Software Engineer at IBM Research with 10+ years building scalable web platforms, developer tools, and cloud-native services. I drive initiatives spanning AI-powered developer experiences, production observability, and DevSecOps automation partnering across research, product, and engineering organizations to bring innovative solutions into production at scale. Previously at IBM Watson for Genomics and IBM Marketplace.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/adityagidh/',
    github: 'https://github.com/adigidh',
  },
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/publications', label: 'Publications' },
  { href: '/talks', label: 'Talks' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
];

export const featuredProjects = ['software-factory-mvp', 'codebase-intelligence-layer', 'agent-readiness'];

export const stats = [
  { value: '99.9%', label: 'uptime across 10+ microservices (Prometheus/Grafana)' },
  { value: '61', label: 'microservices mapped by the codebase intelligence layer' },
  { value: '3,000+', label: 'users on IBM Carbon Design System rollout' },
  { value: '570+', label: 'clones of the Granite agent notebooks' },
];

export const focus = [
  {
    title: 'AI & LLM Engineering',
    href: '/skills',
    body: 'RAG pipelines, LangChain/LangGraph, vector databases, prompt engineering, AI-powered CLI tools. Contributor to beeai-framework, instructlab, granite-agent-cookbook. Jupyter notebooks featured at PyData London 2026 (570+ clones, 780+ unique users).',
  },
  {
    title: 'Platform & Observability',
    href: '/skills',
    body: 'Prometheus/Grafana monitoring for 10+ microservices. DevSecOps with Tekton Secure Pipelines. Kubernetes/OpenShift deployments at scale.',
  },
  {
    title: 'AI-Ready Codebases',
    href: '/projects#codebase-intelligence-layer',
    body: 'Pre-computed architectural intelligence for 61 services: materialized views of actual code designed for AI consumption. Inspired by <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noopener noreferrer" class="prose-link">Karpathy\'s wiki concept</a>, extended with cross-service blast-radius analysis, known risks, and an MCP query interface. Now the context source an agentic delivery pipeline reads before writing a spec.',
  },
  {
    title: 'Agentic Delivery Pipelines',
    href: '/projects#software-factory-mvp',
    body: 'Developer Software Factory, in use across production pipelines: chaining <a href="https://github.com/dam-agents/dam" target="_blank" rel="noopener noreferrer" class="prose-link">DAM</a>, GitHub, a spec-driven development CLI, and SPS into one AI-assisted path from a plain-language problem description to a sandbox-tested pull request, with a human validation gate preserved at every step. ROI measurement is the next milestone, not yet claimed.',
  },
];

export const recent = [
  { year: 2026, title: 'Conversational RAG for Markdown Docs', meta: 'Poster - North East Database Day (NEDB)', href: '/talks' },
  { year: 2025, title: 'AI in the Terminal: Empowering Developers with CLI-Based AI Apps', meta: 'Talk - DevConf 2025', href: '/talks' },
  { year: 2024, title: 'Data Pipeline: Embeddings and Clustering for Intelligent Entity Grouping', meta: 'Article - IBM Developer', href: 'https://developer.ibm.com/articles/data-pipeline-embeddings-clustering/' },
  { year: 2024, title: 'Build a RAG Assistant for Markdown Documentation', meta: 'Tutorial - IBM Developer', href: 'https://developer.ibm.com/tutorials/build-rag-assistant-md-documentation/' },
  { year: 2024, title: 'JSON Prompting for LLMs', meta: 'Article - IBM Developer', href: 'https://developer.ibm.com/articles/json-prompting-llms' },
  { year: 2024, title: "The Infrastructure Powering IBM's Gen AI Model Development", meta: 'White paper - arxiv', href: 'https://arxiv.org/abs/2407.05467' },
  { year: 2022, title: 'Knowledge Graph Induction Enabling Recommending and Trend Analysis', meta: 'ISWC 2022 (In-Use Track) - Springer Proceedings', href: 'https://iswc2022.semanticweb.org/wp-content/uploads/2022/11/978-3-031-19433-7_47.pdf' },
];

export const openSource = [
  { repo: 'agent-readiness', desc: 'reusable AI agent plugin for Claude Code, Codex, Gemini CLI', url: 'https://github.com/adigidh/agent-readiness', role: 'author' },
  { repo: 'beeai-framework', desc: 'AI agent framework', url: 'https://github.com/search?q=beeai-framework', role: 'contributor' },
  { repo: 'instructlab', desc: 'LLM fine-tuning toolkit', url: 'https://github.com/instructlab/ui', role: 'contributor' },
  { repo: 'granite-agent-cookbook', desc: 'Agent patterns for IBM Granite', url: 'https://github.com/search?q=granite-agent-cookbook', role: 'contributor' },
  { repo: 'web-application-reference', desc: 'Full-stack web app reference architecture', url: 'https://github.com/nodeshift/web-application-reference', role: 'contributor' },
];

export const community = [
  {
    title: 'AAIF Security & Privacy Working Group',
    url: 'https://aaif.io/working-groups',
    role: 'technical contributor',
    desc: 'Producing open threat models, shared taxonomy, and design patterns for trustworthy agentic AI - Agentic AI Foundation (AAIF)',
  },
  {
    title: 'Building Agents with Granite Workshop',
    url: 'https://ibm-granite-community.github.io/granite-agent-workshop/',
    role: 'technical contributor',
    desc: 'Contributed to the inception of this hands-on learning program delivered by the Granite team across IBM business units and technical organizations, and showcased at open-source, AI, and developer conferences worldwide.',
  },
];

export const stack = [
  { label: 'languages', items: 'Python, TypeScript, JavaScript, Java, R' },
  { label: 'ai/ml', items: 'LangChain, LangGraph, RAG, FAISS, ChromaDB, Ollama, IBM Granite' },
  { label: 'frontend', items: 'React, Next.js, Astro, Angular, Carbon Design System' },
  { label: 'backend', items: 'Node.js, Express, PostgreSQL, MongoDB, Elasticsearch' },
  { label: 'infra', items: 'Kubernetes, OpenShift, Docker, Helm, Tekton, Prometheus, Grafana' },
];

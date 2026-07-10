---
title: "Researcher Intelligence Platform"
description: "Extended a recognition tracking system into a research analytics platform by layering six AI-powered capabilities onto the existing application. The platform uses semantic embeddings (Llama 3.3 70B, 4096-dim via IBM RITS) and ML clustering to surface insights, connections, and recommendations across a research organization — without any manual categorization or labeling."
tech: ["Llama 3.3 70B", "IBM RITS", "K-means Clustering", "pgvector", "Node.js", "PostgreSQL", "React", "LangChain", "RAG"]
impact: "405 researchers clustered into 5 semantic communities; pipeline design published as IBM Developer article"
order: 1
features:
  - name: "AI-Powered Recognition Categorization"
    detail: "Intelligent categorization engine using Llama 3.3 70B to classify free-form recognition text into 1-3 predefined categories with confidence scoring and reasoning. Prompt engineering includes category-specific keyword hints for accurate classification on ambiguous input. Middleware enriches LLM recommendations with database IDs via dual-layer caching (exact match + case-insensitive fallback)."
  - name: "Intelligent Entity Grouping via Embeddings + Clustering"
    detail: "Production pipeline converting entity profiles into 4096-dimensional vectors, then running K-means clustering to discover natural groupings without manual labeling. Handles production concerns through multi-layer caching, exponential backoff retries, and deterministic fallback embeddings on API failure. Clusters are interpreted into human-readable labels by extracting trending topics and computing diversity scores. Pipeline design published as IBM Developer article."
  - name: "AI-Powered Research Landscape Visualizations"
    detail: "Three complementary views built on the same embedding infrastructure: a word cloud surfacing top recognition categories via NLP, a heatmap matrix showing category distribution across communities to reveal interdisciplinary patterns, and a force-directed community network graph calculating semantic proximity through cosine similarity of cluster embedding vectors."
  - name: "People Like You - Similar Researcher Discovery"
    detail: "Researcher discovery surface that ranks colleagues by cosine similarity against the user's recognition profile, returning top-N matches. Accessible from three entry points (dashboard greeting banner, user profile header, and profile sidebar cards) and rendered as both a ranked data table and a force-directed similarity network graph. Transforms recognition data into a collaborative intelligence layer."
  - name: "Collaboration Finder"
    detail: "Dedicated platform page presenting up to 20 ranked potential collaborators per user, scored and categorized as cross-cluster or same-cluster matches. Cross-cluster recommendations use a penalized similarity score to surface researchers in adjacent domains - similar enough to collaborate, different enough to add value."
  - name: "Research Community Analytics"
    detail: "Automated community discovery grouping 405 researchers into 5 semantic communities using K-means on LLM-generated embeddings. Communities update on a scheduled pipeline with a 3-tier caching strategy (memory - DB - compute) keeping API costs manageable. Provides managers and executives a data-driven view of research activity distribution and emerging interdisciplinary themes."
---

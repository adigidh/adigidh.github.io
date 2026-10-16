---
title: "Developer Software Factory"
description: "An AI-assisted delivery pattern, now in use across production pipelines, chaining five existing tools (<a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a>, GitHub, a spec-driven development CLI, SPS, and the <a href='/projects#codebase-intelligence-layer'>Apps Knowledge Base</a>) into one AI-assisted path from a plain-language problem description to a sandbox-tested pull request. The factory's contribution isn't a new tool; it's the handoffs between tools that already existed, chained so that a human decides what merges at every gate."
tech: ["Claude Code", "Spec-Driven CLI", "SPS", "GitHub", "DAM", "MCP"]
impact: "End-to-end chain in use across production pipelines: plain-language request -> enriched GitHub issue -> KB-grounded spec -> implemented PR -> SPS sandbox deploy and test -> human merge decision"
order: 0
features:
  - name: "Every arrow is a handoff, not a rewrite"
    detail: "<a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a> enriches the issue, a spec-driven development CLI writes the spec and the implementation, SPS deploys and tests the sandbox. No component reimplements another; the factory's job is making the seams hold, not building new infrastructure."
  - name: "Spec quality is bounded by context quality"
    detail: "The spec-driven development CLI generates the spec from the <a href='/projects#codebase-intelligence-layer'>Apps Knowledge Base</a>'s real architecture, ownership, and risk artifacts for the affected service, not from a blind read of the repo. Better KB, better spec, with no extra manual step."
  - name: "Human oversight is a designed gate, not a missing feature"
    detail: "A human validates the running sandbox and, per team policy, a human always merges to dev and to prod. The pipeline never promotes itself; it exists to make code review start from a working, tested candidate instead of a cold diff."
  - name: "Scoped narrow on purpose"
    detail: "One persona (developer), one workflow shape (bug fix / small enhancement), explicitly excluding CI/CD promotion, design-driven front-end work, and non-developer personas. Narrow scope is what made the end-to-end chain provable before widening it."
  - name: "Honest about what's proven vs. still open"
    detail: "The chain is proven and in use across production pipelines. Business success (cycle-time reduction, manual-effort savings) is explicitly not yet measured; that is what the evaluation and observability phases below are for."
sections:
  - title: "Roadmap: Phase 1 in production, Phases 2-6 ahead"
    bullets:
      - "Phase 2, Specification Engineering & Knowledge Evolution: conversational spec refinement, knowledge sync"
      - "Phase 3, Evaluation Framework & Quality Assurance: measure output quality, prevent regressions"
      - "Phase 4, Observability & ROI: adoption, performance, cost, business value"
      - "Phase 5, Persona Expansion & Self-Service: beyond the developer persona"
      - "Phase 6, Enterprise Scale & Governance: auditability, permissions, operational controls"
---

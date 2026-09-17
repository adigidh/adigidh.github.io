---
title: "Developer Software Factory MVP"
description: "Phase 1 of a six-phase initiative chaining five existing tools (<a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a>, GitHub, a spec-driven development CLI, SPS, and the <a href='/projects#codebase-intelligence-layer'>Apps Knowledge Base</a>) into one AI-assisted path from a plain-language problem description to a sandbox-tested pull request. The MVP's contribution isn't a new tool; it's proof that the handoffs between tools that already existed actually chain together, with a human deciding what merges at every gate."
tech: ["Claude Code", "Spec-Driven CLI", "SPS", "GitHub", "DAM", "MCP"]
impact: "End-to-end functional chain validated live: plain-language request -> enriched GitHub issue -> KB-grounded spec -> implemented PR -> SPS sandbox deploy and test -> human merge decision"
order: 2
features:
  - name: "Every arrow is a handoff, not a rewrite"
    detail: "<a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a> enriches the issue, a spec-driven development CLI writes the spec and the implementation, SPS deploys and tests the sandbox. No component reimplements another; the MVP's job was proving the seams hold, not building new infrastructure."
  - name: "Spec quality is bounded by context quality"
    detail: "The spec-driven development CLI generates the spec from the <a href='/projects#codebase-intelligence-layer'>Apps Knowledge Base</a>'s real architecture, ownership, and risk artifacts for the affected service, not from a blind read of the repo. Better KB, better spec, with no extra manual step."
  - name: "Human oversight is a designed gate, not a missing feature"
    detail: "A human validates the running sandbox and, per team policy, a human always merges to dev and to prod. The pipeline never promotes itself; it exists to make code review start from a working, tested candidate instead of a cold diff."
  - name: "Scoped narrow on purpose"
    detail: "One persona (developer), one workflow shape (bug fix / small enhancement), explicitly excluding CI/CD promotion, design-driven front-end work, and non-developer personas. Narrow scope is what made an end-to-end proof possible in Phase 1."
  - name: "Honest about what's proven vs. still open"
    detail: "Functional success is validated by this MVP. Business success (cycle-time reduction, manual-effort savings) is explicitly not yet measured. Technical success (are the four integrations actually reliable, are the approval gates fully documented) is the next milestone, not a settled claim."
sections:
  - title: "Roadmap: Phase 1 of 6"
    bullets:
      - "Phase 2, Specification Engineering & Knowledge Evolution: conversational spec refinement, knowledge sync"
      - "Phase 3, Evaluation Framework & Quality Assurance: measure output quality, prevent regressions"
      - "Phase 4, Observability & ROI: adoption, performance, cost, business value"
      - "Phase 5, Persona Expansion & Self-Service: beyond the developer persona"
      - "Phase 6, Enterprise Scale & Governance: auditability, permissions, operational controls"
---

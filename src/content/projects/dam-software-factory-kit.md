---
title: "Software Factory (DAM Starter Kit)"
description: "Packaged as a reusable <a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a> starter kit: label an issue or ask in chat and get a reviewed pull request. An agent writes a spec with testable acceptance criteria, builds it test-first on a factory branch, runs security, UX, UI and code reviews in parallel, and opens a PR that carries the spec, build log and approver decision. It never merges or pushes to the base branch."
tech: ["DAM", "GitHub", "Semgrep", "Gitleaks", "pip-audit"]
impact: "Published in the DAM community catalog, so any team can stand up its own spec-to-PR agent from one import"
order: 6
features:
  - name: "Gates the agent cannot edit"
    detail: "Quality commands are read from the base branch's AGENTS.md, so a job cannot weaken its own checks. A failing command is re-run twice to separate flaky tests from real failures."
  - name: "Security scanning before review"
    detail: "gitleaks, semgrep, npm audit and pip-audit run before each review round and report only what the branch adds. A scanner that is missing or crashed yields INCOMPLETE, never CLEAN."
  - name: "Human gate by design"
    detail: "The factory never merges. Work it cannot settle opens as a draft labelled factory:needs-human, and every PR is reviewed by a person."
  - name: "Rollout without surprises"
    detail: "A GATE_MODE setting moves from shadow (record only) to warn to enforce, so teams see results before anything blocks a job."
---

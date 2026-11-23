---
title: "Production Readiness (DAM Starter Kit)"
description: "A <a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a> starter kit that assesses a codebase for what must happen before it runs in production. It maps entry points, trust boundaries and workflows, checks them against OWASP, OAuth/OIDC, 12-factor, CIS, SLSA and SRE practice, and writes a tiered, dependency-ordered report. Every finding cites file:line evidence, and findings can be filed as labelled, dependency-linked GitHub issues."
tech: ["DAM", "OWASP", "OAuth/OIDC", "SLSA", "CIS", "GitHub"]
impact: "Published in the DAM community catalog; turns a repository into a prioritized, evidence-backed remediation plan"
order: 8
features:
  - name: "Evidence or it does not count"
    detail: "Every finding cites file:line. Findings are CONFIRMED when the path from entry point to missing control was read, and UNVERIFIED when only suspected. Nothing is dropped silently."
  - name: "Tiered by real risk"
    detail: "P0 blockers are exploitable or data-losing and must be fixed before real data goes in. P1 covers what is needed to operate and change the system safely. P2 covers maturity and compliance."
  - name: "Issues filed in dependency order"
    detail: "Dependencies are validated before anything is created, issues are filed in order with a tracking issue per tier, and reruns do not duplicate issues."
  - name: "Standards-mapped lenses"
    detail: "Eight lenses map to named references, from OWASP ASVS to SLSA, so each finding points at a recognized standard."
---

---
title: "Codebase Intelligence Layer"
description: "Pre-computed architectural intelligence for a portfolio of microservices. Not documentation, but materialized views of actual code designed specifically for AI consumption. Inspired by <a href='https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f' target='_blank' rel='noopener noreferrer'>Karpathy's wiki concept</a> and extended with tangential ideas: a consistent cross-service schema, blast-radius analysis, known risks and 'do not' rules, and an MCP server as the query interface. The derivation cost is paid once per code change; every AI session and incident responder reads a compact artifact instead of re-ingesting source."
tech: ["Agent Skills", "MCP", "JSON Schema", "Python", "Go", "TypeScript", "Node.js"]
impact: "61 services documented across 5 owning teams; 13-tool MCP server for AI coding agents; cross-service blast-radius queries without manual context assembly"
order: 2
features:
  - name: "Materialized views, not prose"
    detail: "A fixed artifact schema per service (routes, datastores, auth model, deployment topology, ownership, risk, and change impact) is extracted surgically from source code, not written by hand. Applied consistently across 61 services and 5 owning teams, it makes portfolio-wide dependency, blast-radius, and auth-model queries possible. Extends <a href='https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f' target='_blank' rel='noopener noreferrer'>Karpathy's wiki</a> efficiency to multi-service portfolios: derivation cost paid once at write time, read cost approaches zero at query time."
  - name: "Blast radius and 'do not' rules"
    detail: "Change-impact analysis and risk artifacts surface cross-service dependencies and known failure modes as first-class structured data, not buried in READMEs. Enables questions like 'what breaks if this datastore goes down?' across the entire portfolio in a single query."
  - name: "MCP server as the query interface"
    detail: "A 13-tool TypeScript MCP server wraps the knowledge base. Tools like find_services_by_datastore, get_change_impact, and get_agent_brief turn the structured artifacts into a callable API for any AI coding agent. The agent loads a single compact artifact rather than re-reading thousands of lines of source per session."
  - name: "repo-intel skill closes the derivation loop"
    detail: "A portable agent skill, written as a plain-markdown procedure designed to run in any agentic coding CLI, runs surgical static analysis on any repository and emits the full artifact set in one pass. A change-detection gate compares the source commit SHA against the last recorded provenance: small changes trigger a micro-extraction that updates only the affected artifacts, while changes to manifests, Dockerfiles, or workflows trigger a full re-extraction. New service added → run the skill → open a PR. The knowledge base stays in sync with code changes, not with whoever last updated a wiki page."
  - name: "DORA metrics from a single common substrate"
    detail: "DORA metrics instrumented across 23 repositories using git merge history, the only substrate shared by every team, so no team had to change its tooling. Each metric carries a signal-quality label (proxy, observed, or not instrumented), and time to restore is left un-instrumented rather than inferred. Publishing the gap is deliberate: a metric with no honest signal is worse than no metric."
  - name: "Now the grounding layer for an agentic delivery pipeline"
    detail: "This knowledge base is the context source a spec-driven development CLI reads before writing a spec in the <a href='/projects#software-factory-mvp'>Developer Software Factory</a>: spec quality is bounded by context quality, with no extra manual step between the two systems."
---

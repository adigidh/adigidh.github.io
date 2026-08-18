---
title: "Codebase Intelligence Layer"
description: "Pre-computed architectural intelligence for a portfolio of microservices. Not documentation, but materialized views of actual code designed specifically for AI consumption. Inspired by <a href='https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f' target='_blank' rel='noopener noreferrer'>Karpathy's wiki concept</a> and extended with tangential ideas: a consistent cross-service schema, blast-radius analysis, known risks and 'do not' rules, and an MCP server as the query interface. The derivation cost is paid once per code change; every AI session and incident responder reads a compact artifact instead of re-ingesting source."
tech: ["Claude Code", "MCP", "JSON Schema", "Python", "Go", "TypeScript", "Node.js"]
impact: "18 services documented; onboarding reduced from days to minutes; cross-service blast-radius queries that were previously impossible"
order: 2
features:
  - name: "Materialized views, not prose"
    detail: "A structured JSON manifest per service captures routes, datastores, auth model, deployment topology, and ownership. Extracted surgically from source code, not written by hand. Extends <a href='https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f' target='_blank' rel='noopener noreferrer'>Karpathy's wiki</a> efficiency to multi-service portfolios: derivation cost paid once at write time, read cost approaches zero at query time."
  - name: "Blast radius and 'do not' rules"
    detail: "Change-impact analysis and risk artifacts surface cross-service dependencies and known failure modes as first-class structured data, not buried in READMEs. Enables questions like 'what breaks if this datastore goes down?' across the entire portfolio in a single query."
  - name: "MCP server as the query interface"
    detail: "A Claude Code MCP server wraps the knowledge base. Tools like find_services_by_datastore, get_change_impact, and get_agent_brief turn the structured artifacts into a callable API for any AI session. The AI loads a compact artifact rather than re-reading thousands of lines of source per session."
  - name: "repo-intel skill closes the derivation loop"
    detail: "A Claude Code skill runs surgical static analysis on any repository and emits the full artifact set in one pass. New service added → run the skill → open a PR. The knowledge base stays in sync with code changes, not with whoever last updated a wiki page."
---

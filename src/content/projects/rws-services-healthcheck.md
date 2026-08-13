---
title: "Research Website Services Observability & Monitoring Stack"
description: "Designed and delivered a full observability solution for the 7 VPC-internal RWS platform services, comprising two purpose-built Grafana dashboards backed by Prometheus and Blackbox Exporter — one for engineers, one for stakeholders."
tech: ["Prometheus", "Grafana", "Blackbox Exporter", "Kubernetes", "OpenShift"]
impact: "Continuous automated visibility across 7 RWS services with 99% SLO tracking and 30-day certificate expiry alerting"
order: 3
sections:
  - title: "Stakeholder View Dashboard"
    bullets:
      - "Real-time service availability with plain Online/Offline status, enabling managers to self-serve accurate platform health without engaging the engineering team"
      - "Per-service reliability scores tracked against the 99% SLO target, with historical uptime trends viewable over any reporting window (daily, weekly, monthly)"
      - "Proactive certificate expiry tracking with 30-day advance warning, preventing surprise service outages from expired certificates"
  - title: "Engineer View Dashboard"
    bullets:
      - "Real-time availability, SLO attainment tracking, and per-request latency percentiles (p50/p95/p99) giving engineers a complete performance baseline at a glance"
      - "HTTP phase-level breakdown (DNS, TCP, TLS, backend processing) enabling precise root cause isolation without guesswork"
      - "Self-relative anomaly detection and latency trend analysis surface degradation before thresholds are breached, shifting the team from reactive to proactive"
      - "Failure pattern analysis distinguishes transient blips from sustained outages, reducing false alarms and shortening time-to-triage during incidents"
      - "Monitoring pipeline self-health row ensures engineers always know whether dashboard data is trustworthy, preventing decisions made on stale metrics"
---

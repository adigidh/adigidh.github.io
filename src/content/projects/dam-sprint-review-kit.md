---
title: "Sprint Review (DAM Starter Kit)"
description: "A <a href='https://github.com/dam-agents/dam' target='_blank' rel='noopener noreferrer'>DAM</a> starter kit that writes a sprint review from the merged pull requests and commits in a date range. Changes are grouped into features, bug fixes and improvements, each with a sentence on the value it delivers. Output is markdown, Slack-ready text, or both, and the Slack text is checked against Slack's limits and fixed automatically when a check fails."
tech: ["DAM", "GitHub", "Slack", "Markdown"]
impact: "Published in the DAM community catalog; turns a date range of merged work into a shareable draft review"
order: 7
features:
  - name: "Value over changelog"
    detail: "Each change gets a sentence on the value it delivers, and the summary explains why the sprint matters rather than listing what changed."
  - name: "Output checked before delivery"
    detail: "Slack text is validated against the 4000-character limit and Slack's formatting rules, then corrected automatically if a check fails."
  - name: "Optional direct posting"
    detail: "Given a Slack incoming webhook URL, the agent posts the review itself. Without one, it shows the text so it can be pasted."
  - name: "Honest estimates"
    detail: "Size figures come from git diff --stat and are labelled as rough estimates, and every review is a draft to check before sharing."
---

---
date: '2024-03-11'
title: 'Trello – Clickjacking on Public Board Pages'
github: ''
external: ''
tech:
  - Clickjacking
  - Web Security
  - Trello
company: 'Trello'
showInProjects: true
---



Identified a clickjacking vulnerability on Trello’s publicly accessible board pages caused by missing anti-framing headers (X-Frame-Options and Content-Security-Policy). An attacker could embed a public board within a malicious iframe to trick users into interacting with UI elements unknowingly, potentially exposing sensitive information or triggering unintended actions.
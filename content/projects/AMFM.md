---
date: '2023-05-23'
title: 'Shopify – Blind SSRF in PDF Generator (DOM-Based)'
github: ''
external: ''
tech:
  - SSRF
  - PDF Rendering
  - DOM-based Vulnerability
  - Shopify
company: 'Shopify'
showInProjects: true
---

Identified a blind SSRF in Shopify’s PDF generator, triggered via DOM-based template injection. By embedding crafted URLs, backend requests could be forced from Shopify’s servers. Although responses weren’t visible, exploitation was confirmed using DNS-based OOB techniques. This could allow internal service probing or access to sensitive endpoints.
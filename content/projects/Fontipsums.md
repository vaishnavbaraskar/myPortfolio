---
date: '2023-07-24'
title: 'PayPal – DOM-Based XSS via PostMessage'
github: ''
external: ''
tech:
  - DOM XSS
  - PostMessage
  - Web Security
  - PayPal
company: 'PayPal'
showInProjects: true
---

Discovered a DOM-based XSS vulnerability in PayPal's checkout flow caused by insecure handling of `postMessage` events. The application trusted cross-origin messages without proper origin or content validation, allowing an attacker to inject malicious JavaScript into the checkout context. This could lead to session hijacking or phishing attacks. The issue was disclosed responsibly through Bugcrowd.
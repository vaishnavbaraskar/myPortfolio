---
date: '2023-03-01'
title: 'Twitter OAuth redirect_uri Bypass → Account Takeover'
github: ''
external: ''
tech:
  - OAuth 2.0
  - Authentication
  - Web Security
  - Twitter
company: 'Twitter'
showInProjects: true
---

Reported a critical vulnerability in Twitter’s OAuth 2.0 implementation that allowed redirect URI validation bypass, leading to a potential account takeover scenario. The flaw stemmed from improper validation of `redirect_uri` parameters in Twitter’s authorization server, which could be exploited to leak OAuth authorization codes to attacker-controlled domains.

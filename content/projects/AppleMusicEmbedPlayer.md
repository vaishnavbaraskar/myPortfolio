---
date: '2023-06-13'
title: 'Uber – Race Condition in Coupon Redemption'
github: ''
external: ''
tech:
  - Race Condition
  - API Exploitation
  - Concurrency
  - Uber
company: 'Uber'
showInProjects: true
---



Discovered a race condition vulnerability in Uber’s coupon redemption API. By sending multiple concurrent requests to the `/api/redeem` endpoint, it was possible to redeem the same coupon multiple times, bypassing intended usage limits. This could lead to financial abuse or unauthorized benefits. The issue was responsibly disclosed through HackerOne.
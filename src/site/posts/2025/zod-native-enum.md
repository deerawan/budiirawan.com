---
title: 'Use Zod native enum for Typescript enum'
date: 2025-04-18
category: 'zod'
tags: ['zod', 'enum', 'typescript']
---

I recently reviewed a PR that uses Zod to validate the enum type. The code looks like this in Typescript:

```typescript
export enum SubscriptionTierEnum {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

const subscriptionValues = Object.values(SubscriptionTierEnum) as [
  SubscriptionTierEnum,
  ...SubscriptionTierEnum[]
];

export const SubscriptionTierSchema = z.enum(subscriptionValues);
```

This code works, but it can be simplified using Zod's native enum support ([doc](https://zod.dev/?id=native-enums)). Instead of creating an array of enum values using `Object.values`, you can directly use the enum in the `z.nativeEnum` function. Here's how you can do it:

```typescript
export const SubscriptionTierSchema = z.nativeEnum(SubscriptionTierEnum);
```

This approach is cleaner and more efficient 🥰

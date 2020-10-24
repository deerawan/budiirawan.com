---
title: 'heremaps index.d.ts is not a module'
date: 2020-10-24
category: 'typescript'
tags: ['typescript']
---

## Problem

When I was trying to use heremaps typings in a typescript file in my Angular project

```ts
import { H } from 'heremaps'
```
I got this issue

```bash
TS2306: File '<project-path>/node_modules/@types/heremaps/index.d.ts' is not a module.
```
It is because heremaps is a browser library, but I'm using `moduleResolution: "node"` in my `tsconfig.json`.  

## Solution

The solution is to add `heremaps` to `types` field in `tsconfig.json` 

```json
"types": ["heremaps"]
```

alternative solution is to add this below at the top of the Typescript file
```
/// <reference types="heremaps" />
```

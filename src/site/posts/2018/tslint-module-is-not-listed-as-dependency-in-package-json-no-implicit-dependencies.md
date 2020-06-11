---
title: "[tslint] Module xxx is not listed as dependency in package.json (no-implicit-dependencies)"
date: 2018-04-07
category: typescript
---

## Problem

I got this error when updating to latest Tslint **5.7.0**. It is said.

```bash
> [tslint] Module chai is not listed as dependency in package.json (no-implicit-dependencies)
```

My chai package is **definitely listed** as dependency in my package.json. After looking at tslint documentation about [no-implicit-dependencies](https://palantir.github.io/tslint/rules/no-implicit-dependencies/), I found that

> By default the rule looks at "dependencies" and "peerDependencies". By adding the "dev" option the rule looks at "devDependencies" instead of "peerDependencies". By adding the "optional" option the rule also looks at "optionalDependencies".

So, because I listed Chai in dev dependencies, Tslint couldn't find it using its default rule.

## Solution

Set the rule in `tslint.json` to either

```json
"no-implicit-dependencies": false
```

or

```json
"no-implicit-dependencies": [true, "dev"]
```

I chose to do the latter one. :)

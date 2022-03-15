---
title: "Clean Code: Function Arguments"
date: 2022-03-15
category: 'clean-code'
tags: ['clean code']
---

This article is a short summary about Function Arguments from Clean Code book (Robert C. Martin)

How good a function determined by number of arguments:

- no argument 👍 👍 👍
- one argument 👍 👍
- two arguments 👍
- three arguments ❌
- Four arguments ❌ ❌

Strong reasons to have a function with few arguments:

1. Easier to read
2. Easier to write test cases. More than two arguments can be daunting.

Let's compare these functions

```ts
includeSetupPage()
```

is easier to read than

```ts
includeSetupPage(newPageContent)
includeSetupPage(newPageContent, pageAttributes)
includeSetupPage(newPageContent, pageAttributes, envVars)
```

Also, in general, should avoid output argument. Let's take a look at this function

```ts
copyArrayFromSourceToDestination(source, destination);
```

Function above use `destination` as output argument. It could be confusing because when
we read a function, we expect the information is going in through arguments and out through
the return value.

Here is a better way

```ts
const destination = copyArrayFromSource(source);
```

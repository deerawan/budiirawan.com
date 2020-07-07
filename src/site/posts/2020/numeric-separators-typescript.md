---
title: "How to use Numeric Separators in Typescript"
date: 2020-07-07
category: 'typescript'
tags: ['typescript']
---
It's very hard for human eye to see large numbers in the code e.g

```ts
const total = 500000000;
const amount = 99999;
const price = 12445633335.55;
```

Since Typescript 2.7, we can add underscores `_` as numeric separators so numbers are more human readable. 

```ts
const total = 500_000_000;
const amount = 99_999;
const price = 12_445_633_335.55;
```
We've added a few underscores and we could see that the overall reading experience is better. These underscores won't affect Javascript output because they will be compiled away. 
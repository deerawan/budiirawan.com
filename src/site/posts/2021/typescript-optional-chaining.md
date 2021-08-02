---
title: "Optional Chaining in Typescript"
date: 2021-08-01
category: 'typescript'
tags: ['typescript']
---

Optional chaining in Typescript was introduced in Typescript 3.7. Let's see how it can help to improve our code.

## Properties access

Let's say we have this `Car` type

```ts
type Car = {
  year: number;
  color: string;
  owner?: {
    name: string;
    address: string;
  }
}

const car: Car = {
  year: 2017,
  color: 'red',
}
```

If we want to access properties inside `owner` field, we used to write it as

```ts
const carOwnerName = car.owner && car.owner.name;
```

But using optional chaining, we could rewrite it as

```ts
const carOwnerName = car.owner?.name;
```

Definitely way simpler than previous code. The code basically will be executed when `owner` exists. If `owner` is `null` or `undefined`, it will stop and will give us `undefined`.

We probably will also add extra `?` for car as well, so it becomes

```ts
const carOwnerName = car?.owner?.name;
```

## Array item access

For this case, let's add one more optional property `features` which is an array into our `Car` type

```ts
type Car = {
  year: number;
  color: string;
  owner?: {
    name: string;
    address: string;
  },
  features?: string[]
}
```

If we want to access any element inside `features`, we could also do this

```ts
const firstFeature = car.features?.[0];
```

Also if we have out-of-box property name such as

```ts

type Car = {
  // ...
  owner?: {
    // ...
    'previous-address': string;
  }
}
```

We also could use `[]` from optional chaining such as

```ts
const firstFeature = car.owner?.['previous-address'];
```

## Optional function call

It's quite useful to execute function where it can be optional

```ts
function callApi(callback?: () => void) {
  callback?.();
}
```

Other use case is for optional function call as seen below

```ts
type Car = {
  // ...
  owner?: {
    // ...
    sendEmail?: () => void; // for sending email to owner
  }
}
```

which can be represented as

```ts
car.owner?.sendEmail?.()
```
---
title: "Type Inference in Typescript"
date: 2019-02-10
category: 'typescript'
tags: ['typescript']
permalink: 'typescript-type-inteference'
---

In this post, we are going to see how TypeScript can infer type in many ways. Type inference happens when there is no explicit type annotation.

## Basic Variable

The variable value can infer type.

```typescript
let name = 'john doe'; // type of name is `string`
let age = 17; // type of age is `number`
let isStudent = true; // type of isStudent is `boolean`

name = 25; // compile error
age = 'wife of john doe'; // compile error
isStudent = 'yes'; // compile error
```

## Array

Type inference for array will be based on its elements and it can be mixed types.

```typescript
let students = ['donna', 'robin', 'bruce']; // type of students is `string[]`
let ages = [10, 15, 20]; // type of ages is `number[]`
let mixed = ['donna', 10, 15, 20, 'robin', 'bruce']; // type of mixed is `(string|number)[]
```

## Object

Just like variable, type inference for object works similar way.

```typescript
let student = {
  name: 'donna',
  age: 18
}

student.name = 20; // compile error
```

## Function

Type inference can happen for function return when there is enough type annotation given. See example below:

```typescript
function substract(num1: number, num2: number) {
  return num1 - num2;
}
```

Return of <code>substract</code> method will be inferred as <code>number</code> because <code>num1</code> and <code>num2</code> type is <code>number</code>.

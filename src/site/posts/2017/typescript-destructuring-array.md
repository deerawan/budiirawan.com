---
title: "Typescript: Destructuring Array"
date: 2017-01-14
category: 'typescript'
---

Literally, destructuring is a feature of javascript(EcmaScript 2015) but Typescript also supports it. This feature allows you to extract data from array and object. But in this post, we will focus on destructuring array.

## Basic Assignment

How does it work for array? Let's try a basic assignment

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [first, second, third] = students;

console.log(first); // 'budi'
console.log(second); // 'sinta'
console.log(third); // 'lusi'
```

If we do comparison, we used to assign array variables using index like below

```typescript

let students = ['budi', 'sinta', 'lusi'];
let first = students[0];
let second = students[1];
let third = students[2];

console.log(first); // 'budi'
console.log(second); // 'sinta'
console.log(third); // 'lusi'
```

We can see that destructuring is nicer and cleaner.

## Using Declared Variables

Destructuring also works with declared variables.

```typescript

let first, second, third;

let students = ['budi', 'sinta', 'lusi'];
[first, second, third] = students;

console.log(first); // 'budi'
console.log(second); // 'sinta'
console.log(third); // 'lusi'
```

## Ignore Elements

We can ignore element assignments in destructuring.

Here we only get the first element

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [first] = students;

console.log(first); // 'budi'
```

Below we will get only the first and second element.

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [first, second] = students;

console.log(first); // 'budi'
console.log(second); // 'sinta'
```

We can ignore the middle element as following example

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [first, ,third] = students;

console.log(first); // 'budi'
console.log(third); // 'lusi'
```

And if you care with just the third element

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [, ,third] = students;

console.log(third); // 'lusi'
```

## Catch the Rest

We can catch the rest of elements using `...` and store it into a variable. It will be stored as array.

```typescript

let students = ['budi', 'sinta', 'lusi'];
let [first, ...rest] = students;

console.log(first); // 'budi'
console.log(rest); // ['sinta', 'lusi']
```

## Default Value

We can give default value in case the array elements are not exist

```typescript

let students = ['budi'];
let [first, second='daebak', third='gomawo'] = students;

console.log(first); // 'budi'
console.log(second); // 'daebak'
console.log(third); // 'gomawo'
```

## Swap Variables

One of useful technique of destructuring is to swap variable

```typescript

let student1 = 'budi';
let student2 = 'sinta';

[student1, student2] = [student2, student1];

console.log(student1); // 'sinta'
console.log(student2); // 'budi'
```

## Function Parameter

We can use destructuring in function parameter

```typescript

let students = ['budi', 'sinta', 'lusi'];

function printStudent([first, second]: [string, string]) {
  console.log(first);
  console.log(second);
}

printStudent(students);
// outputs:
// 'budi'
// 'sinta'
```

## Array From a Function

Destructuring can be used for array returned from function

```typescript

let studentName = 'john doe';
let [firstName, lastName] = studentName.split(' ');

console.log(firstName); // 'john'
console.log(lastName); // 'doe'
```

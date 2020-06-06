---
title: "Typescript: Destructuring Object"
date: 2017-02-10
---

In last post, we talked about [destructuring array](http://budiirawan.com/typescript-destructuring-array/ "Typescript: Destructuring Array"). In this post, we're going to talk about destructuring object in Typescript.

## Old Way vs New Way

This how I used to do when accessing property in object.

```typescript

let student = {
  name: 'budi',
  age: 17
};

let name = student.name;
let age = student.age
```

not bad! But in Typescript / ES6, we can do something better and cleaner like this

```typescript

let student = {
  name: 'budi',
  age: 17
};

let { name, age } = student;
// name => budi
// age => 17
```

For `{ name, age }`, each of them is the property name in student object. So, if you put non exist property, it will return undefined.

```typescript

let student = {
  name: 'budi',
  age: 17
};

let { address } = student;

console.log(address); // undefined
```

## Change Variable Name

We can also change the assigned name, for example instead of `name`, we want to assign the value to variable `student_name`

```typescript

let student = {
  name: 'budi',
  age: 17
};

let { name: student_name } = student;

console.log(student_name); // 'budi'
```

We put the variable name that we want after the property name.

## Default Value

Can we set default value? yes! we can. This is how to do it.

```typescript

let student = {
  name: 'budi',
  age: 17
};

let { address = 'new york' } = student;

console.log(address); // 'new york'
```

Because address is not exist in student object, it uses the default value.

## Complex Object

We got a very complicated student here

```typescript

let student = {
  name: { first_name: 'budi', last_name: 'irawan' },
  age: 17,
  phone: { mobile: '081', home: '081' }
};

let { name: { first_name }, phone: { home } } = student;

console.log(first_name); // 'budi'
console.log(home); // '081'
```

## Catch the Rest

Surprisingly, destructuring object also supports rest assignment

```typescript

let student = {
  name: 'budi',
  age: 17,
  hobby: 'basketball',
  address: 'new york'
};

let { name, ...other } = student;

console.log(other.age); // 17
console.log(other.hobby); // 'basketball'
```

## Parameter Function

Destructuring can help to create a function with better parameter

```typescript

let student = {
  name: 'budi',
  age: 17,
  address: 'new york'
};

function printBasicInfo({ name, age, hobby = 'study' }) {
  console.log(name);
  console.log(age);
  console.log(hobby);
}

printBasicInfo(student);
```

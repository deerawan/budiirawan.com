---
title: "JavaScript ES6: The Different Between Let vs Const"
date: 2015-09-10
category: javascript
---

In upcoming JavaScript ES6 (EcmaScript 2015), they introduce new way to define variables by using **let** and **const**. As you may be know as JavaScript developer, we are already familiar with **var**. Let's inspect them more.

## Let

Unlike var which defines variable globally or locally to an entire function, let creates variables that are **limited in scope to the block, statement or expression.** 

Check this example below 

```js
// Var
function testVar() {
  var x = 10;

  if (true) {
    var x = 50;
    console.log(x); // print 50
  }

  console.log(x); // print 50
}

// Let
function testLet() {
  let x = 10;

  if (true) {
    let x = 50;
    console.log(x); // print 50
  }

  console.log(x); // print 10
}
```

In `let` example, we can see that variable x inside if statement is block scoped. That's why it prints 50 instead of 10.

## Const

Const main purpose is for creating read-only reference to a value but the value itself is mutable. You can say that **it is const reference not const value**. That is the reason why const variable can't be reassigned.

Check this out example below 

```js
const name = "bugan"; 
name = "diana";

console.log(name); // bugan
```

In spite of giving new assignment, the value of `name` is still "bugan". Let's try with array example.

```js
const fruits = ["apple", "mango"]; 
fruits.push("kiwi");

console.log(fruits); // ["apple", "mango", "kiwi"]

fruits = ["orange"]; 
console.log(fruits); // ["apple", "mango", "kiwi"]
```

As you can see, although we define fruits as const, the value itself is mutable (we added kiwi). However, when we reassign fruits to another value, it doesn't work.

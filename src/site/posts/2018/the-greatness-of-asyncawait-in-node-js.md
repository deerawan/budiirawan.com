---
title: "The Greatness of Async/Await in Node.js"
date: 2018-02-25
category: nodejs
---

I've been exploring async/await in Node.js 8. This new feature is totally wicked. It could change our promise-based code becomes cleaner and more readable. Let's see how it works.

Try with simple promise

```javascript
// a promise function
const sayHello = (msg) => new Promise((resolve, reject) => resolve(`Hello ${msg}`));

// Promise version
function greeting(name) {
  sayHello(name).then(msg => console.log(msg));
}
greeting('thomas'); // output "Hello thomas"
```

Compare with async/await

```javascript
// Async/await version
async function greetingV2(name) {
  const msg = await sayHello(name); // assign the response to msg
  console.log(msg);
}

greetingV2('thomas');
```

As you can see in async/await version, instead of using `then` to get the message, we can just use an assignment.

## More About Async

Noted that async function returns a promise.

```javascript
async function getData(url) {
  return url;
}
console.log(getData('google.com'))
getData('facebook.com').then(console.log);

// Promise { 'google.com' }
// facebook.com
```

And we use same way to handle error for async as in promise

```javascript
async function getDataError(url) {
  throw new Error(`${url} is not exist`);
}

getDataError('google.com').catch(err => console.log(err.message));

// google.com is not exist
```

Let's see how we construct async using function declaration

```javascript
const getNumber = async () => 456;
console.log(getNumber())

// Promise { 456 }
```

## More About Await

For async function that has await expression, it will pause the function execution until the promise from await is resolved/rejected. Remember that `await` can only be defined in `async` function. Otherwise, you will encounter an error.

> Await must be defined in async function.

We can define one or multiple await in async function.

```javascript
const sayHello = (msg) => new Promise((resolve, reject) => resolve(`Hello ${msg}`));
const sayGoodbye = (msg) => new Promise((resolve, reject) => resolve(`Goodbye ${msg}`));

async function greetings() {
  const hello = await sayHello('robert');
  const goodbye = await sayGoodbye('robert');

  console.log(hello, goodbye);
}

greetings();

// Hello robert Goodbye robert
```

## Catch Error

In promise based code, we usually catch error with `catch` expression like following:

```javascript
const rejectedPromise = new Promise((res, rej) => rej(new Error('some error')));
rejectedPromise().catch(err => console.log(err.message));
```

when we use await expression, we must use `try catch` expression, for example

```js
try {
  const response = await rejectedPromise();
} catch (err) {
  console.log(err.message);
}
```

## Promise All

We can combine await with `promise.all` like the following code:

```javascript

const getFirstNumber = async () => 123;
const getSecondNumber = async () => 456;

const printNumbers = async () => {
  const numbers = await Promise.all([getFirstNumber(), getSecondNumber()]);
  console.log(numbers);
}

printNumbers();

// [ 123, 456 ]
```

## Loop and Iteration

Await can be used inside the loop

```javascript
const counter = (number) => new Promise((resolve, reject) => resolve(`count ${number}`));

async function sayHelloToAll() {
  for (let i = 0; i < 3; i++) {
    const countMsg = await counter(i);
    console.log(countMsg);
  }
}
sayHelloToAll();

// count 0
// count 1
// count 2
```

If we use `map`, we can also use await.

```javascript
async function sayHelloToAllMap() {
  return [0, 1, 2].map(async (number) => {
    const countMsg = await counter(number);
    console.log(countMsg);
  });
}

sayHelloToAllMap();

// count 0
// count 1
// count 2
```

See that we specify `async` inside `map`

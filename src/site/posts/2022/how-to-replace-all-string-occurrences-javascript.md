---
title: "How to replace all string occurrences in Javascript"
date: 2022-01-27
category: 'javascript'
tags: ['javascript', 'regex']
---

In this post, I'll share two ways in Javascript to replace
all string occurrences.

## replace() method

Use regex with global modifier `g` to replace all string occurrences

```ts
const regex = /wagga/g; // use global modifier
const input = 'wagga wagga';

const output = input.replace(regex, 'mogu');
console.log(output); // mogu mogu
```

Beware that if we don't specify global modifier in regex, `replace()` will just replace the first occurrence

```ts
const regex = /wagga/; // no global modifier
const input = 'wagga wagga';

const output = input.replace(regex, 'mogu');
console.log(output); // mogu wagga
```

The result is same if we use a substitution string

```ts
const substr = 'wagga';
const input = 'wagga wagga';

const output = input.replace(substr, 'mogu');
console.log(output); // mogu wagga
```

## replaceAll() method

This method is added in ECMAScript 2021.

Unlike `replace()`, use string in `replaceAll()` will replace all occurrences

```ts
const substr = 'wagga'; // ordinary string
const input = 'wagga wagga';

const output = input.replaceAll(substr, 'mogu');
console.log(output); // mogu mogu
```

The syntax is nicer compare to `replace()` with regex global modifier.


`replaceAll()` also can accept regex, but the regex must have global modifer, otherwise, it'll throw an error

```ts
const regex = /wagga/g;
const input = 'wagga wagga';

const output = input5.replaceAll(regex5, 'mogu');
console.log(output); // mogu mogu
```

The syntax above is exactly same as `replace()`. If we don't do advanced stuff, using a substitution string is more recommended than regex.


Below is an example if we don't specify global modifer, it'll throw an error

```ts
const regex = /wagga/; // no global modifier
const input = 'wagga wagga';

const output = input.replaceAll(regex, 'mogu');
console.log(output); // error String.prototype.replaceAll called with a non-global RegExp argument
```

## Playground

Try this [Stackblitz](https://stackblitz.com/edit/js-3uxfkx?file=index.js)

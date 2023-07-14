---
title: "React: How to use async await in useEffect hook"
date: 2023-07-15
category: 'react'
tags: ['react', 'useEffect']
---

useEffect hook first argument is supposed to be a function. The function could return nothing / undefined or a clean-up function.

Let's take a look at useEffect that return nothing / undefined

```tsx
useEffect(() => {
  callApi();

  // no return statement is equivalent to `return undefined`
}, []);
```

The second example is useEffect that return a clean-up function

```tsx
useEffect(() => {
  callApi();

  return () => {
    // clean up function
  };
}, []);
```

Based on that characteristic, we could not use async / await for the argument because it will return a promise not a function.
So, this below won't work

```tsx
useEffect(async () => {
  await callApi();
}, []);
```

React will give you a nice warning if you do that

[![async await use effect](/images/2023/async-await-use-effect.jpg)](/images/2023/async-await-use-effect.jpg "async await use effect")


# Solution

As proposed by the warning, we could create a async function and call it immediately

```tsx
useEffect(() => {
  const fetchData = async () => {
    const result = await callApi();
    // could call set state here e.g setResult(result)
  }

  fetchData();
}, []);
```

Alternative syntax using IIFE (Immediately Invoked Function Expression)

```tsx
useEffect(() => {
  (async () => {
    const result = await callApi();
    // could call set state here e.g setResult(result)
  })();
}, []);
```

Alternative syntax using `then` statement

```tsx
useEffect(() => {
  callApi().then((result) => {
    // could call set state here e.g setResult(result)
  })
}, []);
```

# Playground

Check the `Console` tab

<iframe src="https://codesandbox.io/embed/useeffect-async-await-issue-5hdtxx?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="useEffect-async-await-issue"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

# Summary

useEffect first argument is supposed to be a function that return nothing / undefined or a clean-up function. It could not be a promise.

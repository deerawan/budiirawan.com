---
title: "Understanding React Hook useRef"
date: 2022-09-06
category: 'react'
tags: ['react', 'react-hook', 'useRef']
---

`useRef` is used to store value that can be persisted between rendering. It has important characteristics:

- The value can be mutated
- It doesn’t trigger rendering when the value is mutated
- Even though it doesn't trigger rendering, the value is persisted between rendering

`useRef` accepts initial value and returns a reference object with a single `current` property.

```ts
const ref = useRef(0);

// read the value
const value = ref.current;

// mutate the value
ref.current = 3;
```

One of the best way to understand this hook is by comparing it with `useState`

## useRef vs useState

Examine the code below

```ts
import { useRef, useState } from 'react';

export default function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function handleRefClick() {
    countRef.current = countRef.current + 1;
    console.log("useRef: Button is clicked " + countRef.current + " times");
  }

  function handleStateClick() {
    setCount(count + 1);
    console.log("useState: Button is clicked " + count + " times");
  }
rtim
  console.log("rendering triggered");

  return (
    <>
      <div>
        <button onClick={handleRefClick}>Click me: useRef</button>
        <p>countRef value: {countRef.current}</p>
      </div>
      <br />
      <div>
        <button onClick={handleStateClick}>Click me: useState</button>
        <p>count state value: {count}</p>
      </div>
    </>
  );
}

```

If we click the `useRef` button, notice that:

1. It never triggers rendering. Message `Rendering triggered` is never logged again after the initial rendering. The `countRef value: {countRef.current}` in the template keeps showing `0`, although the button is clicked multiple times. The value will be updated in the template once rendering happens again i.e when `useState` button is clicked.
2. See the message `useRef: Button is clicked...`. The `countRef` value is incremented overtime, so the value is persisted between rendering.


If we click the `useState` button, notice that:

1. The message `Rendering triggered` is logged again
2. The `count state value: {count}` shows correct count result

Based on this experiment, if you need to display a value for rendering (in the template), then use `useState`. Otherwise, use `useRef`.


## Use Cases

Below are some use cases we could use for `useRef`

### Manipulating DOM

It's a quite common scenario to manipulate DOM element. Below is a use case how to set focus for an input field

```ts
export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <input ref={inputRef} type="text" value="hi" />
    </div>
  );
}
```

### Set Interval

```ts
export default function App() {
  const intervalRef = useRef(null);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      console.log("interval start");
    }, 100);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    console.log("interval stop");
  };

  return (
    <div className="App">
      <button onClick={handleStart}>Start Interval</button>
      <button onClick={handleStop}>Stop Interval</button>
    </div>
  );
}
```

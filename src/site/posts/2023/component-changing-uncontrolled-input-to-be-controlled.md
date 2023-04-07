---
title: "A component is changing an uncontrolled input to be controlled. "
date: 2023-04-07
category: 'react'
tags: ['react']
---

React provides a warning message when a component changes an uncontrolled input to a controlled one. This typically happens when using the `<input>` element.

> A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

[![uncontrolled controlled input](/images/2023/uncontroller-controlled-warning-message.jpg)](/images/2023/uncontroller-controlled-warning-message.jpg "uncontrolled controlled input")

Below is an example of how the error occurs. Try to type something in the input and inspect the devtools to see the message. (<a href="https://codesandbox.io/s/react-uncontrolled-controlled-warning-message-c60ewi?file=/src/App.js" target="_blank">CodeSandbox</a>)

```jsx
export default function App() {
  const [name, setName] = useState(); // use `undefined` value

  function handleChange(event) {
    setName(event.target.value);
  }

  return <input id="name" value={name} onChange={handleChange} />;
}
```

The primary cause is the `App` attempting to change `name` from `undefined` to a defined value.
Before discussing solutions, let's first understand the differences between uncontrolled vs controlled inputs.

# Uncontrolled input

Uncontrolled inputs are those where React doesn't control or update the value. Examples include:

```tsx
<input />;
<input type="checkbox" />;
```

Interestingly, React provides `defaultValue` and `defaultChecked` props to set the initial value as seen below. They also don't make `input` as controlled input.

```tsx
<input defaultValue="John Doe" />;
<input type="checkbox" defaultChecked />;
```

# Converting uncontrolled input to controlled

To create a controlled input, pass the `value` prop for text inputs or `checked` prop for checkbox or radio inputs.
Controlled inputs are typically used with `useState`, allowing React to manage the value.

```tsx
export default function App() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} id="name" value={name} />;
      {name && <p>My name is {name} </p>}
    </div>
  )
}
```

With this understanding. Let's jump into the solution which turn out to be simple 😄.

# Solution: provide fallback value if undefined

In our previous code example that cause the error, instead of undefined, we could give empty string as initial value.

```jsx
const [name, setName] = useState('');
```

Alternatively, we could also provide the fallback value in the `value` prop

```jsx
return <input id="name" value={name || ''} onChange={handleChange} />;
```

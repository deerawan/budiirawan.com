---
title: "Typescript: Apply Generic Type to a React Component"
date: 2023-07-01
category: 'typescript'
tags: ['typescript', 'react']
---

Typescript provides a way to apply generic to a React component. This is useful when we want to have a single component to render items of different types.

# Problem

Below is an example of a typical React component using render prop pattern that renders a list of items.

```tsx
interface ListProps {
  items: { id: string, label: string }[]
  renderItem: (item: { id: string, label: string }) => React.ReactNode
}

export function List({ items, renderItem }: ListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

The component above is not reusable because it only renders items of type `{ id: string, label: string }`. If we want to render items of different types e.g with icon, we need to create another component.

# Solution

Using Typescript, we could fix the issue by applying generic to the component.

```tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

The `T` in `ListProps<T>` indicates a generic type. We could pass the type to `items` when using the component.

Now, we could use the component to render items of different types.

```tsx
interface TextItem {
  id: string
  label: string
}

interface IconItem {
  id: string;
  icon: React.ReactNode;
}

const textItems: TextItem[] = [
  { id: '1', label: 'item 1' }
  { id: '2', label: 'item 2' }
]

const iconItems: IconItem[] = [
  { id: '1', icon: <svg></svg>},
  { id: '2', icon: <svg></svg>}
]

<List items={textItems} renderItem={(item) => <span>{item.label}</span>} />
<List items={iconItems} renderItem={(item) => <div>{item.svg}</div>} />
```
# Summary

In this article, we have learned how to apply generic to a React component. This is useful when we want to have a single component to render items of different types.

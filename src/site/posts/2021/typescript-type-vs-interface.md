---
title: "Type vs Interface in Typescript"
date: 2021-09-02
category: 'typescript'
tags: ['typescript']
---

Let's dig into the differences between Type and Interface in Typescript

For a basic usage, Type and Interface are interchangeable

```ts
interface Player {
  name: string;
  height: number;
  weight: number;
}

const lebron: Player = {
  name: 'Lebron james',
  height: 7.3
  weight: 20
}
```

```ts
type Player {
  name: string;
  height: number;
  weight: number;
}

const lebron: Player = {
  name: 'Lebron james',
  height: 7.3
  weight: 20
}
```

However, there are couple of differences between them. Let's see.

## Duplicate Declaration

Interface can be declared multiple times and it will merge the properties. This concept is called as [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) in Typescript.

```ts
interface Player {
  name: string;
}

interface Player {
  height: number;
}

const kobe: Player = { // `name` and `height` are merged in Player interface
  name: 'kobe',
  height: 70
}
```

Meanwhile for Type, it will give an error `Duplicate identifier 'Player2'`

```ts
type Player2 = {
  name: string;
}

type Player2 = {
  height: number;
}
```

See [Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgAoBs4E9rIN4BQyyIcAthAFzIDOYUoA5gNwEC+BBoksiKG2XIWIALCMEYiw1EAFcyAI2isOBBAHsQdZAGt1S6gJxRkAXnxES5KsgDkepbYA0lsRKnUA7AAZ2QA)

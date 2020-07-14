---
title: "Infer Type Using "in" Operator in Typescript"
date: 2020-07-14
category: 'typescript'
tags: ['typescript']
---
When you have an union type and you want to infer one of the type, the common way is using type guard

```typescript
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(pet: Fish | Bird) {
  if (isFish(pet)) {
    return pet.swim(); // pet: Fish
  }

  return pet.fly();
}

// create a type guard function
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```
But since Typescript 2.7, we could use `in` operator which give us simpler code without
need to create a function. 

```ts
function getSmallPet(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim(); // pet: Fish
  }

  ...
}
```
Easy peasy!
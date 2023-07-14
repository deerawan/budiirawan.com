---
title: "Style Guide: Where to put your test files"
date: 2023-07-15
category: 'clean-code'
tags: ['test', 'clean-code']
---

During my time working with different projects, I have seen different approaches to organize test files. Some projects put test files in the same folder as the source code, some projects put test files in a separate folder. I'll put my thoughts on both approaches below.

# Put test files in the same folder

```md
|-- src
|  |-- components
|    |-- Button
|      |-- Button.tsx
|      |-- Button.test.tsx
```

I notice some benefits of this approach

- Easy to find the test file because it is in the same folder as the source code
- Easy to import the source code because it is in the same folder as the test file. The import path is clean and short e.g `import Button from './Button'`.
- Easy to refactor or move the component because the test file is in the same folder as the source code

I truly like this approach ❤️. The idea is to keep related files near each other.

Looking at some existing Frontend frameworks, only Angular that explicitly recommends this approach. See [Angular Testing Guide](https://angular.io/guide/styleguide#style-04-02).

# Put test files in a separate folder

```md
|-- src
|  |-- components
|    |-- Button
|      |-- Button.tsx
|-- tests
|  |-- components
|    |-- Button
|      |-- Button.test.tsx
```

It actually has many disadvantages

- Hard to find the test file because it is in a separate folder. Some team members may not even know that the test file exists
- Switching between source code and test file is not easy because they are in different folders
- Need to refactor the test files folder structure if you move your component around

# Summary

I prefer to put test files in the same folder as the source code. It is easier to find, easier to import, and easier to refactor.

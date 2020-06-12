---
title: "Ruby: The Different Between Each, Map and Collect"
date: 2015-08-27
category: ruby
---

When I was learning Ruby, I found that `each`, `map` and `collect` look alike but they aren't. Let's see what the different between them is. I will use irb to demonstrate it.

## Each

`Each` basically iterate each item and performs the block statement.

```bash
> [1, 2, 3].each {|item| puts item * 2}
2
4
6
 => [1, 2, 3]
 ```

In above code, we have an array `[1, 2, 3]` then `each` iterate the item in array and print out the the result of item \* 2. **`Each` doesn't return anything**.

## Map

`Map` is different with `each`. `Map` **will create a new array as return value** after performing the block for each item.

```bash
> [1, 2, 3].map {|item| item * 2}
[2, 4, 6]
```

`[2, 4, 6]` is new array after calling map and performing item \* 2.

## Collect

Despite different name, `collect` functionality is same as `map` but `map` is more popular and preferable to use.

```bash
> [1, 2, 3].collect {|item| item `* 2}
[2, 4, 6]
```

> Prefer map over collect, find over detect, select over find\_all, reduce over inject and size over length. This is not a hard requirement; if the use of the alias enhances readability, it's ok to use it. 
_source: [Ruby style guide](https://github.com/bbatsov/ruby-style-guide#map-fine-select-reduce-size)_

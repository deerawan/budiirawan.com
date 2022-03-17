---
title: "Getting started with BEM methodology"
date: 2022-03-17
category: 'css'
tags: ['css']
---

BEM is a shorthand for Block, Element, Modifier.

## Definition

### Block

An entity that is meaningful on its own e.g

- menu
- button
- list
- header
- footer

CSS class is formed as block name `.block` e.g

```css
.menu { }
.btn { }
.list { }
.header { }
.footer { }
```

### Element

A part of block and it doesn't have standalone meaning e.g

- menu item
- button icon
- list item
- header logo
- footer copyright

CSS class for element is formed as block name + two underscores + element name `.block__element` e.g

```css
.menu__item { }
.btn__icon { }
.list__item { }
.header__logo { }
.footer__copyright { }
```

### Modifier

Flags for block or element used to change the appearance, behavior or state

CSS class for modifier is formed as block/element name + two dashes `.block--modifier` and `.block__element--modifier` e.g

```css
.btn--primary { } /* block modifier */
.btn__icon--solid { } /* element modifier */
```

## Examples

### Example 1

```css
/* BLOCK */
.list {
  list-style: none;
}

/* ELEMENT */
.list__item {
  padding: 2px;
}

/* MODIFIER */
.list--circle {
  list-style: circle
}

.list__item--small {
  font-size: 0.5px;
}
```

```html
<ul class="list list--circle">
  <li class="list__item">Item 1</li>
  <li class="list__item">Item 2</li>
  <li class="list__item list__item--small">Item 3</li>
</ul>
```

### Example 2

```css
/* BLOCK */
.btn {
  display: flex;
  background-color: grey;
  font-size: 1rem;
}

/* ELEMENT */
.btn__icon {
  font-size: 0.5rem;
  margin-right: 3px;
}

/* MODIFIERS */
.btn--primary {
  background-color: green;
}

.btn--secondary {
  background-color: purple;
}
```

```html
<button class="btn btn--secondary">
  <i class="btn__icon" /> Save
</button>
```

### Example 3

We could combine multiple blocks, below `list` + `btn`

```html
<ul class="list list--circle">
  <li class="list__item">
    <button class="btn">Click</button>
  </li>
</ul>
```

We don't treat button as element here such as `.list__btn` because button can be a standalone entity. Having this approach also encourage reusability.

### Example 4

A block that has nested elements

```css
.card {
  display: flex;
}

.card__header {
  background: yellow;
}

.card__logo {
  width: 20px;
  height: 20px;
}

.card__body {
  text-align: left;
}
```

```html
<div class="card">
  <div class="card__header">
    <img class="card__logo" />
  </div>

  <div class="card__body">
  </div>
</div>
```

See that here `card__logo` is used instead of `card__header__logo`. Always keep in mind that
element naming shouldn't reflect where it is being put. This way is easier if we want to
move element to a different location.

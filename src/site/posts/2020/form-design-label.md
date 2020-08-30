---
title: "Form Design: Label"
date: 2020-08-30
category: 'html'
tags: ['form','html', 'label', 'form design']
---

Label is very important when building form. Some benefits using label: 

1. Sighted user can see and read it
2. It can make field easier to digest
3. Increase hit area so users can click it to set focus to the field
4. Visually-impaired users can hear them by using a screenreader

## Best Practice

- `label` should be put for every input
- Input `id` and label's `for` should match and be unique
- For button ie Submit, `label` is not needed because the text inside the button acts as label

## Example
Example of form with labels: 

```html
<form>
  <!-- label 'for' and input 'id' must be same -->
  <label for="name">name</label>
  <input id="name" type="text" name="name">
  
  <label for="email">email</label>
  <input id="email" type="email" name="email">
  
  <!-- submit doesn't need a label, its value attribute acts as label -->
  <input type="submit" value="Sign up">
</form>
```




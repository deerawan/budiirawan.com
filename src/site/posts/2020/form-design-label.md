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

## Best Practices

### Always use label

Considering the importance of label, always use label for every input.

[![always use label](/images/2020/always-use-label.jpg)](/images/2020/always-use-label.jpg "Always use label")

### Use short label

Short labels help user to scan the form quicky. One or two words should suffice. 

[![short label](/images/2020/short-label.jpg)](/images/2020/short-label.jpg "short label")

### Don't use placeholder as label

Some problems with placeholder: 

- They disappear when the user types. User need to clear the input to see again the words
- User can mistakenly placeholder as a value, causing the field to be skipped

[![label not placeholder](/images/2020/label-not-placeholder.jpg)](/images/2020/label-not-placeholder.jpg "label not placeholder")

### Use Sentence Case

There are some ways to write labels: 

- **Sentence case**. Capitalize the first word i.e Email address
- **Title case**. Capitalize every word ie Email Address
- **All caps**. Capitalize all letters ie EMAIL ADDRESS

Sentence case is easier and faster to read.

[![label sentence case](/images/2020/label-sentence-case.jpg)](/images/2020/label-sentence-case.jpg "label sentence case")

## Implementation
in HTML, label is created using `<label>`. To connect label and input, input `id` and label's `for` should match and be unique. 

For button ie Submit, label is not needed because the text inside the button acts as label.

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




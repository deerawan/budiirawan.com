---
title: "Prevent Bootstrap Modal From Closing"
date: 2014-09-14
---

The default configuration of Bootstrap modal is can be closed when visitor click outside the modal or by pressing the escape (ESC) key. If you want to prevent boostrap modal from closing by those actions, you need to change the value of `backdrop` and `keyboard` configuration. The default value of backdrop and keyboard is set to `true`.

You can change the configuration in HTML or Javascript directly.

In HTML, just set `data-backdrop` to `static` and `data-keyboard` to `false`

\[html\] <button type="button" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Launch modal</button> \[/html\]

or using Javascript

\[js\] $('#myModal').modal({ backdrop: 'static', keyboard: false }) \[/js\]

I use Bootstrap v3.2.0 when this article is written. More information about [Bootstrap modal](http://getbootstrap.com/javascript/#modals).

Good luck :)

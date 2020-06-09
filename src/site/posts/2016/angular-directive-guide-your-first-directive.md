---
title: "Angular Directive Guide: Your First Directive"
date: 2016-03-14
---

_Note: all code is built with Angular 1.5.0_

Directive is a powerful tool in Angular. It can help you to manage your code elegantly. If you already use Angular for a while, you must be familiar with ng-model, ng-click, ng-repeat and ng-show. Those are some of angular built-in directives.

## How to Specify Directive in HTML

In Angular, you can define directive as an element, attribute, class names and even comment. The following shows how directive can be initialised in html. I use "harry potter" as my directive name. :p

\[code language="html"\] <harry-potter></harry-potter> <div harry-potter></div> <div class="harry-potter"></div> <!-- directive: harry-potter --> \[/code\]

> **Best Practice:** Always try to use directive as element or attribute over class names and comments for better clarity and readability

For attribute directive, Angular supports other forms beside using dash delimited e.g.

\[code language="html"\] <div harry:potter></div> <div harry\_potter></div> <div data-harry-potter></div> <div x-harry-potter></div> \[/code\]

> **Best Practice:** Use dash delimited for attribute directive because it is wide use

## Create Custom Directive

Let's start creating our first custom directive. As example, we are going to create a directive for displaying profile for user.

The following is our very simple directive code. Basically, it will display a template that contains user information using Angular binding.

\[code language="js"\] // script.js ... .directive('userProfile', function() { return { template: 'Name: {{ user.name }} <br /> Gender: {{ user.gender }} <br /> Phone: {{ user.phone }}' }; }); ... \[/code\]

We define the `user` model inside the controller below.

\[code language="js"\] // script.js ... .controller('MainCtrl', \['$scope', function($scope) { $scope.user = { name: 'Liliana', gender: 'Female', phone: '+1 222 333 444' }; }\]) ... \[/code\]

And for the HTML, it will be defined as

\[code language="html"\] ... <user-profile></user-profile> ... \[/code\]

You may notice that we use dash delimited instead of camel cased (userProfile) for directive name in HTML. It is because HTML is not case sensitive so it doesn't recognize camel cased.

You can see the final result inside following Plunker.

[View Plunker](https://plnkr.co/edit/z49nKlITpi8EA2uzgL4I?p=preview)

## Using Built-In Directive

We can also use built-in directive in the template. Let's say we want to display user's hobbies by using ng-repeat.

For the first step, let's add hobbies to our existing user so the model will like below.

\[code language="js"\] // script.js ... $scope.user = { name: 'Liliana', gender: 'Female', phone: '+1 222 333 444', hobbies: \['football', 'swimming', 'jogging'\] }; ... \[/code\]

Then in our directive template, we'll add ng-repeat.

\[code language="js"\] // script.js ... return { template: 'Name: {{ user.name }} <br /> Gender: {{ user.gender }} <br /> Phone: {{ user.phone }} <br /> Hobbies: <br /> <ul><li ng-repeat="hobby in user.hobbies">{{ hobby }}</ul>' }; ... \[/code\]

Beside ng-repeat, you can add other built-in Angular directives such as ng-show, ng-hide, ng-if and etc.

You can see the final result inside following Plunker.

[View Plunker](https://plnkr.co/edit/UKzxFMxmxTrVz3Ogb1HF?p=preview)

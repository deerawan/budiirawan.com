---
title: "Introduction to Binding in AngularJS"
date: 2015-12-06
category: angularjs
---

This post is my first milestone to share my knowledge about AngularJS. AngularJS is powerful framework to enhance your website or even for creating SPA (Single Page Application). The basic idea of SPA is to create web more like desktop app, make it faster, fluid and no page refresh for every page transition.

I'll cover more about AngularJS and SPA in next articles. Let's continue talking about introduction to binding in AngularJS.

## Pre-requisites

The first step to do is to add AngularJS into our website. Here is how to enable AngularJS in your website:

1. Download AngularJS script file or use CDN => [https://angularjs.org](https://angularjs.org/)
2. Add **ng-app** directive. The purpose is to tell AngularJS that our web is angular app.

You probably ask what directive is. In AngularJS, directive can act as component or attribute. In our case of ng-app, I often add it in html tag or body tag like below

```html
<html ng-app>
```

or

```html
<body ng-app>
```

And the full html page will look like below. I add **ng-app** and angularJS script from cdn

```html
<!DOCTYPE html ng-app> 
  <head> 
    <title>First AngularJS App</title> 
  </head> 
  <body> 
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular min.js"></script> 
  </body> 
</html>
```

## Getting Started

Our next step is to understand the binding in AngularJS. Let's start by adding model using directive and the data binding expression syntax **{{ variable }}**

```html
... 
Client Name: <input type="text" ng-model="client.name"> <h1>Hello {{ client.name }}
```

In the code above, ng-model is directive like ng-app. There is also data binding expression, noted with syntax **{{ client.name }}** to print out whatever user type in the input using.

> It is the best practice to use dot expression for every ng-model name

```html
<!DOCTYPE html ng-app> 
  <head> 
    <title>First AngularJS App</title> 
  </head> 
  <body> 
    Client Name: <input type="text" ng-model="client.name"> 
    <h1>Hello {{ client.name }} 
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.min.js"></script> 
  </body> 
</html>
```

See the working code [here](http://codepen.io/deerawan/pen/KVKrjz). The coolest thing is we don't add any javascript code. All the manipulation is done by AngularJS. It is very cool, isn't it?

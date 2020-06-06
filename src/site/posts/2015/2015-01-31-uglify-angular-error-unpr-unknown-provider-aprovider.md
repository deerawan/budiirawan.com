---
title: "Uglify Angular Error: unpr Unknown provider: aProvider"
date: 2015-01-31
---

The purpose of javascript [uglify](https://github.com/mishoo/UglifyJS2) is to make our javascript files size smaller. Smaller means faster load on web. When I tried to uglify my javascript that contain angular codes, I got this error

> error:unpr Unknown Provider Unknown provider: aProvider <- a

I found that the error is caused by variable named changing by uglify method (see mangle option true as default setting). It can be turned off but I don't want to. Below is the code that caused error

\[code language="javascript"\] var $injector = angular.injector(\['ng', 'myapp'\]); $injector.invoke(function ($rootScope, $compile) { ... }); \[/code\]

Uglify changed `$rootScope` and `$compile` name to others that caused the error. So, the solution is simple, I need to keep those name exist by adding their names before their function parameters.

\[code language="javascript"\] var $injector = angular.injector(\['ng', 'myapp'\]); $injector.invoke(\['$rootScope', '$compile', function ($rootScope, $compile) { ... }\]); \[/code\]

This is how I solved the error and become my best practice when coding in Angular JS.

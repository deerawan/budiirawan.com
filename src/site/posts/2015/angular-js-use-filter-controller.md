---
title: "AngularJS: How to Use Filter in Controller"
date: 2015-05-28
category: angularjs
---

In this article, I'm going to share about how to use filter in controller in Angular JS. It is common to see filter used in view but apparently I found that in some conditions we need to use filter in controller.

You have to know that in order to inject a filter, you need to use format `yourFilterNameFilter`.

## 1) Built-in Filter

AngularJS has built-in filter named `filter` that can be used to reduce array based on some condition. To use it, we have to inject it as `filterFilter`. Using this filter, you can specify condition by attributes or by text like example below.

**script.js** 
```js
(function(angular) { 
  'use strict'; 
  
  angular
    .module('appModule', [])
    .controller('appController', ['$scope', 'filterFilter', function($scope, filterFilter) { 
      $scope.names = [ 
        {name: 'Tobias', gender: 'm'}, 
        {name: 'Jeff', gender: 'm'}, 
        {name: 'Lisa', gender: 'f'}, 
        {name: 'Diana', gender: 'f'}, 
        {name: 'James', gender: 'm'}, {name: 'Brad', gender: 'm'} 
    ]; 
    
    $scope.filteredNames = filterFilter($scope.names, 'a'); // by text, it will check inside name and gender 
    $scope.filteredNamesByFemale = filterFilter($scope.names, {gender: 'f'}); // by attribute 
  }]); 
})(window.angular); 
```

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>filterFilter - Budi Irawan</title>

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.2/angular.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body ng-app="appModule">
    <div ng-controller="appController">
      <div>
        <strong>All names:</strong>
        <span ng-repeat="entry in names">{{entry.name}} </span>
      </div>
      <div>
        <strong>Names that contain an "a":</strong>
        <span ng-repeat="entry in filteredNames">{{entry.name}} </span>
      </div>
      <div>
        <strong>Names that gender is female:</strong>
        <span ng-repeat="entry in filteredNamesByFemale">{{entry.name}} </span>
      </div>
    </div>
  </body>
</html>
```

The result will be

```text
All names: Tobias Jeff Lisa Diana James Brad
Names that contain an "a": Tobias Lisa Diana James Brad
Names that gender is female: Lisa Diana
```

[Edit in Plunker](http://plnkr.co/edit/52xiJxC1EVxP19M3lJ1d?p=preview)

## 2) Custom Filter

We also can use our own filter to be called inside controller. It is almost same like above by injecting the filter name `yourFilterNameFilter` but I want to show you the alternative way with built-in `$filter`. Let's we create simple filter named `hello`.

**filter.js** 
```js
(function(angular) {

  'use strict';

  angular
    .module('appModule') 
    .filter('hello', function() { 
      return function(input) { return 'hello ' + input; } 
    });
})(window.angular); 
```

Then, in this controller, you can see the example for both of them. The result later will be same. However, I prefer use `$filter` if my controller use more than one filter.

**script.js**
```js
(function(angular) {

  'use strict';

  angular
    .module('appModule', [])
    .controller('appController', ['$scope', '$filter', 'helloFilter', function($scope, $filter, helloFilter) { 
      $scope.name1 = $filter('hello')('budi'); 
      $scope.name2 = helloFilter('sinta'); 
    }]); 
})(window.angular); 
```

**index.html** 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Custom Filter - Budi Irawan</title>

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.2/angular.min.js"></script>
    <script src="script.js"></script>
    <script src="filter.js"></script>
  </head>
  <body ng-app="appModule">
    <div ng-controller="appController">
      <div>
        <strong>{{name1}}</strong><br />
        <strong>{{name2}}</strong>
      </div>
    </div>
  </body>
</html>
```

The result will be
```text
hello budi
hello sinta
```

[Edit in Plunker](http://plnkr.co/edit/XMZl0MPE7frHKiXyPzCi?p=preview)

## Summary

In this article, we learn about how to use filter in controller. AngularJS has a built-in filter named filter and we also can use our own filter in controller.

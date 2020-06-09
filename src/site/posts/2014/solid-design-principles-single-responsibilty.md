---
title: "SOLID Design Principles: Single Responsibilty"
date: 2014-12-06
---

In this post, I would like to share about one of the most well known SOLID Design Principles, **Single Responsibility Principle (SRP)**. It comes from the "S" from SOLID. This principle is the easiest to understand and adhere to.

## Definition

Single Responsibility Principle (SRP) means

> A class should have one and only one reason to change

If you have a class that have more than one reason to change then you against the single responsibility principle.

## Why SRP

Why we have to follow this principle? The answer is our codes **will be more manageable and cleaner.**

Too many responsibilities can cause a problem. Don't believe me? Let me give you an illustration in real life. Which one below will give better result?

1. Programmer A making codes only
2. Programmer B making codes and playing games at same time

I'm sure you already know the answer. The programmer A has more focus on his job (only one responsibility). But the programmer B has two responsibilities at the time. Because of his focus and concentration is shared, programmer A has better result than him.

## Example

Let's go ahead for example. I have this class. This kind of class is very common to see nowadays.

```php

class StudentController
{
  public function __construct()
  {
     $db = new PDO(...);
  }

  public function indexAction()
  {
     $sql = 'select * from students';
     $students = $this->db->query($sql)->fetchAll();

     render('index.html', [students => $students]);
  }
}
```

Can you detect why this class against SRP? Can you see that this class have more than one reason to change? Well, if yes, you are awesome. :)

This class is basically served as a controller. If you are familiar with [MVC framework](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), then you already know what the duty of controller class is. As a controller, this class manages requests and return right response based on the request. Here, our controller class can detect if user request URL `/index` then user will see `index.html` page.

**But wait!** Why this class also has responsibility to get data from database. Hmm, so, this class have two reasons to change:

1. When we want to change response or add new request action. For example, we want to add new request named `showAction()` for URL `/show`
2. When we want to change database query. For example, we want to  join student table with another table.

We can conclude that the class is against SRP.

## Solution

The solution is simple. We need to separate the class into two

1. A class which responsible as controller
2. A class which responsible to get data from database

```php

/**
 * I only responsible for manage requests and responses
 */
class StudentController
{
  public function __construct()
  {
    // our another class
    $studentRepo = new StudentRepository();
  }

  public function indexAction()
  {
     $students = $this->studentRepo->getAll();

     render('index.html', [students => $students]);
  }
}
```

Our controller class now has a new friend `StudentRepository` class. Our controller class doesn't care anymore about where the data come from. The responsibility to get the data from database has been transferred to `StudentRepository`. When someday, we want to change that the data come from a file, then we only need to change `StudentRepository`. Such a clean way.

Here is the `StudentRepository` class

```php

/**
 * I only responsible to get student data
 */
class StudentRepository
{
  public function __construct()
  {
    $db = new PDO(...);
  }

  public function getAll()
  {
     $sql = 'select * from students';
     $students = $this->db->query($sql)->fetchAll();

     return $students;
  }
}
```

Our codes become cleaner and manageable, doesn't it? If we want to add new query, just go to StudentRepository class and if we want to add new request, just go to StudentController class. What such nice codes.

## Conclusion

Single Responsibility Principle is the easiest SOLID Design Principles to understand. Remember that too many responsibilities on a class can cause a problem. You only need to make sure that a class should have one and only one reason to change.

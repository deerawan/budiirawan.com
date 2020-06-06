---
title: "Bind Param of PDO Statement Inside Loop"
date: 2014-08-14
---

I had a case to use bind parameter of PDO statement inside loop. This was code that I used

\[php\] foreach ($this->data as $key => $value) { $st->bindParam(':' . $key, $value); } $st->execute(); \[/php\]

I executed this code and got surprising result, **it didn't work**. Apparently, PDO statement use $value with last looping value. I took a look at PHPDoc for [bindParam()](http://php.net/manual/en/pdostatement.bindparam.php) and found why this could be happened.

> ...The variable is bound as a reference and will only be evaluated at the time that PDOStatement::execute() is called.

`bindParam()` use **reference** not real value. In order to solve this, we can add `&` to `$value`, so it becomes

\[php\] foreach ($this->data as $key => &$value) { // add & $st->bindParam(':' . $key, $value); } $st->execute(); \[/php\]

or alternative solution is using `bindValue()`, then the code become

\[php\] foreach ($this->data as $key => $value) { $st->bindValue(':' . $key, $value); // change to bindValue() } $st->execute(); \[/php\]

Hope it helps :)

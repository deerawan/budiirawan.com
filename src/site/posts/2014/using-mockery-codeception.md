---
title: "Using Mockery on Codeception"
date: 2014-09-28
---

No doubt that Mockery is one of powerful mock tool for unit testing in PHP. In this post, I will share about how to use Mockery on Codeception.

_Note: I assume that you already had Codeception installed and bootstrapped. :)_

## 1) Install Mockery Module

Fortunately, there is already someone who created it, [https://github.com/Codeception/MockeryModule](https://github.com/Codeception/MockeryModule). We can put this module on our `composer.json` file.

\[php\] "codeception/mockery-module": "\*" \[/php\]

and then run `composer update`.

## 2) Prepare Class to Test

I have one prepared class for testing called `src/Husband.php`. Here is the source.

\[php\] <?php

class Husband { public function \_\_construct(Wife $wife) { $this->wife = $wife; }

public function needKiss() { $isFrenchKiss = $this->wife->kiss();

if ($isFrenchKiss) { return 'very happy'; } else { return 'just so so'; } } } \[/php\]

## 3) Create a Test File

We will use codeception command to generate a unit test for Husband class.

\[php\] vendor/bin/codecept generate:test unit Husband \[/php\]

It will generate a test file in `tests/unit/HusbandTest.php`

## 4) Include Autoload from Vendor

Because we install Mockery from composer, we need to tell the Codeception by including composer's vendor folder. Go to `tests/_bootstrap.php` and add this code below

\[php\] require\_once \_\_DIR\_\_ . '/../vendor/autoload.php'; \[/php\]

## 5) Add Mockery Module

Add mockery module on `tests/unit.suite.yml`. So, it will become

\[php\] # Codeception Test Suite Configuration

\# suite for unit (internal) tests. class\_name: UnitTester modules: enabled: \[Asserts, UnitHelper, Mockery\] \[/php\]

## 6) Let's Try to Mock

On `tests/unit/HusbandTest.php`, we will create a test for checking the husband happiness depends on wife's kiss. The final file will be like below.

\[php\] <?php

require\_once \_\_DIR\_\_ . '/../../src/Husband.php'; use Mockery as m;

class HusbandTest extends \\Codeception\\TestCase\\Test { /\*\* \* @var \\UnitTester \*/ protected $tester; public function testNeedKissIsFrenchKiss() { $wife = m::mock('Wife'); $wife->shouldReceive('kiss')->once()->andReturn(true);

$husband = new Husband($wife); $kissResult = $husband->needKiss();

$this->assertEquals('very happy', $kissResult); } } \[/php\]

We include the Husband source file and mockery at top of file

\[php\] require\_once \_\_DIR\_\_ . '/../../src/Husband.php'; use Mockery as m; \[/php\]

then we will create mock of Wife class for method `kiss()`. Let's say we want to test if the kiss is french kiss.

\[php\] $wife = m::mock('Wife'); $wife->shouldReceive('kiss')->once()->andReturn(true); \[/php\]

We inject our wife mock object to the Husband constructor.

\[php\] $husband = new Husband($wife); \[/php\]

Call the `needKiss()` method then assert the result.

## 7) Run the test

Run the test using codeception command

\[php\] vendor/bin/codecept run unit \[/php\]

You should have a successfully test.

## Summary

In this post, we learn to use Mockery on Codeception. First, we install the Mockery module, create source and test file then use Mockery inside test file. Mockery can be integrated easily with Codeception. It will make your unit testing process easier than before.

[Github](https://github.com/deerawan/mockery-codeception)

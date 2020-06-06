---
title: "How to Install IonCube Loader on Mac OSX using Homebrew"
date: 2016-05-23
---

When I want to run an [IonCube](https://www.ioncube.com/php_encoder.php) encrypted project on my osx, I realized that I didn't have IonCube Loader installed. Because my PHP is installed using homebrew, I'm going to do the same way for IonCube Loader.

## Check PHP Version

It is very important step so we'll know which version of IonCube Loader to be installed

```bash
$ php -v
PHP 5.6.14 (cli) (built: Oct 11 2015 07:19:58)
Copyright (c) 1997-2015 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2015 Zend Technologies
```

My PHP version is 5.6 so I'm going to check whether homebrew has IonCube Loader for PHP 5.6

## Check IonCube Loader Availability

```bash
$ brew search ioncube
homebrew/php/php53-ioncubeloader
homebrew/php/php54-ioncubeloader
homebrew/php/php55-ioncubeloader
homebrew/php/php56-ioncubeloader
```

We can see that there is availability for PHP 5.6.

## Install IonCube Loader

```bash
$ brew install homebrew/php/php56-ioncubeloader
```

## Restart Server

Restart server first to reflect the changes

```bash
$ sudo apachectl restart
```

## Check IonCube Loader Installation

We can check if the installation is successful using <code>php -v</code>. We can see that there is an added information about ionCube version.

```bash
$ php -v
PHP 5.6.14 (cli) (built: Oct 11 2015 07:19:58)
Copyright (c) 1997-2015 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2015 Zend Technologies
    with the ionCube PHP Loader v5.0.17, Copyright (c) 2002-2015, by ionCube Ltd.
```

That's all. It is easy, isn't it?

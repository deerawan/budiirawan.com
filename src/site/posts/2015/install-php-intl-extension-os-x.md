---
title: "How to Install PHP intl extension on OS X"
date: 2015-07-08
---

Some PHP libraries that support internationalization depends on PHP intl extension. Somehow, intl extension is not installed by default. This article will show you how to install the intl extension. It has been tested well on OS X Yosemite with PHP 5.5.

## 1) Prerequisite

1. [Homebrew](http://brew.sh/)
2. [PECL](https://pecl.php.net/)
3. Terminal

## 2) Install ICU Libraries via Homebrew

ICU is shorthand for International Component for Unicode. You can check the site [here](http://site.icu-project.org/). We have to install this first.

$ brew update

$ brew install icu4c

## 3) Install Intl Extension via PECL

$ sudo pecl update-channels

$ sudo pecl install intl

You will be prompted in terminal the path where the extension is installed. Mine was

/usr/local/Cellar/php55/5.5.19/lib/php/extensions/no-debug-non-zts-20121212/intl.so

Here is my terminal screenshot after installation done.

\[caption id="attachment\_274" align="alignnone" width="476"\][![Intl extension path in my system](images/intl-extension-path.jpg)](http://budiirawan.com/wp-content/uploads/2015/07/intl-extension-path.jpg) Intl extension path in my system\[/caption\]

**Attention!** You will probably get this error below when install intl

dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.54.dylib
Referenced from: /usr/local/bin/php
Reason: image not found

As solution, you need to execute the following command

$ brew upgrade php55

Then try to install intl again.

## 4) Add Intl Extension to php.ini

Check where your php.ini location is

$ php --ini

Open your php.ini and add the following line at bottom of file with your intl.so extension path (see its path on step 2)

extension=your-intl.so-extension-path

In my system, it was

extension=/usr/local/Cellar/php55/5.5.19/lib/php/extensions/no-debug-non-zts-20121212/intl.so

Save and quit the file

## 5) Restart Apache

After making changes on php.ini file, you need to restart apache.

$ sudo apachectl restart

## 6) Check the installation

There are two ways to check if our intl installation is success. First is using the following command

$ php -m | grep intl

The second way using `phpinfo()`

\[caption id="attachment\_275" align="alignnone" width="731"\][![Check intl in phpinfo](images/phpinfo-intl.jpg)](http://budiirawan.com/wp-content/uploads/2015/07/phpinfo-intl.jpg) Check intl in phpinfo\[/caption\]

## Summary

We are done installing intl extension for PHP. :)

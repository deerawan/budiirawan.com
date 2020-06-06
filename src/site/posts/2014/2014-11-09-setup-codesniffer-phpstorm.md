---
title: "How to Setup CodeSniffer on PHPStorm"
date: 2014-11-09
---

CodeSniffer is a tool to detect coding standard violation for PHP, CSS and Javascript. It is really useful to check if the codes you made violate the coding standard you defined. When you work in a team, this tool can help a lot. Today, I'm going to show how to setup CodeSniffer on PHPStorm.

## Installation

There are two ways to install CodeSniffer, using PEAR or using Composer. I prefer use Composer for this one. You need to execute command below to install CodeSniffer

\[php\] composer global require "squizlabs/php\_codesniffer=\*" \[/php\]

We install CodeSniffer as global command so PHPStorm can always make reference to it. This command will install CodeSniffer in this path `/Users/masbugan/.composer/vendor/bin/phpcs`

## Setup on PHPStorm

Here is how to insert reference for CodeSniffer

1. Go to menu **Preferences**
2. Choose **PHP** -> **Code Sniffer**
3. Insert the CodeSniffer path to the input text and click **Validate**
4. Click **Apply** and you are done

[![phpstorm-codesniffer](images/phpstorm-codesniffer.png)](http://budiirawan.com/wp-content/uploads/2014/11/phpstorm-codesniffer.png)

## Change CodeSniffer Setting

To make CodeSniffer run, you need to set PHPStorm to use it when inspect codes. Here is the step

1. Go to **Preferences**
2. Go to **Inspections** -> **PHP**
3. Check the **PHP Code Sniffer Validation**
4. You can also define coding standard you want there.

[![phpstorm-codesniffer-setting](images/phpstorm-codesniffer-setting-1024x515.png)](http://budiirawan.com/wp-content/uploads/2014/11/phpstorm-codesniffer-setting.png)

## Test CodeSniffer

CodeSniffer can be executed via menu **Code** -> **Inspect Code.** You can choose to inspect whole project or just current file. Then PHPStorm will list the inspection result.

[![phpstorm-codesniffer-inspection](images/phpstorm-codesniffer-inspection.png)](http://budiirawan.com/wp-content/uploads/2014/11/phpstorm-codesniffer-inspection.png)

## Summary

That is it how to setup CodeSniffer on PHPStorm. You will be really helped with this tool to make your codes always match with defined coding standard.

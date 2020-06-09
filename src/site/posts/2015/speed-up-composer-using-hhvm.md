---
title: "Speed up Composer Using HHVM"
date: 2015-10-07
---

I'm one of guy who is not satisfied with composer speed. That's why I'm looking for a viable solution to speed up composer until I found [HHVM](http://hhvm.com/) made by Facebook. It is an open-source virtual machine designed for executing programs written in PHP. HHVM stands for HipHop Virtual Machine.

## Install HHVM on OSX

HHVM can be installed using Homebrew. Please execute commands below in terminal

$ brew tap hhvm/hhvm
$ brew install hhvm

Grab a coffee, the build process really takes time :)

## Install HHVM on Linux (Ubuntu 14.04)

It is great that Facebook provides prebuilt HHVM package.

$ sudo apt-get install software-properties-common
$ sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449
$ sudo add-apt-repository "deb http://dl.hhvm.com/ubuntu $(lsb\_release -sc) main"
$ sudo apt-get update
$ sudo apt-get install hhvm

## Configure Composer with HHVM

You need to know the path of composer you installed by execute command below

$ which composer

Then we can add HHVM to composer command like below

$ hhvm your-composer-path

mine is

$ hhvm /usr/local/bin/composer

To make it simpler for future use, we can create an alias for it.

$ echo "alias composer='hhvm /usr/local/bin/composer'" >> ~/.bashrc

So your ordinary composer command is handled by HHVM.

## Benchmark

To do the benchmark, I created a project with some packages defined. Then I measured the time between pure composer and hhvm+composer. I tested three times of composer install command.

Here is the command that I used for pure composer

time composer install

and for HHVM+composer

time hhvm /usr/local/bin/composer install

`time` is used to measure execution time. And here is the result

#1

composer install 127.35s user 9.33s system 19% cpu 11:59.18 total
hhvm /usr/local/bin/composer install 34.13s user 5.01s system 21% cpu 3:02.24 total

#2

composer install 117.94s user 4.21s system 83% cpu 2:26.25 total
hhvm /usr/local/bin/composer install 37.25s user 4.89s system 79% cpu 53.211 total

#3

composer install 133.23s user 6.00s system 81% cpu 2:49.83 total
hhvm /usr/local/bin/composer install 38.32s user 5.52s system 68% cpu 1:04.25 total

From the result above, we can see that the HHVM can really boost up the composer speed about 26 - 31%.

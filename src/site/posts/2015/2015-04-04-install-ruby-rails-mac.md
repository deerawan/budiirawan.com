---
title: "How to Install Ruby on Rails on Mac"
date: 2015-04-04
---

This tutorial will detail steps you need to follow to install Ruby on Rails on Mac. The main preparation that you must have is your terminal. If you already open your terminal, let's move on.

## 1) Install Xcode

You need to install this first because Xcode provides powerful tools to handle extra commands for installing Ruby. To install Xcode, open your appstore, search "xcode" and click **install**. It will take some time to install Xcode due to its big size.

[![installing-xcode](images/installing-xcode.jpg)](http://budiirawan.com/wp-content/uploads/2015/04/installing-xcode.jpg)

## 2) Install RVM (Ruby Version Manager)

By default, your mac already has Ruby installed, try to execute `ruby -v` in terminal and you will see the version. Unfortunately, it will get you in trouble in future if you need more than one Ruby version. Let's say you have project A that requires Ruby 2.0 and another project B that requires older Ruby 1.9. How can you have two different Ruby version installed in same machine and switch between them? The answer is **RVM**.

Installing RVM is piece of cake, open your terminal and type/copy paste:

gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

\\curl -sSL https://get.rvm.io | bash -s stable

These command will also modified some of your system files. You can read the output of installer to check which files were modified.

## 2) Restart Terminal

Restart terminal and load RVM with this command:

source ~/.rvm/scripts/rvm

To check if rvm is correctly installed. Try to type:

rvm -v

You should see rvm version installed.

## 3) Install Ruby

To check list of all known rubies that you can install, you can type:

rvm list known

Let's say you want to install Ruby 2.1, you must type `rvm install ruby-version` like following:

rvm install 2.1

To use your newly installed Ruby, type:

rvm use 2.1

Later, you can easily switch to another ruby version using this command.

To check if your ruby correctly installed, type:

ruby -v

You should see 2.1

If you restart your terminal, and type `ruby -v`, you will see that your old Ruby is still being referenced. You can make your installed ruby as default for your system by type:

rvm use 2.1 --default

Try to restart your terminal and type `ruby -v` again.

## 4) Install Rails

Installing rails is quite easy, type:

gem install rails

It will take some time, so you may need a coffee :)

To check if your rails is correctly installed, type:

gem list

It will display installed gems. You can see Rails there.

## Conclusion

This tutorial guides you how to install Ruby on Rails on mac using command line. We install Ruby using RVM. My experience tells me that different ruby's project will probably need different ruby version. Using RVM is necessary because it can help you to switch between ruby version easily. After Ruby is installed, installing Rails is easy. Happy Ruby-ing!

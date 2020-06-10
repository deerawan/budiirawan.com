---
title: "Manage Multiple Node.js Version Using NVM"
date: 2014-04-13
category: nodejs
---

Have you ever got a problem when you need to use two Node.js version on same machine? In my past work, I faced the problem when some libraries didn't work in Node.js 0.8.x but works in 0.10.x. So, I need to install more than one Node.js version on my machine. Then I use NVM. :)

[NVM](https://github.com/creationix/nvm) is shorthand for Node Version Manager.  It is used to manage multiple node installation. You can have one, two, six or more than ten Node.js versions and you can switch between them easily.

## Installation

NVM installation is easy for Unix based machine like OSX or Linux and make sure that your system has a **C++ compiler**.  Alright, open up your terminal and copy paste this command

```bash
curl https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh
```

if you DON'T have curl installed yet, you also can use wget

```bash
wget -qO- https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh
```

How about Windows? Just use [Vagrant](http://www.vagrantup.com) for your development. I use Windows and download Vagrant with OS Ubuntu 64.

## Close Your Terminal After Installation

You will get some progress information when installing NVM. But, after it is finished, **close your terminal** and start it again. Try to type

nvm

if it shows nvm command information, then you are ready to go.

I made a mistake forgot to close my terminal. I type "nvm" command and my system says "no nvm command found". So, I close it and start it again to type "nvm" and it worked :)

## Basic NVM Commands

Here are some useful basic nvm commands

nvm install

To install Node.js 0.10.24 you need to type "nvm install 0.10.24"

nvm uninstall

To uninstall specific Node.js version for example "nvm uninstall 0.10.24"

nvm use

To switch Node.js version. If you currently use Node.js 0.8.16 and want to switch to 0.10.24 then you must use this command "nvm use 0.10.24"

nvm ls

To see list of Node.js version you already installed

nvm run

To use specific Node.js version to run your application. For example, your current Node.js version is 0.10.24 but you want test run your app using 0.8.16 then you have to type "nvm run 0.8.16 yourapp.js"

nvm alias default

Set default Node.js version you are gonna use.

## Conclusion

That is short overview about NVM. It is really useful if you want manage multiple Node.js installation on your machine. For more information, check its official [Github](https://github.com/creationix/nvm) page.

---
title: "Angular CLI Introduction"
date: 2020-06-11
category: 'angular'
tags: ['angular']
---

Angular CLI is inseparable from Angular. It contains many useful functions to ease Angular development. 

If you're new to Angular, to install Angular CLI is by using `npm`

```bash
npm install @angular/cli -g
```
By having `-g`, it means that we install the CLI as global command.

Let's check if it is installed correctly

```bash
ng --version
```
You should see the CLI version

# Create new Angular project
Type `ng new` followed by the project name

```bash
ng new yourproject
```
There are some optional parameters that you could see by executing

```bash
ng new --help
```

The first cool parameter for `ng new` command is `--dry-run`

```bash
ng new yourproject --dry-run
```

It allows us to run through the command without changing anything. It is useful if you want to see what the command will do. 
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

By having `-g`, it means that we install the CLI as global package. 

Let's check if it is installed correctly. Open your terminal and type below:

```bash
ng --version
```

You should see the CLI version. 

## Create new Angular project

Type `ng new` followed by the project name. 

```bash
ng new yourproject
```

You will see bunch of files are created by the command and also it will install
some dependency packages. 

Well, there are some optional parameters of `ng new` that you could see by executing

```bash
ng new --help
```

The first cool parameter for `ng new` command is `--dry-run`

```bash
ng new anotherproject --dry-run
```

This parameter allows us to run through the command without changing anything. 
It is useful if you want to see what the command will do. 

The second one is `--skip-install`

```bash
ng new anotherproject --skip-install
```

This parameter allows us to create a new Angular project without needs to install
its dependency packages. It's a good choice if you want to add more packages before installing them.

## Run the app

Once you execute `ng new`, the next step is to run the app

```bash
npm start
```

Behind the scene, this command will execute `ng serve`. 
It will start compiling the files and it will give you the URL to open startup page [http://localhost:4200](http://localhost:4200)

[![angular localhost 4200](/images/2020/angular-localhost-4200.jpg)](/images/2020/angular-localhost-4200.jpg "Angular startup page")




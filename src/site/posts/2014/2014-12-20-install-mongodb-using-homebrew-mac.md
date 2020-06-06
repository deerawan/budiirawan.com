---
title: "How Install MongoDB Using Homebrew on Mac"
date: 2014-12-20
---

This article will guide you how to install MongoDB using homebrew on mac. The steps are very simple by using your terminal. Let's start :)

## Update homebrew database package

Make sure you have updated homebrew to latests database package by executing this command

brew update

## Install MongoDB

brew install mongodb

## Create Data Directory

MongoDB has daemon process called `mongod`. This process need to write its data to a directory. By default, `mongod` process uses **/data/db** directory. So, we are going to create it.

sudo mkdir -p /data/db

## Set Directory Permission

Make sure **/data/db** directory can be accessed by current user

sudo chown -R $USER:$GROUP /data/db

## Run Mongod Process

Before using mongodb, we need to run `mongod` process first. You always need to run it everytime you want to access mongoDB.

mongod

## Run MongoDB Shell

Okay, here is the last command you need to execute to explore database, collection and documents in mongoDB.

mongo

Done!

From here, you can start learning mongodb on its [official website](http://docs.mongodb.org/manual/tutorial/getting-started/).

## Debugging

If you see error "**Cannot connect to mongodb errno:61 Connection refused**", it means that you haven't started `mongod` daemon process yet.

## Conclusion

This article describes how to install mongoDB using homebrew on mac. The installation process is very simple and can be done within minutes.

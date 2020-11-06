---
title: 'npm install vs npm ci'
date: 2020-11-07
category: 'npm'
tags: ['npm', 'javascript']
---

`npm ci` is a new npm command introduced in npm 6. Let's see how this command is different with `npm install`

# NPM CI

`npm ci` characteristics:

- **Faster** than `npm install` 🐇
- If `node_modules` present, it will be **deleted** to ensure clean state 💪🏼
- It can't be used to install new dependency or update existing dependency
- It will use `package-lock.json` to install all dependencies
- It **never modifies** `package.json` or `package-lock.json` file
- It will throw error if version in `package.json` do not match with `package-lock.json`
- Suitable for automated environment such as continuous integration

`npm ci` will always delete node modules
[![npm ci delete node module](/images/2020/npm-ci-delete-node-module.jpg)](/images/2020/npm-ci-delete-node-module.jpg "npm ci delete node module")

`npm ci` will throw error if version is different in `package.json` vs `package-lock.json`
[![npm ci different package version](/images/2020/npm-ci-error-diff-version.jpg)](/images/2020/npm-ci-error-diff-version.jpg "npm ci different package version")

# NPM Install

`npm install` characteristics:

- To install a new dependency or update existing dependency
- It could modify `package-lock.json` when you install a new dependency or update existing one
- It could install different version vs the one that you specify in `package.json` if you use `^` or `~` 😓

For example, the version in `package.json` is `~4.17.0`, but after running `npm install`, in `package-lock.json`, it will use `4.17.20` (the latest patch version)


[![npm install different version](/images/2020/npminstall-diff-dep.jpg)](/images/2020/npminstall-diff-dep.jpg "npm install different version")

# Conclusion

Use `npm ci` for automated environment such as CI/CD while `npm install` to install a new dependency or update dependencies. 
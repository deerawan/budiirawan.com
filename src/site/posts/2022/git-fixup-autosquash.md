---
title: "GIT fixup and autosquash"
date: 2022-05-18
category: 'git'
tags: ['git']
---

In order to fix a specific commit, Git has a fixup command

```bash
git commit --fixup <target>

# sample
git commit --fixup HEAD
git commit --fixup 13fcd
```

This command will produce a new commit by modifying the targeted commit message with
`fixup!` prefix. Basically, it tells that this fixup commit purpose is to fix the targeted commit.

So, what's the advantage having this commit?

1. Easier track during code review. The reviewer can relate the original commit and commit that fix the problem from original commit.
2. Simpler rebasing because Git can automatically rebase the fixup commits by using `--autosquash` option to `git rebase`. It's useful if you want to clean up the commit history.

## Example

```bash
$ git log
commit A
initial
```

After make some changes, then commit using `--fixup`. Specifying HEAD will fix the previous commit which is a `commit A` as seen below.

```bash
git commit -a --fixup HEAD
```

Below you could see the fixup commit of `commit A`

```bash
$ git log
46e37 fixup! commit A
733cc commit A
b4467 initial
```

Let's rebase them

```bash
$ git rebase -i --autosquash HEAD~2
fixup 46e37 fixup! commit A
pick 733cc commit A
```

Git automatically sets the fixup commit to have `fixup` resolution. Perform the rebase.

Let's see the final result

```bash
$ git log
00ec3 commit A
b4467 initial
```

## Enable autosquash by default

To avoid typing `--autosquash` on every rebase, we could enable this option by default:

```bash
git config --global rebase.autosquash true
```

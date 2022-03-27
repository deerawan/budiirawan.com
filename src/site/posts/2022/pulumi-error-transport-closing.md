---
title: "Pulumi: error transport is closing"
date: 2022-03-28
category: 'pulumi'
tags: ['pulumi']
---

I recently got this error in Pulumi when executing `pulumi up`. This happened after upgrading to the newer version, from `3.26.0` to `3.27.0`

```bash
aws:lambda:Permission:
    error: connection error: desc = "transport: Error while dialing dial tcp 127.0.0.1:52118: connect: connection refused"

aws:lambda:Function:
  error: connection error: desc = "transport: Error while dialing dial tcp 127.0.0.1:52118: connect: connection refused"

aws:lambda:Function:
  error: transport is closing

pulumi:pulumi:Stack:
  panic: interface conversion: interface {} is []interface {}, not *schema.Set
  goroutine 229 [running]:
  github.com/terraform-providers/terraform-provider-aws/aws.resourceAwsLambdaFunctionUpdate(0xc002279280, 0x7955220, 0xc001b44c00, 0x0, 0x0)
      /home/runner/go/pkg/mod/github.com/pulumi/terraform-provider-aws@v1.38.1-0.20211004122636-8966d24576a0/aws/resource_aws_lambda_function.go:1199 +0x522d
```

See the screenshot below from my terminal

[![pulumi error transport is closing](/images/2022/pulumi-error-transport-closing.jpg)](/images/2022/pulumi-error-transport-closing.jpg)

## Investigation

The noticeable error from above was regarding this message

```bash
panic: interface conversion: interface {} is []interface {}, not *schema.Set
  goroutine 229 [running]:
  ...
```

I was wondering why that happens 🤔 . It was definitely related to golang (it mentioned `goroutine`). I tried these solutions below but it didn't solve the problem:

- Reinstalled golang via homebrew ❌
- Reinstalled pulumi via homebrew ❌
- Restarted the computers ❌

## Solution

Then I noticed that maybe the `@pulumi/pulumi` packages also need to be upgraded.

These below were the previous versions. See that `@pulumi/pulumi` version `3.13.2` was slightly behind the pulumi CLI version `3.27.0`

`package.json`

```ts
"@pulumi/aws": "4.23.0",
"@pulumi/awsx": "0.33.0",
"@pulumi/pulumi": "3.13.2",
```

I uninstalled all of them.

```bash
npm uninstall @pulumi/aws
npm uninstall @pulumi/awsx
npm uninstall @pulumi/pulumi
```


Then I installed the new ones (I specified them as `devDependencies`)

```ts
npm install -D @pulumi/aws
npm install -D @pulumi/awsx
npm install -D @pulumi/pulumi
```

I got these versions

`package.json`

```ts
"@pulumi/aws": "^5.1.0",
"@pulumi/awsx": "^0.40.0",
"@pulumi/pulumi": "^3.27.0"
```

Now it works again 🎉 🥳

---
title: "How to Configure Postfix to Mandrill SMTP on Mac OSX"
date: 2015-08-16
category: macOS
---

In my previous [post](http://budiirawan.com/install-mail-server-mac-osx/ "How to Install Mail Server on Mac OSX"), I talked about how to install postfix mail server on mac OSX. At that time, I used Gmail SMTP for sending the emails. This article will show you how to configure [Mandrill](http://mandrillapp.com) SMTP for postfix.

## Prerequisites

1. You already have postfix installed and configured like in this [post](http://budiirawan.com/install-mail-server-mac-osx/ "How to Install Mail Server on Mac OSX").
2. You have Mandrill account and created the Mandrill SMTP credentials.

## Ensure the Hostname is FQDN

I think this is important for Mandrill app to work. You need your hostname has [FQDN](https://kb.iu.edu/d/aiuv) format. Try to type

```bash
$ hostname -f
```

It must be like this `domain.tld`. FYI, mine is `Budis-MacBook-Air.local`. I thought It wouldn't work using .local but Mandrill still accepts it.

## Change Postfix Credentials

Go to terminal and type

```bash
$ sudo vim /etc/postfix/sasl_passwd
```

Change the `username` and `api key` with yours.

```bash
[smtp.mandrillapp.com]:587 your_mandrill_username:your_mandrill_api_key
```

Anytime you change the credentials, you need to run `postmap`

```shell
$ sudo postmap /etc/postfix/sasl_passwd
```

## Change Postfix Setting

The settings will be quite different. Type below to open postfix setting file.

```bash
$ sudo vi /etc/postfix/main.cf
```

And make some changes like following.

```text
relayhost= [smtp.mandrillapp.com]:587
smtp_sasl_auth_enable=yes
smtp_sasl_password_maps=hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options= noanonymous
smtp_use_tls=yes
```

Save and then don't forget to reload postfix

```bash
$ sudo postfix reload
```

## Testing

Here is the command you need to execute to test postfix. Please change `your_email` and `your_domain` with yours.

```bash
$ echo "Test sending email from Postfix Mandrill" | mail -s "Test Postfix Mandrill" your\_email@your\_domain.com
```

If success, you will receive test email in your inbox.

[![test-postfix-mandrill](/images/2015/test-postfix-mandrill.jpg)](/images/2015/test-postfix-mandrill.jpg)

## Conclusion

In article, we use Mandrill SMTP for Postfix. The configuration is not much difference with Gmail SMTP but Mandril offers more email that can be sent every month than Gmail.

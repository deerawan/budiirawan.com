---
title: "How to Configure Postfix to Mandrill SMTP on Mac OSX"
date: 2015-08-16
---

In my previous [post](http://budiirawan.com/install-mail-server-mac-osx/ "How to Install Mail Server on Mac OSX"), I talked about how to install postfix mail server on mac OSX. At that time, I used Gmail SMTP for sending the emails. This article will show you how to configure [Mandrill](http://mandrillapp.com) SMTP for postfix.

## Prerequisites

1. You already have postfix installed and configured like in this [post](http://budiirawan.com/install-mail-server-mac-osx/ "How to Install Mail Server on Mac OSX").
2. You have Mandrill account and created the Mandrill SMTP credentials.

## Ensure the Hostname is FQDN

I think this is important for Mandrill app to work. You need your hostname has [FQDN](https://kb.iu.edu/d/aiuv) format. Try to type

$ hostname -f

It must be like this `domain.tld`. FYI, mine is `Budis-MacBook-Air.local`. I thought It wouldn't work using .local but Mandrill still accepts it.

## Change Postfix Credentials

Go to terminal and type

$ sudo vim /etc/postfix/sasl\_passwd

Change the `username` and `api key` with yours.

\[smtp.mandrillapp.com\]:587 your\_mandrill\_username:your\_mandrill\_api\_key

Anytime you change the credentials, you need to run `postmap`

$ sudo postmap /etc/postfix/sasl\_passwd

## Change Postfix Setting

The settings will be quite different. Type below to open postfix setting file.

$ sudo vi /etc/postfix/main.cf

And make some changes like following.

relayhost= \[smtp.mandrillapp.com\]:587
smtp\_sasl\_auth\_enable=yes
smtp\_sasl\_password\_maps=hash:/etc/postfix/sasl\_passwd
smtp\_sasl\_security\_options= noanonymous
smtp\_use\_tls=yes

Save and then don't forget to reload postfix

$ sudo postfix reload

## Testing

Here is the command you need to execute to test postfix. Please change `your_email` and `your_domain` with yours.

$ echo "Test sending email from Postfix Mandrill" | mail -s "Test Postfix Mandrill" your\_email@your\_domain.com

If success, you will receive test email in your inbox.

[![test-postfix-mandrill](images/test-postfix-mandrill-1024x203.jpg)](http://budiirawan.com/wp-content/uploads/2015/08/test-postfix-mandrill.jpg)

## Conclusion

In article, we use Mandrill SMTP for Postfix. The configuration is not much difference with Gmail SMTP but Mandril offers more email that can be sent every month than Gmail.

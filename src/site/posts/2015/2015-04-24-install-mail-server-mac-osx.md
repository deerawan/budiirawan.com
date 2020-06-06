---
title: "How to Install Mail Server on Mac OSX"
date: 2015-04-24
---

In this post, I would like to share how to install mail server on Mac OSX. Having mail server is important if you need to send email from your web application in local environment. To do this, we will use **Postfix**.

Postfix is a Mail Transport Agent (MTA), supporting LDAP, SMTP AUTH (SASL) and TLS. In this post, We will setup Postfix to run with SMTP.

## Setup

\- Mac OSX (I'm using OSX Yosemite 10.10.3). - Terminal

## Postfix Installation

No need it because Postfix already exist as pre-installed on Mac OSX. Open your terminal, make sure you can see response if you type below:

$ postfix
postfix: error: to submit mail, use the Postfix sendmail command
postfix: fatal: the postfix command is reserved for the superuser

Great, then we are going to configure it to be able for sending email.

## Postfix Configuration

We are going to change postfix configuration file. Run this command below:

$ sudo vi /etc/postfix/main.cf

Make sure if these lines below are exist

mail\_owner = \_postfix
setgid\_group = \_postdrop

Then, add these lines at the end of file

\# Use Gmail SMTP
relayhost = smtp.gmail.com:587
smtp\_sasl\_mechanism\_filter = plain
smtp\_sasl\_auth\_enable = yes
smtp\_sasl\_password\_maps = hash:/etc/postfix/sasl\_passwd
smtp\_use\_tls = yes
smtp\_tls\_security\_level = encrypt
tls\_random\_source = dev:/dev/urandom

From codes above, you can see that we use Gmail SMTP for our postfix. Next step is add our gmail's username and password.

$ sudo vim /etc/postfix/sasl\_passwd

and add this line

smtp.gmail.com:587 your\_username@gmail.com:your\_password

Then run command below to create the hash db file for Postfix.

$ sudo postmap /etc/postfix/sasl\_passwd

Configure the postfix daemon

$ sudo vi /System/Library/LaunchDaemons/org.postfix.master.plist

Add these lines before `</dict>`

<key>RunAtLoad</key>
<true/>
<key>KeepAlive</key>
<true/>

Start the postfix service

$ sudo postfix start

_\* Note that if you make changes in postfix configuration file (`/etc/postfix/main.cf`), you have to run command_

$ sudo postfix reload

## Testing

Here is the command you need to execute to test postfix.

$ echo "Test sending email from Postfix" | mail -s "Test Postfix" youremail@domain.com

If success, you will receive email in your inbox.

[![postfix-testing-email](images/postfix-testing-email-1024x250.jpg)](http://budiirawan.com/wp-content/uploads/2015/04/postfix-testing-email.jpg)

If you want to see mail queues, execute this command

$ mailq

If you want to see mail log, execute this command

$ tail -f /var/log/mail.log

## Conclusion

Setting up mail server on Mac OSX can be done using pre-installed Postfix. Having mail server in local environment will give you advantage for your web application that have sending email feature.

---
title: "Send Emails using Amazon SES and Node.js"
date: 2015-09-02
---

[Amazon SES (Simple Email Service)](https://aws.amazon.com/documentation/ses/) is a solution that Amazon provides for sending emails. This service encourages you to pay Amazon what you use, so you can use as much or as little email you like. The coding example below shows how to configure Amazon SES in Node.js.

[Check Github](https://github.com/deerawan/node-amazon-ses-example)

## Prerequisites

- Node.js installed
- Amazon key and secret key. Refer to [how to get Amazon key and secret key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html).
- Verified email address in Amazon SES. Refer to [how to get valid email address](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html)
- Your existing node.js project. If not exist, you can create new node.js project

## Install Node Mailer

Node Mailer is one of my favorite library to send email. Fortunately, It supports Amazon SES. Yeay!

$ npm install nodemailer

To use Amazon SES, we need one more step to install Node Mailer SES transport.

$ npm install nodemailer-ses-transport

## Setup Node Mailer

Add require node mailer lines in your file.

var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');

Then we must add SES transport in nodemailer then add our Amazon key and secret key.

var transporter = nodemailer.createTransport(ses({
    accessKeyId: 'YOUR\_AMAZON\_KEY',
    secretAccessKey: 'YOUR\_AMAZON\_SECRET\_KEY'
}));

## Send Simple Email

We almost finish. Next step is we can use our created transporter to send email.

\[js\] transporter.sendMail({ from: 'noreply@youremail.com', to: 'destination@gmail.com', subject: 'My Amazon SES Simple Email', text: 'Amazon SES is cool' }); \[/js\]

Please remember that you need to setup valid email address for `from`. If not, Amazon SES will not recognize the sender.

\[caption id="attachment\_325" align="alignnone" width="720"\][![amazon-ses-simple-email](images/amazon-ses-simple-email-1024x206.jpg)](http://budiirawan.com/wp-content/uploads/2015/09/amazon-ses-simple-email.jpg) Result of sending simple email\[/caption\]

 

## Send Email with CC and BCC

\[js\] transporter.sendMail({ from: 'noreply@youremail.com', to: 'destination@gmail.com', subject: 'My Amazon SES Email with CC and BCC', text: 'Amazon SES CC and BCC is cool', cc: 'superganteng@yopmail.com, supertampan@yopmail.com', bcc: 'rampok@yopmail.com' }); \[/js\]

To configure multiple cc/bcc email addresses, the emails are separated by comma e.g **'email@domain.com, email2@haha.com'**.

\[caption id="attachment\_324" align="alignnone" width="720"\][![amazon-ses-cc-bcc](images/amazon-ses-cc-bcc-1024x134.jpg)](http://budiirawan.com/wp-content/uploads/2015/09/amazon-ses-cc-bcc.jpg) Result of sending email with cc and bcc\[/caption\]

 

## Send Email with Attachment

You can also use Amazon SES for sending attachment.

\[js\] transporter.sendMail({ from: 'noreply@youremail.com', to: 'destination@gmail.com', subject: 'My Amazon SES Email with Attachment', text: 'Amazon SES Attachment is cool', attachments: \[ { filename: 'My Cool Document', path: 'https://path/to/cool-document.docx', contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' } \] }); \[/js\]

For attachment, you should ensure that the attachment `path` can be accessed publicly. You also need to put the correct `contentType`. Please refer to [Mime Type List](http://www.freeformatter.com/mime-types-list.html) for complete reference.

\[caption id="attachment\_323" align="alignnone" width="720"\][![amazon-ses-attachment](images/amazon-ses-attachment-1024x143.jpg)](http://budiirawan.com/wp-content/uploads/2015/09/amazon-ses-attachment.jpg) Result of sending email with attachment\[/caption\]

## Conclusion

In this article, we have setup Amazon SES with Node.js for sending emails. We use nodemailer package that supports Amazon SES. Amazon SES can send email using cc, bcc and even attachment.

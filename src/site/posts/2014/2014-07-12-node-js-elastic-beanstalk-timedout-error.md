---
title: "Node.js Elastic Beanstalk TIMEDOUT Error"
date: 2014-07-12
---

I got an error when deploying my Node.js app into [AWS Elastic Beanstalk (EB)](https://aws.amazon.com/elasticbeanstalk/). The error said

Error: connect ETIMEDOUT
    at errnoException (net.js:901:11)
    at Object.afterConnect \[as oncomplete\] (net.js:892:19)
    --------------------
    at Protocol.\_enqueue (/var/app/current/node\_modules/mysql/lib/protocol/Protocol.js:110:26)
    at Protocol.handshake (/var/app/current/node\_modules/mysql/lib/protocol/Protocol.js:42:41)

My Node.js app using [node-mysql](https://github.com/felixge/node-mysql) module to access database. You can see "mysql" in the error statement. Seeing from errors, this must be related with database. I use Amazon Relational Database Service (RDS) and my node.js app is configured to connect with it.

After exploring this error, I know why it is occurred. It is caused by **security group of my EB instance which is not allowed to connect to DB instance in RDS**. To overcome this problem, follow these steps:

1) Go to app in Elastic Beanstalk 2) Choose the environment 3) Choose configuration then choose instance 4) Check its EC2 security groups

\[caption id="attachment\_32" align="alignnone" width="918"\][![eb-ec2-security-groups](images/eb-ec2-security-groups.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/eb-ec2-security-groups.jpg) EC2 Security Groups\[/caption\]

5) Go to RDS menu

\[caption id="attachment\_33" align="alignnone" width="635"\][![RDS menu](images/aws-rds-menu.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/aws-rds-menu.jpg) RDS menu\[/caption\]

6) Choose DB Instance

7) Add the security group you found at step 4 to DB Instance

\[caption id="attachment\_34" align="alignnone" width="1099"\][![Add security group to db instance](images/aws-rds-add-security-group.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/aws-rds-add-security-group.jpg) Add security group to db instance\[/caption\]

8) Click Authorize

9) Finish

I can conclude that **everytime you create new EB instance you need to add its security group to DB instance in RDS** so your Node.js app can connect to it. Hope this article helps you.

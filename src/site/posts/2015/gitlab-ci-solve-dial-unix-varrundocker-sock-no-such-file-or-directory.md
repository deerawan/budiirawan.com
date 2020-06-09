---
title: "Gitlab CI: Solve dial unix /var/run/docker.sock: no such file or directory"
date: 2015-09-10
---

It was my first time to try Gitlab CI with docker runner configuration. The problem occurred when I tried to build an web application. I finally found the solution for it.

The error message was shown below.

[![gitlab-ci-docker-problem](images/gitlab-ci-docker-problem.jpg)](http://budiirawan.com/wp-content/uploads/2015/09/gitlab-ci-docker-problem.jpg)

I separated the gitlab CI installation with gitlab runner in different server. Let's say server A where gitlab CI is installed and server B where gitlab runner is installed and configured.

[![server-A-server-B](images/server-A-server-B.png)](http://budiirawan.com/wp-content/uploads/2015/09/server-A-server-B.png)

I thought the problem was caused because I hadn't installed docker on Server A. I installed docker on that server but the same problem kept occurring.

Then I had an idea to **install docker as well in server B and voila it works**. This was the solution!

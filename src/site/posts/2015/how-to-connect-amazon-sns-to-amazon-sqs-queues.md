---
title: "How to Connect Amazon SNS to Amazon SQS Queues"
date: 2015-08-07
category: aws
---

In this article, I want to share how to make SNS and SQS get along. Before we move further, we have a main question. What is the difference between SNS and SQS? I took the description from Amazon documentation below.

## Amazon SNS

> **Amazon SNS** allows applications to send time-critical messages to multiple subscribers through a “push” mechanism, eliminating the need to periodically check or “poll” for updates.

Here is the diagram to show how SNS works

[![sns-architecture](/images/2015/sns-architecture.png)](/images/2015/sns-architecture.png "SNS Diagram. Source: Amazon documentation")

SNS has topic which publisher can send message to. Then all subscribers that subscribe to that topic can get the messages immediately. The subscribers can be mobile apps because SNS supports mobile messaging platform e.g. GCM, APNS. In addition, it can be other things like SQS, HTTP/S url, email, lambda function or SMS.

## Amazon SQS

> **Amazon SQS** is a message queue service used by distributed applications to exchange messages through a polling model, and can be used to decouple sending and receiving components—without requiring each component to be concurrently available.

Here is a diagram to show how SQS works. It just simple implementation.

[![Simple SQS Diagram](/images/2015/sqs-diagram.jpg)](/images/2015/sqs-diagram.jpg "Simple SQS Diagram")

Sending email is one of implementation which SQS can be used. We can create a worker as consumer that receive messages from queue and then send the email. Another usage such as video encoding and thumbnail generator.

As summary, the main differences are:

1. SNS use push mechanism and SQS use polling mechanism.
2. SNS message can push messages to mobile devices or other subscribers directly. SQS need a worker to polling the messages.
3. SNS can't persist the message but SQS can. By using SQS, you don't need to worry to lose the message when the consumers can't be reached due to network problem.
4. SNS terms are topic, publisher and subscriber. SQS terms are queue, producer and consumer.

By combining SNS and SQS together, you can deliver immediate and persisted message to applications. Very powerful!

Let's we move further how to connect them together.

## Create SNS Topic

We have to create a topic first.

1. Go to **AWS Services** menu at top
2. Choose **SNS**
    
    [![sns-menu](/images/2015/sns-menu.jpg)](/images/2015/sns-menu.jpg "Choose SNS menu")

3. Choose **Topics** and click **Create New Topic**
4. Input **Topic name** and topic **Display name**. Topic **Display name** is optional, it is used for SMS.
    
    [![sns-create-topic-testing](/images/2015/sns-create-topic-testing.jpg)](/images/2015/sns-create-topic-testing.jpg "Create new topic")

5. If correct, you will get your topic in topic table including the **ARN link** (the link that starts with "arn:....."). Please note this link because it is important for next step.

## Create SQS Queue

1. Go to **AWS Services** menu at top
2. Choose **SQS**
3. Click **Create new queue.** It will display a dialog.
4. Just type queue name and click **Create queue**
    
    [![sqs-create-new-queue](/images/2015/sqs-create-new-queue.jpg)](/images/2015/sqs-create-new-queue.jpg "Create new queue")

5. If correct, you will your queue in the list. This queue has ARN when you see in **Detail** tab at bottom.

## Configure SQS Queue Permission

This step is very important to allow SNS to connect to SQS.

1. Click the queue name checkbox
2. At the bottom, click **Permission** tab and click **Add a Permission**
    
    [![SQS-add-permission](/images/2015/SQS-add-permission.jpg)](/images/2015/SQS-add-permission.jpg "Add permission button")

3. In **Principal**, click **Everybody(\*)**
4. In **Actions**, just choose **Send Message**. We don't need other SQS Actions beside this.
    
    [![sqs-add-permission-to-queue](/images/2015/sqs-add-permission-to-queue.jpg)](/images/2015/sqs-add-permission-to-queue.jpg "Add permission dialog")

5. Click **Add Conditions** then you'll see condition form.
6. Choose **Condition** to **ArnEquals**
7. Choose **Key** to **aws:SourceArn**
8. In **Value**, copy paste SNS ARN here.
    
    [![sqs-add-permission-with-conditional](/images/2015/sqs-add-permission-with-conditional.jpg)](/images/2015/sqs-add-permission-with-conditional.jpg "Specify conditions")
9. Click **Add Condition**
10. Then click **Add Permission**

## Create a SQS Subscriber

We need to go back to SNS page.

1. Go to **AWS Services** menu at top
2. Choose **SNS**
3. Click **Subscriptions** in left menu
4. Create **Subscription**
5. Input your **Topic ARN**
6. In **Protocol**, choose **Amazon SQS**
7. in **Endpoint**, copy paste SQS queue ARN. (you need go back to SQS page to get this information) [![sns-create-subscription](/images/2015/sns-create-subscription.jpg)](/images/2015/sns-create-subscription.jpg)
8. If success, you will see it in subscription list.

## Testing

Let's we test our setup by publishing a message to topic that we created. As result, the message is supposed to be delivered to our queue.

1. in SNS page, click **Topic** in left menu
2. Select the checkbox in topic name
3. Click **Publish to Topic**
    
    [![sns-publish-topic](/images/2015/sns-publish-topic.jpg)](/images/2015/sns-publish-topic.jpg "Publish topic")
4. Insert **Subject** and **Message**
5. Click **Publish Message**

Let's go to SQS page, if success, you will see a new created message in the queue. To see the message, follow steps below:

1. Click the queue checkbox
2. Choose **Queue Actions** to **View/Delete Messages**
    
    [![sqs-view-message](/images/2015/sqs-view-message.jpg)](/images/2015/sqs-view-message.jpg "View/Delete Queue Messages")
3. Click **Start Polling** for Messages
4. You will see the message there. Click **More Details** to see it as full message.

## Summary

This article describes how to connect SNS and SQS together. By code implementation, you need AWS SDK to publish message to SNS and retrieve the message from SQS.

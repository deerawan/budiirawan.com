---
title: "iOS: How to Play Sound in Swift"
date: 2015-06-03
---

Playing sound in your iOS app is essential because it can add better user experience. This article will guide you how to play sound in Swift. In this case, we will use a class [AVAudioPlayer](https://developer.apple.com/library/ios/documentation/AVFoundation/Reference/AVAudioPlayerClassReference/) from AVFoundation package. This class provides playback of audio data from a file or memory.

## Preparation

- XCode (mine is 6.3.2)
- Your iOS Project

I assume that you already know where to put the action to play sound. In my example, I have a button in view and a method in my view controller class. If I click this button, the sound is played.

## 1\. Add Audio File to Project

Pick audio file that you want to play. I chose an example using my mp3 music. **Right click** in your project in Navigation and choose **Add Files to...**

\[caption id="attachment\_241" align="alignnone" width="422"\][![add sound file to project](images/add-sound-file-to-project.jpg)](http://budiirawan.com/wp-content/uploads/2015/06/add-sound-file-to-project.jpg) Add sound file to project\[/caption\]

Next step for better file management, let's drag this file into **Supporting Files** folder.

[![move-to-supporting-files-folder](images/move-to-supporting-files-folder.jpg)](http://budiirawan.com/wp-content/uploads/2015/06/move-to-supporting-files-folder.jpg)

## 2\. Import AVFoundation

Before we can use AVAudioPlayer, we must import its package first in your view controller class.

\[javascript\] import AVFoundation \[/javascript\]

After we import, we can define global variable for it

\[javascript\] var audioPlayer:AVAudioPlayer! \[/javascript\]

## 3\. Create instance of AVAudioPlayer

We will create an instance of AVAudioPlayer. This class has a constructor that has parameter NSURL. This NSURL must refer to your audio file. We also can add a validation to check if the file exist or not

\[javascript\] var audioFilePath = NSBundle.mainBundle().pathForResource("music", ofType: "mp3") if audioFilePath != nil {

var audioFileUrl = NSURL.fileURLWithPath(audioFilePath!) audioPlayer = AVAudioPlayer(contentsOfURL: audioFileUrl, error: nil) audioPlayer.play()

} else { println("audio file is not found") }

\[/javascript\]

Here is my full view controller class

\[javascript\] import UIKit import AVFoundation

class ViewController: UIViewController { var audioPlayer:AVAudioPlayer!

override func viewDidLoad() { super.viewDidLoad() // Do any additional setup after loading the view, typically from a nib. }

override func didReceiveMemoryWarning() { super.didReceiveMemoryWarning() // Dispose of any resources that can be recreated. }

@IBAction func playSound(sender: UIButton) { var audioFilePath = NSBundle.mainBundle().pathForResource("music", ofType: "mp3") if audioFilePath != nil { var audioFileUrl = NSURL.fileURLWithPath(audioFilePath!) audioPlayer = AVAudioPlayer(contentsOfURL: audioFileUrl, error: nil) audioPlayer.play()

} else { println("audio file is not found") } } } \[/javascript\]

## Summary

Playing sound in iOS development using Swift can be handled by AVAudioPlayer class. It contains useful function that is probably useful for your next iOS project.

[Github](https://github.com/deerawan/playsoundios)

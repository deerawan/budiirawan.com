---
title: "Solution to Error 60 SSL Certificate Problem Verify That the CA Cert is OK"
date: 2014-08-04
---

I got this SSL error when I want to use a PHP library to access AWS SES. The complete error said

60 SSL certificate problem, verify that the CA cert is OK. Details:
error:14090086:SSL routines:SSL3\_GET\_SERVER\_CERTIFICATE:certificate verify failed

I found that it is related to curl setting in php.ini. It needs to know what certificate you use for curl. Because I haven't define the certificate yet, so this error came up.

## First Solution

1. Download certificate file from [http://curl.haxx.se/ca/cacert.pem](http://curl.haxx.se/ca/cacert.pem)
2. Open your php.ini and add these line below. Make sure the certificate's path is correct.
    
    ;;;;;;;;;;;;;;;;;;;
    ; CURL Options    ;
    ;;;;;;;;;;;;;;;;;;;
    
    curl.cainfo=\\your-path-to\\cacert.pem
    
3. Restart your server

## Second Solution

If you can't access and modify php.ini, you need to add this line before `curl_exec()`

curl\_setopt ($ch, CURLOPT\_CAINFO, "YOUR\_PATH\_TO/cacert.pem");

Don't forget to download certificate first from [http://curl.haxx.se/ca/cacert.pem](http://curl.haxx.se/ca/cacert.pem)

## Third Solution

**This method is not recommended due to security issues**. Just need to add the line before `curl_exec()`

curl\_setopt($ch, CURLOPT\_SSL\_VERIFYPEER, false);

Hope it helps.

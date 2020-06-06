---
title: "Yii2 Error: cookieValidationKey Must be Configured With a Secret Key"
date: 2014-07-22
---

After I ran composer update to get new Yii2 framework version, I got this error

yii\\web\\Request::cookieValidationKey must be configured with a secret key

To overcome this error, I added this code below in `config/main.php`

'components' => \[
        'request' => \[
            'enableCookieValidation' => true,
            'cookieValidationKey' => 'your-validation-key',
        \],
......

Hope it helps.

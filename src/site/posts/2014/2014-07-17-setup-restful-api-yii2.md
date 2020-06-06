---
title: "Setup RESTful API in Yii2"
date: 2014-07-17
---

In this article, I will show you how to setup RESTful API in Yii2 framework. It is a little bit tricky because Yii2 is still in beta release (when this article is written) so the documentation is not complete enough. But don't worry, this article will give you insight how to setup API in Yii2.

## Install Yii2 Application

Our first step of course is to install Yii2 application. I will use Yii2 advanced template. Anyway, you need to install Composer first. You may install it by following the instructions at [getcomposer.org](http://getcomposer.org) After you install it, go to your `htdocs` or `www` folder. Then execute the following command to install Yii2 advanced template.

php composer.phar create-project --prefer-dist --stability=dev yiisoft/yii2-app-advanced yii2-advanced-api

or you can just use composer

composer create-project --prefer-dist --stability=dev yiisoft/yii2-app-advanced yii2-advanced-api

This command will create a new folder named `yii2-advanced-api`.

## Init Configuration

After you install the application, you have to follow the following steps to initialize the installed application. I copy these steps from [Yii2 Getting Started](https://github.com/yiisoft/yii2-app-advanced/blob/master/docs/guide/start-installation.md). 

1. Run command `init` (windows) or `php ./init` (mac/linux) to initialize the application with a specific environment.
2. Create a new database and adjust the `components['db']` configuration in `common/config/main-local.php` accordingly.
3. Apply migrations with console command `yii migrate`. This will create tables needed for the application to work.

Yii migrate command will create table user in database automatically.

## Create API folder

Inside advanced folder, you will see backend and frontend folder but we are not going to touch these folders. Yeah, we will create a new one. Let's create a new folder called `api`. So, you will have api folder at same level with backend and frontend. The api folder has structure like below.

api
-- common
------ controllers
------ models
-- config
-- modules
------ v1
---------- controllers
---------- models
-- runtime
-- tests
-- web

There is v1 folder inside modules. It means API version 1. This structure allow us to support API versioning. It is possible in future to have new API version such as V2 or V3. You may take a look at my github [https://github.com/deerawan/yii2-advanced-api](https://github.com/deerawan/yii2-advanced-api) for complete reference.

## Create Country Table

Our next step is to create country table and populate country data. Here is sample country data.

CREATE TABLE \`country\` (
  \`code\` CHAR(2) NOT NULL PRIMARY KEY,
  \`name\` CHAR(52) NOT NULL,
  \`population\` INT(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO \`Country\` VALUES ('AU','Australia',18886000);
INSERT INTO \`Country\` VALUES ('BR','Brazil',170115000);
INSERT INTO \`Country\` VALUES ('CA','Canada',1147000);
INSERT INTO \`Country\` VALUES ('CN','China',1277558000);
INSERT INTO \`Country\` VALUES ('DE','Germany',82164700);
INSERT INTO \`Country\` VALUES ('FR','France',59225700);
INSERT INTO \`Country\` VALUES ('GB','United Kingdom',59623400);
INSERT INTO \`Country\` VALUES ('IN','India',1013662000);
INSERT INTO \`Country\` VALUES ('RU','Russia',146934000);
INSERT INTO \`Country\` VALUES ('US','United States',278357000);

## Create Country Model

Let's create our country model. We will create it inside `api/modules/v1/models`.

\[php\] <?php

namespace api\\modules\\v1\\models;

use \\yii\\db\\ActiveRecord; /\*\* \* Country Model \* \* @author Budi Irawan <deerawan@gmail.com> \*/ class Country extends ActiveRecord { /\*\* \* @inheritdoc \*/ public static function tableName() { return 'country'; }

/\*\* \* @inheritdoc \*/ public static function primaryKey() { return \['code'\]; }

/\*\* \* Define rules for validation \*/ public function rules() { return \[ \[\['code', 'name', 'population'\], 'required'\] \]; } } \[/php\]

We need to redefine primary key using `primaryKey()` function because we don't use integer auto increment as primary key. And `rules()` function is also needed to let Yii know what fields exist on your table.

## Create Country Controller

Now we are going to create our first API controller. In order to use API CRUD generators, you only need to extend ActiveController class and specify the model class. Create the class inside `api/modules/v1/controllers`

\[php\] <?php

namespace api\\modules\\v1\\controllers;

use yii\\rest\\ActiveController;

/\*\* \* Country Controller API \* \* @author Budi Irawan <deerawan@gmail.com> \*/ class CountryController extends ActiveController { public $modelClass = 'api\\modules\\v1\\models\\Country'; } \[/php\]

With just this little effort, your country API include

- **GET /countries**: list all countries
- **HEAD /countries**: show the overview information of country listing
- **POST /countries**: create a new country
- **GET /countries/AU**: return the details of the country AU
- **HEAD /countries/AU**: show the overview information of country AU
- **PATCH /countries/AU**: update the country AU
- **PUT /countries/AU**: update the country AU
- **DELETE /countries/AU**: delete the country AU
- **OPTIONS /countries**: show the supported verbs regarding endpoint /countries
- **OPTIONS /countries/AU**: show the supported verbs regarding endpoint /countries/AU.

## Add Modules and API Rule

Model done and controller done, next we are going to add config for v1 modules and create API rule. Go to `api/config/main.php`. Add v1 modules and also rules.

\[php\] <?php

$params = array\_merge( require(\_\_DIR\_\_ . '/../../common/config/params.php'), require(\_\_DIR\_\_ . '/../../common/config/params-local.php'), require(\_\_DIR\_\_ . '/params.php'), require(\_\_DIR\_\_ . '/params-local.php') );

return \[ 'id' => 'app-api', 'basePath' => dirname(\_\_DIR\_\_), 'bootstrap' => \['log'\], 'modules' => \[ 'v1' => \[ 'basePath' => '@app/modules/v1', 'class' => 'api\\modules\\v1\\Module' // here is our v1 modules \] \], 'components' => \[ 'user' => \[ 'identityClass' => 'common\\models\\User', 'enableAutoLogin' => false, \], 'log' => \[ 'traceLevel' => YII\_DEBUG ? 3 : 0, 'targets' => \[ \[ 'class' => 'yii\\log\\FileTarget', 'levels' => \['error', 'warning'\], \], \], \], 'urlManager' => \[ 'enablePrettyUrl' => true, 'enableStrictParsing' => true, 'showScriptName' => false, 'rules' => \[ \[ 'class' => 'yii\\rest\\UrlRule', 'controller' => 'v1/country' // our country api rule, 'tokens' => \[ '{id}' => '<id:\\\\w+>' \] \] \], \] \], 'params' => $params, \]; \[/php\]

We define v1 modules here and we also use Yii2 restful rule and set the controller to our country controller. We also redefine all routes to match our current id (primary key) as string (\\w+) inside `tokens` parameter.

## Add API Alias

Open `common/config/aliases.php` and add api alias line like the following

Yii::setAlias('api', dirname(dirname(\_\_DIR\_\_)) . '/api'); // add api alias

## Test API

Let's try our country API. We will going to use [POSTMAN](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for testing.

### Test GET /countries

We are going to get all countries.

[![postman-post-get-all](images/postman-post-get-all.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/postman-post-get-all.jpg)

### Test GET /countries/:id

We are going to get country information with code ID

[![postman-post-get](images/postman-post-get.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/postman-post-get.jpg)

### Test POST /Countries

We are going to create a new country

[![postman-post-create](images/postman-post-create.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/postman-post-create.jpg)

### Test PATCH /Countries/:id

We are going to modify existing country information. Make sure you set it as `x-www-form-urlencoded`. You can also switch it using PUT.

[![postman-post-patch](images/postman-post-patch.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/postman-post-patch.jpg)

### Test DELETE /countries/:id

We are going to delete a country

[![postman-post-delete](images/postman-post-delete.jpg)](http://budiirawan.com/wp-content/uploads/2014/07/postman-post-delete.jpg)

## Summary

Congratulations, you just successfully setup RESTful API in Yii2 framework. [Go to the Github Repo](https://github.com/deerawan/yii2-advanced-api)

### Changelog

- Fix typo in path api config (28-nov-2015)
- Add primaryKey function for country model (5-nov-2014)
- Add url route handling for string (5-nov-2014)
- Add postman example for testing (5-nov-2014)
- Add Rule function for Country model (30-Oct-2014)
- Remove .gitignore in Github to allow commit \*.local files (29-Oct-2014)

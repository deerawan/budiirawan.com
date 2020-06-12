---
title: "An Introduction to Sinatra"
date: 2015-06-24
category: ruby
---

[Sinatra](http://www.sinatrarb.com/) is a micro framework for Ruby. Different to Ruby on Rails, Sinatra has simplistic approach to develop web application. In this post, we will get started with Sinatra by learning about how to create routes and access URL parameters.

## Preparation

You need Ruby and RubyGems installed. Please check out [How to Install Ruby](http://budiirawan.com/install-ruby-rails-mac/ "How to Install Ruby on Rails on Mac") if you are on Mac.

## Installation

First thing we need to do is install Sinatra using RubyGems. Open your terminal and enter following command below:

```bash
$ gem install Sinatra
```

## Hello World

We'll start with the most basic of Sinatra apps. Open your text editor and write the following code and save it as `app.rb`.

`app.rb`

```ruby
require 'sinatra'

get '/' do 
  'hello world' 
end
```

The code is very simple. The first line is needed to get Sinatra library. The next block we can say it as **Routes**. In here, we tell to browser that if there is any GET request with url **'/'**, send **'hello world'** as response.

To see how it works, we have to start the server. Open terminal and navigate to `app.rb` and enter following command

```bash
ruby app.rb
```

Then open your browser and navigate to **http://localhost:4567**. You should see 'hello world' like in **Figure 1**

[![](/images/2015/sinatra-hello-world.jpg)](/images/2015/sinatra-hello-world.jpg)

Beside browser, we can also use CURL to check our Sinatra app. Open terminal and type following command:

```bash
$ curl -v http://localhost:4567
```

You should see response like below

```bash
\* Rebuilt URL to: http://localhost:4567/
\* Hostname was NOT found in DNS cache
\*   Trying 127.0.0.1...
\* Connected to localhost (127.0.0.1) port 4567 (#0)
> GET / HTTP/1.1
> User-Agent: curl/7.37.1
> Host: localhost:4567
> Accept: \*/\*
>
< HTTP/1.1 200 OK
< Content-Type: text/html;charset=utf-8
< Content-Length: 11
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Frame-Options: SAMEORIGIN
\* Server WEBrick/1.3.1 (Ruby/2.1.1/2014-02-24) is not blacklisted
< Server: WEBrick/1.3.1 (Ruby/2.1.1/2014-02-24)
< Date: Wed, 24 Jun 2015 22:28:53 GMT
< Connection: Keep-Alive
<
\* Connection #0 to host localhost left intact
hello world%
```

You need to see a line that show **GET / HTTP/1.1**. See that it matches with defined routes in our Sinatra app. We can also see our hello world response is printed out there.

## Hello World via POST

If you are familiar with RESTFUL API, Sinatra supports HTTP command like GET (we tried it above), POST, PUT, PATCH and DELETE. Now, we are going to add a new route with POST command.

Open your `app.rb` file and add new route with following code:

`app.rb`

```ruby
post '/' do 
  'hello world via POST' 
end
```

Whenever you make changes in Sinatra app, you have to restart the server manually. **CMD + C** to stop the server and rerun again.

```bash
$ ruby app.rb
```

This daunting task can be eliminated if we use [Sinatra Reloader](http://www.sinatrarb.com/contrib/reloader). It will do in-process reloading automatically.

To use Sinatra Reloader, install sinatra-contrib gem:

```bash
$ gem install sinatra-contrib
```

Then add following line after **require Sinatra** line.

`app.rb`

```ruby
require 'sinatra' 
require 'sinatra/reloader' if development? 
...
```

Let's close our server and rerun again the server (I promise this is the last time we rerun after making changes :D)

```bash
$ ruby app.rb
```

Okay, let's move on to test our POST. The simple way to test this POST route is using CURL. Type following command in your terminal.

```bash
$ curl -x POST -v -d "" http://localhost:4567
```

Parameter **x** tells to request using POST command. For parameter **d**, it is used to supply post data which we don't need it right now.

You should see response like below:

```bash
\* Rebuilt URL to: http://localhost:4567/
\* Hostname was NOT found in DNS cache
\*   Trying ::1...
\* Connected to localhost (::1) port 4567 (#0)
> POST / HTTP/1.1
> User-Agent: curl/7.37.1
> Host: localhost:4567
> Accept: \*/\*
> Content-Length: 0
> Content-Type: application/x-www-form-urlencoded
>
< HTTP/1.1 200 OK
< Content-Type: text/html;charset=utf-8
< Content-Length: 20
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Frame-Options: SAMEORIGIN
\* Server WEBrick/1.3.1 (Ruby/2.1.1/2014-02-24) is not blacklisted
< Server: WEBrick/1.3.1 (Ruby/2.1.1/2014-02-24)
< Date: Wed, 24 Jun 2015 22:39:13 GMT
< Connection: Keep-Alive
<
\* Connection #0 to host localhost left intact
hello world via POST%
```

For another HTTP commands, we can create them like following:

`app.rb`

```ruby
put '/' do 
  'hello world via PUT' 
end

patch '/' do 
  'hello world via PATCH' 
end

delete '/' do 
  'hello world via DELETE' 
end
```

To test it via CURL, you just need to change the **x** to PUT/PATCH/DELETE. Now it becomes your challenge to test it.

## Using URL Parameters

It will be interesting if we can supply parameters to our routes. Let's say I want to print out **'Hello Budi'** which **'Budi'** can be set in URL.

To do so, we need to define a new route like following:

```ruby
get '/hello/:name' do |name| "Hello #{name}" end
```

We defined routes to match **/hello** with **:name** as parameter. You can supply anything text as **:name**. For example to print **'Hello Budi'**, the url is supposed to be like **/hello/budi** (Figure 2).

[![Figure 2](/images/2015/sinatra-hello-budi.jpg)](/images/2015/sinatra-hello-budi.jpg "Figure 2")

We can define more than one parameter in URL. Below, we try to create a new route that accepts two parameters

`app.js`

```ruby
get '/hello/:name/from/:from' do |name, from| "Hello #{name} from #{from}" end
```

Let's try in our browser.

[![Figure 3](/images/2015/sinatra-hello-budi-dimas.jpg)](/images/2015/sinatra-hello-budi-dimas.jpg "Figure 3")

## Conclusion

Finally, you have performed your first try with Sinatra! Hopefully you can see how simple Sinatra makes routes for our web application.

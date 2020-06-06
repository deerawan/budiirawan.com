---
title: Budi Irawan
subtitle: 👨‍💻 Frontend Engineer
layout: layouts/base.njk
pagination:
  data: collections.post
  size: 6
  alias: posts
  reverse: true
---

{%- for post in posts -%}
<article class="article">
  <h2 class="article__title"><a class="article__link" href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <div class="article__meta">
    <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time> 
  </div>
</article>
{%- endfor -%}

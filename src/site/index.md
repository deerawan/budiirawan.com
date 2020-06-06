---
title: Budi Irawan
subtitle: 👨‍💻 Frontend Engineer
layout: layouts/base.njk
---

{%- for post in collections.post -%}
<article class="article">
  <h2 class="article__title"><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <div class="article__meta">
    <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time> 
  </div>
</article>
{%- endfor -%}





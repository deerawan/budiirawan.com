---
title: Budi Irawan
subtitle: 👨‍💻 Frontend Engineer
layout: layouts/base.njk
---

{%- for page in collections.post -%}
<article class="article">
  <h2 class="article__title"><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
  <div class="article__meta">
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </div>
</article>
{%- endfor -%}





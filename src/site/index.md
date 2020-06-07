---
subtitle: 👨‍💻 I'm a Frontend Engineer who passionate in testing, clean code and automation. 
layout: layouts/base.njk
pagination:
  data: collections.post
  size: 6
  alias: posts
  reverse: true
---

<section class="section">
  <h2 class="section__title">🗒 Recent Articles</h2>
  {%- for post in posts -%}
  <article class="article">
    <img class="article__image" src="/images/{{ post.data.category }}.png" alt="{{ post.data.category }}">
    <div class="article__content">
      <h3 class="article__title">    
        <a class="article__link" href="{{ post.url }}">{{ post.data.title }}</a>
      </h3>
      <div class="article__meta">
        <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
      </div>
    </div>
  </article>
  {%- endfor -%}
</section>

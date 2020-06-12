---
subtitle: 👨‍💻 I'm a Frontend Developer who is passionate in testing, clean code and automation. 
layout: layouts/base.njk
pagination:
  data: collections.post
  size: 40
  alias: posts
  reverse: true
---

<section class="section">
  <h2 class="section__title">🗒 Recent Articles</h2>
  {%- for post in posts -%}
  <article class="article">
    <a class="article__link" href="{{ post.url }}">
      {%- if post.data.category %}<img class="article__image" src="/images/{{ post.data.category }}.svg" alt="{{ post.data.category }}">{% endif %}
      <div class="article__content">
        <h3 class="article__title">    
          {{ post.data.title }}
        </h3>
        <div class="article__meta">
          <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
        </div>
      </div>
    </a>
  </article>
  {%- endfor -%}
</section>

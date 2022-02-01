---
subtitle: 👨‍💻 I'm a Frontend Developer who is passionate in testing, clean code and automation.
layout: layouts/base.njk
---

<section class="section">
  <h2 class="section__title">🗒 Recent Articles</h2>
  {%- for post in collections.recentPosts -%}
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

<section class="section">
  <h2 class="section__title">🗒 All Articles</h2>
  {%- for year, yearPosts in collections.postsByYear -%}
    <h3 class="section__subtitle">{{ year }}</h3>
    <ul class="list">
      {%- for post in yearPosts -%}
        <li class="list__item">
          <a class="list__link" href="{{ post.url }}">
            <div class="list__title">{{ post.data.title }}</div>
            <div class="list__metadata">{{ post.date | dateDisplayShort }}</div>
          </a>
        </li>
      {%- endfor -%}
    </ul>
  {%- endfor -%}
</section>

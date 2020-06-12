---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<p class="date">
  Posted on <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main class="post">
  {{ content | safe }}
</main>

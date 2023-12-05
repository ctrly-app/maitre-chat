---
layout: null
permalink: /api/map
pagination:
  enabled: true
  per_page: 1000
  collection: all
  extension: .json
  indexpage: 'feed-:num'
---

{
  "pages": [{% for post in paginator.posts %}
    {% if forloop.first != true %},{% endif %}
    {
      "title": "{{ post.title }}",
      "link": "{{ post.url }}",
      "img": "{{ post.img }}",
      "description": "{{ post.description }}",
      "departement": "{{ post.departement }}",
      "code_postal": "{{ post.code_postal }}",
      "tags": "{{ post.tags }}",
      "latitude": "{{ post.latitude }}",
      "longitude": "{{ post.longitude }}"
    }{% endfor %}
  ]
}
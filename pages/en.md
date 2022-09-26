---
tasks: !file tasks.yaml
---

# JavaScript Tasks

## Katas

{{#tasks.kata}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.en.md">{{en.meta.name}}</a></strong>
  {{#en.meta.tags}}<span class="badge">{{.}}</span> {{/en.meta.tags}}
  <div>{{en.meta.description}}</div>
</div>
{{/tasks.kata}}

## Complex exercises

{{#tasks.complex}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.en.md">{{en.meta.name}}</a></strong>
  {{#en.meta.tags}}<span class="badge">{{.}}</span> {{/en.meta.tags}}
  <div>{{en.meta.description}}</div>
</div>
{{/tasks.complex}}

## Applications

{{#tasks.application}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.en.md">{{en.meta.name}}</a></strong>
  {{#en.meta.tags}}<span class="badge">{{.}}</span> {{/en.meta.tags}}
  <div>{{en.meta.description}}</div>
</div>
{{/tasks.application}}

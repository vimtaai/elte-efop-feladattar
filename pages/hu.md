---
tasks: !file tasks.yaml
---

# JavaScript feladattár

## Ujjgyakorlatok

{{#tasks.kata}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.hu.md">{{hu.meta.name}}</a></strong>
  {{#hu.meta.tags}}<span class="badge">{{.}}</span> {{/hu.meta.tags}}
  <div>{{hu.meta.description}}</div>
</div>
{{/tasks.kata}}

## Komplex feladatok

{{#tasks.complex}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.hu.md">{{hu.meta.name}}</a></strong>
  {{#hu.meta.tags}}<span class="badge">{{.}}</span> {{/hu.meta.tags}}
  <div>{{hu.meta.description}}</div>
</div>
{{/tasks.complex}}

## Alkalmazások

{{#tasks.application}}
<div class="margin:bottom:small">
  <strong><a href="#!/../tasks/{{id}}/task.hu.md">{{hu.meta.name}}</a></strong>
  {{#hu.meta.tags}}<span class="badge">{{.}}</span> {{/hu.meta.tags}}
  <div>{{hu.meta.description}}</div>
</div>
{{/tasks.application}}
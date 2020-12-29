---
tasks: !file tasks.yaml
---

## Katas

{{#tasks.kata}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.kata}}

## Complex exercises

{{#tasks.complex}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.complex}}

## Applications

{{#tasks.application}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.application}}
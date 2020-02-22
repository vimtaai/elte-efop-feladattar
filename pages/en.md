---
tasks: !file tasks.yaml
---

## Katas

{{#tasks.kata}}
- **[{{en.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.description}}
{{/tasks.kata}}

## Complex excersises

{{#tasks.complex}}
- **[{{en.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.description}}
{{/tasks.complex}}

## Applications

{{#tasks.application}}
- **[{{en.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.description}}
{{/tasks.application}}
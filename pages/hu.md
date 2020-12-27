---
tasks: !file tasks.yaml
---

## Ujjgyakorlatok

{{#tasks.kata}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.kata}}

## Komplex feladatok

{{#tasks.complex}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.complex}}
## Alkalmazások

{{#tasks.application}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.application}}
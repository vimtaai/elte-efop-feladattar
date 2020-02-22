---
tasks: !file tasks.yaml
---

## Ujjgyakorlatok

{{#tasks.kata}}
- **[{{hu.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.description}}
{{/tasks.kata}}

## Komplex feladatok

{{#tasks.complex}}
- **[{{hu.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.description}}
{{/tasks.complex}}

## Alkalmazások

{{#tasks.application}}
- **[{{hu.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.description}}
{{/tasks.application}}
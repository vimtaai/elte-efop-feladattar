---
tasks: !file tasks.yaml
---

<div class="cover">
  <div class="title">
    The browser as an application development platform<br>
  </div>
  <div class="title">
    Exercise book
  </div>

  <div class="authors">
    Tamás Bucsánszki, Viktor Gerely,<br>
    Győző Horváth, Márton Visnovitz
  </div>

  <div class="subtitle">
  </div>

  <div class="disclaimer">
  </div>
</div>

# Table of contents

- **[Katas](#katas)**
- **[Complex exercises](#complex-exercises)**
- **[Applications](#applications)**

---

# Katas

{{#tasks.kata}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.kata}}

---

{{#tasks.kata}}
{{{en.task}}}
---
{{/tasks.kata}}

---

# Complex exercises

{{#tasks.complex}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.complex}}

{{#tasks.complex}}
{{{en.task}}}
---
{{/tasks.complex}}

# Applications

{{#tasks.application}}
- **[{{en.meta.name}}](#!/../tasks/{{id}}/task.en.md)**: {{en.meta.description}}
{{/tasks.application}}

---

{{#tasks.application}}
{{{en.task}}}
---
{{/tasks.application}}
---
tasks: !file tasks.yaml
---

<div class="title">
  A böngésző, mint alkalmazásfejlesztési platform<br>
  Feladattár
</div>

<div class="authors">
  Bucsánszki Tamás, Gerely Viktor, Horváth Győző, Visnovitz Márton
</div>

<div class="subtitle">
  Belépő a tudás közösségébe<br>
  Informatika szakköri segédanyag
</div>

<div class="disclaimer">
  A kiadvány „A felsőoktatásba bekerülést elősegítő készségfejlesztő és kommunikációs programok megvalósítása, valamint az MTMI szakok népszerűsítése a felsőoktatásban” (EFOP-3.4.4-16-2017-006) című pályázat keretében készült 2017-ben.
</div>

## Ujjgyakorlatok

{{#tasks.kata}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.kata}}

---

{{#tasks.kata}}
{{{hu.task}}}
---
{{/tasks.kata}}

## Komplex feladatok

{{#tasks.complex}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.complex}}

{{#tasks.complex}}
{{{hu.task}}}
---
{{/tasks.complex}}

---

## Alkalmazások

{{#tasks.application}}
- **[{{hu.meta.name}}](#!/../tasks/{{id}}/task.hu.md)**: {{hu.meta.description}}
{{/tasks.application}}

{{#tasks.application}}
{{{hu.task}}}
---
{{/tasks.application}}
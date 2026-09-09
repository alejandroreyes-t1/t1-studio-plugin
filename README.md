# t1-studio-plugin

Marketplace de plugins de Claude Code del equipo de producto de T1. El objetivo: cualquier PO
puede usar `/studio` en **su propio proyecto** sin clonar ni descargar el kit completo — el plugin
trae todo lo que necesita (manifiesto de Nexus, criterio UX, validador, editor) instalado una vez
por máquina.

## Qué contiene

### Plugin `studio` (`plugins/studio/`)

La skill `studio` (T1 Studio): un PO describe una pantalla en lenguaje natural, la skill la
compone solo con componentes reales de Nexus, la valida mecánicamente contra el manifiesto, deja
iterar por chat, da crítica de diseño y cierra con un reporte de handoff.

Todo lo de solo-lectura (manifiesto, `SCREENSPEC.md`, criterios UX, validador, editor
`studio.html`) vive empaquetado dentro del plugin, en
`plugins/studio/skills/studio/kit/`. La skill nunca escribe ahí — cada PO genera sus pantallas y
reportes en `./t1-studio-output/` dentro de su propio proyecto, así cada quien versiona lo suyo
donde ya trabaja.

## Uso

### Una sola vez por máquina

```bash
claude plugin marketplace add <url-de-este-repo>
claude plugin install studio@t1-studio-plugin
```

### En cualquier proyecto

Con el plugin instalado, cualquier PO escribe `/studio` (o simplemente describe la pantalla que
necesita) en **cualquier** proyecto abierto con Claude Code — no hace falta estar parado en este
repo ni en el kit original. La skill crea `./t1-studio-output/` ahí mismo la primera vez que la
usa.

### Actualizar el kit (manifiesto de Nexus, criterios UX, validador…)

Cuando el manifiesto de Nexus o los criterios UX cambien:

1. Actualiza los archivos en `plugins/studio/skills/studio/kit/`.
2. Sube el `version` en `plugins/studio/.claude-plugin/plugin.json`.
3. Haz commit y push.
4. Cada PO corre `claude plugin marketplace update t1-studio-plugin` (o `/reload-plugins` dentro
   de Claude Code) para recibir la versión nueva — sin reinstalar nada a mano.

## Reglas de oro

1. **Nunca** commitear datos reales de T1 (métricas, SLAs, datos de clientes) dentro del kit — solo
   contenido de ejemplo, visiblemente ficticio.
2. El kit (`plugins/studio/skills/studio/kit/`) es de solo lectura para la skill: los outputs de
   cada PO viven en su propio proyecto, nunca aquí.
3. Repo privado — este es tooling interno de T1, no un plugin público.

## Versionado

`plugins/studio/.claude-plugin/plugin.json` lleva `version`. Súbela al hacer cambios incompatibles
(p. ej. el formato de `SCREENSPEC.md`) para poder razonar sobre qué versión usa cada proyecto.

# t1-studio-plugin

Marketplace de plugins de Claude Code del equipo de producto de T1. El objetivo: cualquier PO
puede usar `/studio` en **su propio proyecto** sin clonar ni descargar el kit completo — el plugin
trae todo lo que necesita (manifiesto de Nexus, criterio UX, validador, preview interactivo)
instalado una vez por máquina.

## Origen

La base original de T1 Studio la compartió Guillermo. Alejandro Reyes la adaptó para el
Laboratorio de Owners y la sigue iterando con base en pruebas reales con owners (incluyendo el
motor de preview interactivo y la detección SHAPE/BUILD/AUDIT). No es una creación desde cero —
mantén esta atribución si reescribes esta sección.

## Qué contiene

### Plugin `studio` (`plugins/studio/`)

La skill `studio` (T1 Studio): un PO describe una necesidad — desde una idea suelta hasta un
documento de definición ya maduro (con IDs, reglas, estados, casos) — y la skill entrega un
**prototipo React interactivo real** (no solo un JSON) compuesto con componentes reales de Nexus,
validado mecánicamente contra el manifiesto, navegable con `http://localhost:<puerto>`, editable
por chat, con crítica de diseño y reporte de handoff trazable a los IDs del documento fuente.

Detecta internamente si el input es difuso (**SHAPE**: reencuadre + máx. 3 preguntas) o ya viene
maduro (**BUILD**: no reinterroga lo que el documento ya responde, solo pregunta lo bloqueante), y
puede auditar un documento en busca de contradicciones/huecos (**AUDIT**) sin construir nada.

Todo lo de solo-lectura (manifiesto, `SCREENSPEC.md`, criterios UX, validador, motor de preview en
`preview-runtime/`) vive empaquetado dentro del plugin, en `plugins/studio/skills/studio/kit/`. La
skill nunca escribe ahí — cada PO genera sus pantallas, reportes y su servidor de preview local en
`./t1-studio-output/` dentro de su propio proyecto, así cada quien versiona lo suyo donde ya
trabaja.

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

### Actualizar el bundle de componentes reales de Nexus

El preview (`preview-runtime/`) no usa una aproximación visual — renderiza los componentes reales
de `@t1/nexus-react`, compilados desde Phoenix (solo lectura, misma postura que `nexus-contract/`)
en `preview-runtime/vendor/nexus-react.bundle.js`, más el CSS real de tokens/marca en
`preview-runtime/nexus-tokens.css`. Ningún PO instala nada de esto — es trabajo de mantenimiento,
hecho una vez por quien actualiza el kit.

Cuando Nexus cambie visualmente (nuevos componentes, tokens de marca actualizados), regenera así:

1. **Trae el CSS de tokens** (solo lectura) desde
   `libs/shared/nexus/l3-nexus-tokens/css/{colors,elevation,fonts,landing,spacing,styles,typography}.css`
   en `PlataformaT1/Phoenix`, y concaténalo en `preview-runtime/nexus-tokens.css`.
2. **Trae los `.tsx` de los componentes** desde `libs/shared/nexus/l3-nexus-react/src/*.tsx` (los
   componentes reales que este preview usa — hoy 30: todos excepto `T1FinalCTA`, que trae un
   archivo de datos adicional y es un componente de landing, no de pantallas operativas). Trae
   también `tokens.ts` y `brand-tokens.ts` de `l3-nexus-tokens/src/` (son las claves de las
   variables CSS, no los valores — los valores ya vienen del CSS del paso 1).
3. **Compílalos** con esbuild (`npx esbuild@0.28.2`) en un solo bundle IIFE (`--format=iife
   --global-name=NexusReact`), usando `--jsx=automatic` y tres shims mínimos que redirigen
   `react`/`react-dom`/`react/jsx-runtime` a los globales ya vendorizados (`window.React` /
   `window.ReactDOM`) en vez de duplicar React en el bundle.
4. Copia el resultado a `preview-runtime/vendor/nexus-react.bundle.js`.
5. Sube el `version` del plugin, commit y push (igual que arriba).

Cada uno de estos pasos ya se hizo a mano una vez (ver el historial de commits de este repo para
los comandos exactos de `gh api`/`esbuild` usados) — no hay todavía un script que lo automatice de
punta a punta; si necesitas repetirlo pronto, vale la pena escribir uno.

**Componentes NO vendorizados** (marketing/landing: `chat-kit/`, `landing/`, `T1FinalCTA`): si un
ScreenSpec los usa, el preview los muestra con una nota "no vendorizado en el preview" en vez de
fallar — son reales, solo no están compilados en el bundle todavía.

## Reglas de oro

1. **Nunca** commitear datos reales de T1 (métricas, SLAs, datos de clientes) dentro del kit — solo
   contenido de ejemplo, visiblemente ficticio.
2. El kit (`plugins/studio/skills/studio/kit/`) es de solo lectura para la skill: los outputs de
   cada PO viven en su propio proyecto, nunca aquí.
3. Repo privado — este es tooling interno de T1, no un plugin público.

## Versionado

`plugins/studio/.claude-plugin/plugin.json` lleva `version`. Súbela al hacer cambios incompatibles
(p. ej. el formato de `SCREENSPEC.md`) para poder razonar sobre qué versión usa cada proyecto.

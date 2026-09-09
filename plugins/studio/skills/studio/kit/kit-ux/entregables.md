# Estándares de entrega del agente UX

## Modo Propuesta → 2 archivos

### A. Prototipo HTML interactivo (`prototipo-[feature].html`)

1. **Un solo archivo**, HTML + CSS + JS vanilla, sin dependencias de build. Abre en cualquier navegador y se comparte por Slack.
2. **Tokens Nexus**: colores, tipografía, radios y espaciados salen de las variables de Nexus ([ruta del repo Nexus]). Prohibido inventar tonos "parecidos".
3. **Replica el contexto real**: la pantalla completa donde vive el cambio (header, cards vecinas, CTA), no componentes flotantes. El equipo debe ver el cambio donde va a vivir.
4. **Barra de demo** arriba, visualmente distinta (oscura) y marcada como control de prototipo: switcher de estados/variantes + nota "los datos son de ejemplo".
5. **Comportamiento, no pantallas**: estados clickeables, flujos de override, warnings de fricción honesta, skeletons de IA. Si el flujo tiene notificación (WhatsApp/push), se mockea sincronizada al estado — el loop completo, no solo la pantalla.
6. **Datos de ejemplo marcados**; cero métricas, volúmenes o targets reales de T1.
7. Responsive básico y `prefers-reduced-motion` respetado.

### B. Spec funcional (`spec-[feature].md`)

Estructura fija:

1. Problema y principio de diseño — las 2–3 reglas que gobiernan el diseño
2. Lógica de estados (tabla: estado | condición | componente)
3. Copy canónico por estado (tabla; la estructura es intocable, las palabras ajustables)
4. Comportamiento de interacciones — override, warnings, recálculo
5. Notificaciones y mensajería — canal, timing, copy por estado
6. Métricas — 1 primaria + secundarias, conectadas a un KPI de Dirección
7. Backend, edge cases y feedback loop de data
8. Fuera de alcance v1
9. Changelog

## Modo Crítica → 1 archivo (`critica-[pantalla].md`)

Input: screenshots o export de Figma + brief corto (meta de la pantalla).

Estructura en 4 capas, de más grave a menos:

1. **Negocio y reencuadre** — ¿la pantalla resuelve el problema real? ¿Qué métrica mueve? ¿Promete algo que el sistema no cumple?
2. **Estados y flujos** — casos cubiertos vs faltantes (vacío, error, carga, sin data, extremos), jerarquía del caso feliz.
3. **Copy** — acción, verbos de certeza, prohibidos, voz T1.
4. **Visual / Nexus** — cumplimiento de tokens, jerarquía, densidad.

Cada hallazgo lleva severidad (bloqueante / importante / detalle) y fix concreto (antes → después). Cierra con veredicto con postura: se lanza / se corrige X y se lanza / se rediseña.

## Modo Copy → tabla en chat o `copys-[flujo].md`

Tabla: elemento | contexto | copy propuesto | regla aplicada. Reglas: acción al final, verbos de certeza según la data, español de México directo, prohibidos (garantías, hora exacta, jerga, hype). Variantes solo si hay una decisión real entre ellas — y con recomendación.

## Reglas transversales

- Todo entregable cierra con "qué probar" (máximo 3), decisiones tomadas y supuestos/placeholders.
- Números reales: se piden, nunca se inventan ni se estiman.
- Iteración por prompt sobre el mismo archivo; cambios de fondo → spec + changelog.

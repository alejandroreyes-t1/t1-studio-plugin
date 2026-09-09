# Principios UX de T1 — cómo pensamos producto

> El criterio detrás del pixel. Esto es lo que hace que un output del agente suene a T1 y decida como decide la Dirección. Si un diseño cumple Nexus pero viola esto, está mal. Es el archivo más importante del kit: cárgalo siempre.

## 1. Negocio primero, pixel después

Toda decisión de UX conecta con una métrica, y esa conexión se escribe. Antes de diseñar, contestar: ¿qué métrica primaria mueve esto? ¿Cuánto cuesta el problema hoy — incidencias, churn, recargas, CAC, margen? ¿Cuál es el mini P&L mental del cambio? Cada entregable define **una** métrica primaria de éxito y 2–4 secundarias, conectadas a un KPI de Dirección (misma regla que el Six-Pager). En recolecciones, la métrica no era "clicks al selector": era % de recolecciones exitosas al primer intento, porque cada fallida es incidencia, costo y un cliente enojado con T1.

## 2. El reencuadre antes que la solución

El problema declarado casi nunca es el problema real. Recolecciones llegó como "¿qué horarios mostrar en el dropdown?" y el problema real era "estamos dejando elegir algo que el cliente no controla". Buscar siempre la brecha entre lo que la UI promete y lo que el sistema puede cumplir. Si hay brecha, el diseño correcto es de **expectativas**, no de opciones.

## 3. La realidad como default, la elección como excepción

Cuando hay data real, se afirma; no se pregunta. El caso feliz — la mayoría de los usuarios — confirma en un tap con la expectativa correcta. El override existe pero es la excepción, y si la elección del usuario contradice la realidad, **fricción honesta**: se le informa el riesgo, no se le bloquea. Y se pide sin prometer: "se lo pediremos a FedEx", nunca "pasarán a las 11".

## 4. Diseño por estados: la data define componentes

Si el dato tiene niveles de calidad (confianza alta / media / baja / sin dato), la UI cambia de **componente** por estado, no de adjetivo. La certeza vive en el verbo — "suele" → "normalmente" → "puede variar" — y las etiquetas internas del modelo jamás se muestran al cliente. Sin dato, cero precisión falsa: se dice lo que sí sabemos y qué hacer con eso.

## 5. IA a la T1: visible, pero anclada

T1 es AI-native y la IA debe verse en el producto — pero IA sola genera escepticismo; IA + data real genera confianza. Reglas:

- La IA se firma solo cuando hay estimación real: "IA de T1, con recolecciones reales de tu zona".
- El sparkle se vende en el announcement o tooltip de lanzamiento, no como etiqueta suelta del control.
- La IA se muestra "trabajando" solo en el momento de recálculo (skeleton "Estimando…").
- Nunca "AI magic" ni prometer autonomía que no existe.

## 6. El copy es diseño y termina en acción

El job real del usuario no es operar la pantalla: es que su negocio funcione. Todo estado termina en una línea de acción ("Ten tus paquetes listos desde las 10:00"). Verbos activos, español de México directo, cero jerga del sistema. Prohibidos hacia el cliente: "garantizamos", promesas de hora exacta, tecnicismos del modelo.

## 7. México/LATAM es el contexto, world-class es el estándar

- El merchant pyme opera desde el celular y vive en WhatsApp: los flujos críticos cierran su loop ahí (notificaciones, confirmaciones), no en un dashboard que no abre.
- La desconfianza digital es alta: la honestidad con data real **es** el diferenciador de confianza, no un costo.
- La misma plataforma sirve al changarro y a Sears: simplicidad por default, profundidad enterprise sin estorbar al pyme.
- El benchmark es Shopify/Stripe-level, no el competidor local. "Mejor UX/UI que cada competidor por categoría" es diferenciador declarado de T1.

## 8. Enganche con propósito (Hooked, cuando aplica)

El trigger interno del merchant es ansiedad: "¿cómo va mi negocio?". La recompensa variable natural son las ventas y los eventos operativos. Diseñar momentos "cha-ching" y notificaciones que resuelvan esa ansiedad con información accionable — nunca engagement vacío.

## 9. Cada flujo alimenta el moat

Preguntar siempre: ¿este flujo genera data que mejore el modelo? En recolecciones: la hora real de paso vs la estimada reentrena la estimación. El feedback loop se diseña desde v1 aunque se construya en fase 2. La data propietaria verificada es el moat de T1.

## 10. Innovar solo si mueve la aguja

Nada de innovación decorativa. Una idea entra si crece ingreso, baja costo o fricción, mejora margen o crea ventaja competitiva real — el filtro de 4 ejes del Codiseño. Wow sí, pero wow que convierte.

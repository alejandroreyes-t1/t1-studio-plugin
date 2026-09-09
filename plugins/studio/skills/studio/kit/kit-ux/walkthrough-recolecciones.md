# Walkthrough — caso real: recolecciones con horario estimado por IA

> El caso que originó este kit, de brief a entregables en ~10 minutos de ida y vuelta. Referencia de qué esperar en cada fase del playbook.

## 1. El brief (como llegó, dictado por voz)

Problema: en T1 Envíos el cliente elige día y hora de recolección, pero las paqueterías pasan por zona, no por preferencia del cliente. Data science analizó los horarios típicos por CP + paquetería y entregó una taxonomía de 6 niveles: confianza alta, media, baja, sin hora estimada, con hora límite, sin información. Se adjuntaron 2 screenshots del UX propuesto (dropdown de 9 ventanas traslapadas con chip "Recomendado por IA") y 1 de la taxonomía. En una ronda posterior llegó contexto estratégico: "metimos la IA porque siendo T1 apostamos a que somos AI".

## 2. El reencuadre (fase 2)

El problema declarado era "¿qué horarios mostrar?". El real: **la UI dejaba elegir algo que el cliente no controla.** Cada elección no respetada = recolección fallida = incidencia = costo + cliente enojado con T1, no con la paquetería. El dato del modelo no es una recomendación: es la realidad de la zona. Conclusión: diseño de expectativas, no de opciones — la realidad como default, la elección como excepción, y un componente distinto por estado de confianza.

## 3. Postura + preguntas (fase 3, dos rondas)

Decisiones declaradas veto-ables: HTML interactivo con switcher de estados replicando el layout real; IA visible pero anclada a data real; copys escritos por el agente y ajustables por el equipo.

Ronda de 3 preguntas, cada una con recomendación primero:

1. ¿El horario elegido se manda a la paquetería? → R: sí, pero casi nunca se respeta. De ahí nace la regla "pedimos sin prometer".
2. ¿Override con las 9 ventanas actuales o 3 bloques simples? → R: 3 bloques.
3. ¿Incluir el mock de la notificación del día? → R: sí.

Nota: el humano corrigió el criterio del agente ("la IA sí va visible"). El agente sintetizó en vez de obedecer: IA firmada solo cuando hay dato real.

## 4. Entregables (fases 4–5)

- `prototipo-recolecciones-ia.html` — pantalla Crear recolección con barra de demo, los 6 estados interactivos, override de 3 bloques con fricción honesta, skeleton de "Estimando con IA…" al cambiar fecha, y notificación WhatsApp sincronizada al estado.
- `spec-recolecciones-horario-ia.md` — 3 reglas de diseño, tabla de estados, copy canónico, métrica primaria (% de recolecciones exitosas al primer intento), edge cases de backend y feedback loop: la hora real de paso reentrena el modelo.

Cierre con "qué probar" (3 cosas): cambiar la fecha, elegir bloque atípico en confianza alta, ver la notificación cambiar con el estado.

## 5. Qué hizo que funcionara

- Meta de negocio + evidencia + screenshots desde el brief inicial.
- Reencuadre antes de pixeles.
- Preguntas en lote con recomendación, respondibles en segundos desde el celular.
- La taxonomía de data science como driver de componentes, no de copys.
- Entregables que muestran comportamiento, no slides.

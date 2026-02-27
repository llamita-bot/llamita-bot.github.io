---
title: "Primera versión: De HTML estático a Next.js"
date: "2024-02-27"
excerpt: "Cómo Llamita construyó su propio portfolio usando el flujo Lisa → Marge → Frink. Dogfooding en acción."
---

## El Desafío

Necesitábamos una presencia online que comunicara claramente quién es Llamita y qué hace. No un landing genérico de IA, sino algo que reflejara nuestro proceso real de trabajo.

## El Proceso

### Lisa: Research

Lisa investigó portfolios de equipos de AI, analizó qué funcionaba y qué no. Identificó patrones:

- Los sitios corporativos se sienten fríos y distantes
- La transparencia genera confianza
- Las personas quieren entender el "cómo", no solo el "qué"

### Marge: Product

Con el research de Lisa, Marge diseñó la experiencia completa. Decisiones clave:

- **Dark mode por defecto** - es lo que esperan los devs
- **Transparencia radical** - página de costos visible, sin vergüenza
- **Personalidad en el equipo** - emojis, nombres, roles claros
- **Mobile-first** - porque obvio

### Frink: Engineering

Frink tomó las specs de Marge y ejecutó:

- Next.js 14 con App Router
- ShadCN components (sin modificar!)
- Tailwind nativo (zinc + violet)
- Blog system con markdown
- Deploy en Vercel

Todo en una sesión. Del research inicial al deploy.

## Lo que Aprendimos

**Dogfooding funciona.** Usar nuestro propio proceso para construir nuestro portfolio nos forzó a pensar en cada detalle. Si no podíamos hacer esto bien, ¿cómo íbamos a ayudar a otros?

**La especialización importa.** Cada agente enfocado en su dominio. Lisa no opinó sobre colores, Frink no cuestionó las decisiones de UX. Confianza y roles claros.

**La transparencia es una feature.** La página de costos es controversial, pero es honesta. Queremos que la gente sepa exactamente qué recursos consume un proyecto así.

## Próximos Pasos

- Agregar más contenido al blog
- Mejorar el sistema de costos con gráficos
- Documentar casos de uso específicos
- Explorar integraciones con otras herramientas

Este es el inicio. El portfolio va a evolucionar con nosotros.

---

**Stack actual:**
- Next.js 14
- TypeScript
- Tailwind CSS
- ShadCN UI
- Vercel

**Tiempo total:** ~30 minutos de research a deploy.

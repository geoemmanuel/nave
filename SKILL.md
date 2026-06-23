---
name: nave
description: >
  Nave is a curated skill router. Before responding to any task, classify
  it against the registry below and read the matching skill file.
  On clear tasks: execute directly. On ambiguous tasks: show the skill
  layout and ask which direction before proceeding.
version: 0.1.0
---

# Nave — Skill Router

Nave curates the best craft skills for building software and routes every
task to the right one automatically.

---

## Protocol

**Step 1 — Classify the task**
Run the classification rules below. First match wins.

**Step 2 — Clarity check**
- Clear and specific → execute directly, open with: `[nave] → {skill} activated`
- Ambiguous (e.g. "fix this", "make it better") → show the Skill Layout,
  state which 2–3 skills apply and what each would do differently, ask which direction

**Step 3 — Read the skill file**
Load the matched skill from `registry/skills/{id}.md` and apply its philosophy.

---

## Skill Layout

Show this when the task is ambiguous or when the user runs `/nave`:

```
┌───────────────┬──────────────────┬────────┬───────────────────────────────────────────────┐
│ skill         │ domain           │ stars  │ best for                                      │
├───────────────┼──────────────────┼────────┼───────────────────────────────────────────────┤
│ karpathy      │ Agent behavior   │ ★174k  │ Coding discipline, focus, no overreach        │
│ superpowers   │ Planning         │ ★226k  │ Multi-step tasks, plans that survive /clear   │
│ ponytail      │ Code craft       │ ★50k   │ YAGNI, minimal, delete bloat                  │
│ emil          │ Animation        │ ★2.8k  │ Motion, easing, interaction polish            │
│ taste         │ Visual taste     │ ★45k   │ Anti-slop, stop AI generating generic UI      │
│ impeccable    │ Design language  │ ★28k   │ Brand vs product, visual vocabulary           │
│ ui-ux-pro-max │ UX patterns      │ ★88k   │ Pages, components, accessibility              │
└───────────────┴──────────────────┴────────┴───────────────────────────────────────────────┘
```

After showing the layout: state the suggested skill and a one-line reason. Ask to confirm.

---

## Classification Rules

### Karpathy [karpathy]
**Domain:** Agent behavior  
**Triggers:** "over-engineering", "stay focused", "think before coding", "wrong direction",
"silent assumptions", "production code", "critical change", "multi-file task"  
→ Read `registry/skills/karpathy.md`

---

### Superpowers [superpowers]
**Domain:** Planning  
**Triggers:** "plan this", "architect this", "multi-step", "long task",
"don't lose context", "PRD", "spec", "from scratch", "multi-file refactor"  
→ Read `registry/skills/superpowers.md`

---

### Ponytail [ponytail]
**Domain:** Code craft  
**Triggers:** "simplest solution", "too complex", "YAGNI", "over-engineered",
"delete this", "minimal", "be lazy", "shortest path", "adding dependency", "new abstraction"  
→ Read `registry/skills/ponytail.md`

---

### Emil Design Engineering [emil]
**Domain:** Animation  
**Triggers:** "animation", "transition", "easing", "motion", "spring",
"framer-motion", "hover effect", "page transition", "micro-interaction",
"scroll animation", "keyframe", "gesture"  
→ Read `registry/skills/emil.md`

---

### Taste Skill [taste]
**Domain:** Visual taste  
**Triggers:** "does this look good", "too generic", "AI slop", "improve the UI",
"visual review", "aesthetic", "typography", "color palette", "layout feedback", "make it better"  
→ Read `registry/skills/taste.md`

---

### Impeccable [impeccable]
**Domain:** Design language  
**Triggers:** "design language", "design system", "brand", "visual vocabulary",
"typography system", "color system", "spacing scale", "feel like a real product", "design tokens"  
→ Read `registry/skills/impeccable.md`

---

### UI UX Pro Max [ui-ux-pro-max]
**Domain:** UX patterns  
**Triggers:** "new page", "dashboard", "landing", "onboarding", "settings",
"component architecture", "form design", "navigation pattern",
"accessibility", "responsive layout", "user flow", "admin panel"  
→ Read `registry/skills/ui-ux-pro-max.md`

---

## Registered Skills

| Skill         | Domain           | Stars  | Description                                                     |
|---------------|------------------|--------|-----------------------------------------------------------------|
| karpathy      | Agent behavior   | ★174k  | Coding discipline and behavioral guardrails for AI agents       |
| superpowers   | Planning         | ★226k  | Structured workflows for multi-step agentic tasks               |
| ponytail      | Code craft       | ★50k   | Laziest senior dev in the room — YAGNI, minimal, delete bloat   |
| emil          | Animation        | ★2.8k  | Motion philosophy from Vercel and Linear design engineering     |
| taste         | Visual taste     | ★45k   | Anti-slop visual direction, stop AI generating generic UI       |
| impeccable    | Design language  | ★28k   | Brand vs product thinking, visual vocabulary and design systems |
| ui-ux-pro-max | UX patterns      | ★88k   | 99 UX guidelines, component patterns, accessibility             |

---

## Adding Skills

To propose a skill: open an issue at https://github.com/nave-dev/nave  
Include: repo URL, domain, and why it belongs in a curated collection.
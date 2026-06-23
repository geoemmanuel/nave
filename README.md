# nave

A curated skill router for AI coding agents.

Nave detects what you're working on and routes to the right skill — automatically.
Clear task? Executes directly. Ambiguous task? Shows you the options and asks first.

---

## Install

```bash
npx nave
```

Run once in your project root. Nave detects which agent you're using and installs itself.

**Supported agents:** Claude Code, Cursor, OpenCode, Codex CLI, Windsurf, Gemini CLI, Antigravity

---

## What it does

Before responding to any task, nave classifies the request and reads the best matching skill:

| Task | Skill activated |
|---|---|
| "plan this feature out" | superpowers — structured plan, crash-proof |
| "you're over-engineering this" | karpathy — discipline, surgical changes |
| "simplest solution please" | ponytail — laziest senior dev in the room |
| "write this slide animation" | emil — motion philosophy, correct easing |
| "does this look generic?" | taste-skill — anti-slop visual direction |
| "build a design language" | impeccable — brand vs product thinking |
| "design this settings page" | ui-ux-pro-max — 99 UX patterns + a11y |

---

## Bundled Skills

| Skill | Author | Stars | Domain |
|---|---|---|---|
| [karpathy](https://github.com/multica-ai/andrej-karpathy-skills) | @multica-ai | 174k | Agent behavior, coding discipline |
| [superpowers](https://github.com/obra/superpowers) | @obra | 226k | Planning, multi-step agentic tasks |
| [ponytail](https://github.com/DietrichGebert/ponytail) | @DietrichGebert | 50k | Code minimalism, YAGNI |
| [emil](https://github.com/emilkowalski/skills) | @emilkowalski | 2.8k | Animation, motion, interaction |
| [taste-skill](https://github.com/Leonxlnx/taste-skill) | @Leonxlnx | 45k | Visual taste, anti-slop |
| [impeccable](https://github.com/pbakaus/impeccable) | @pbakaus | 28k | Design language, brand vs product |
| [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | @nextlevelbuilder | 88k | UX patterns, accessibility |

These authors built exceptional skills. Nave curates and routes between them.
Full credit above — install their skills directly for the complete experience.

---

## Commands

```bash
npx nave              # install into detected agent
npx nave --agent claude   # install for a specific agent
npx nave list         # list all registered skills
```

In your agent after install:

```
/nave                 # show skill registry and suggestion
```

---

## Adding a skill

See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## License

MIT

Skill philosophies are credited to their original authors.
Nave references their work in condensed form — it does not redistribute full skill files.

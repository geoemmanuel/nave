# Nave — Usage Guide

## Installation

### First time in a project

```bash
npx nave
```

Nave scans the project root for agent config directories (`.claude/`, `.cursor/`,
`.opencode/`, etc.) and installs itself into every one it finds.

If multiple agents are detected, Nave installs into all of them. Each gets its own
`SKILL.md` + `registry/skills/` directory.

### Specific agent only

```bash
npx nave --agent claude
npx nave --agent cursor
npx nave --agent opencode
npx nave --agent codex
npx nave --agent windsurf
npx nave --agent gemini
npx nave --agent antigravity
```

### What gets installed

```
.claude/skills/nave/
├── SKILL.md                  ← the router, read by the agent on startup
└── registry/
    └── skills/
        ├── karpathy.md
        ├── superpowers.md
        ├── ponytail.md
        ├── emil.md
        ├── taste.md
        ├── impeccable.md
        └── ui-ux-pro-max.md
```

Same structure for every agent, in their respective skills directory.

---

## How Nave routes

### Clear tasks — direct execution

Nave reads the task, matches it to a skill, and opens the response with:

```
[nave] → ponytail activated
```

Then responds using that skill's philosophy. No friction, no confirmation needed.

**Examples of clear routing:**

| You say | Nave routes to |
|---|---|
| "refactor this to be simpler" | ponytail |
| "add a fade transition here" | emil |
| "plan this auth feature" | superpowers + karpathy |
| "design a dashboard layout" | ui-ux-pro-max + taste-skill |
| "does this look too generic?" | taste-skill + impeccable |

### Ambiguous tasks — suggests first

For tasks like "fix the layout", "make this better", "improve this component",
Nave shows the Skill Layout and asks which direction before executing:

```
[nave] → ambiguous task detected

Two skills could apply here:

• impeccable — audit the design language: typography hierarchy, spacing
  consistency, whether there's a clear signature element

• taste-skill — tune visual direction: check for AI-slop patterns,
  adjust DESIGN_VARIANCE and MOTION_INTENSITY

Which direction, or both?
```

This prevents the agent from silently picking the wrong interpretation.

---

## In-agent command

After installation, run `/nave` in your agent to see the full skill registry
with a suggestion for the current context:

```
/nave
```

---

## Listing skills

```bash
npx nave list
```

Prints all registered skills with domain, stars, and repo link.

---

## Keeping nave up to date

```bash
npx nave@latest
```

Re-runs the installer with the latest registry. Overwrites existing nave files.

---

## How SKILL.md is generated

The root `SKILL.md` and all installed copies are **generated** from
`registry/index.json` at install time. Never edit installed SKILL.md files
by hand — your changes will be overwritten on the next `npx nave`.

To modify routing behavior: edit `registry/index.json` and the skill files
in `registry/skills/`, then run `node install.js generate`.

---

## Troubleshooting

**No agent detected**

Nave looks for `.claude/`, `.cursor/`, `.opencode/`, `.codex/`, `.windsurf/`,
`.gemini/`, `.antigravity/` in the project root. If none exist, set up your
agent first or use `--agent` to specify one manually.

**Skill not triggering**

Check that `SKILL.md` is in the correct path for your agent. Some agents
require the skill to be listed in their settings file — see the config note
printed during install.

**Want to add a skill**

See [CONTRIBUTING.md](./CONTRIBUTING.md).

# Contributing to Nave

Nave is opinionated by design. The registry is small on purpose — every skill
in it should meaningfully improve agent output in a distinct domain.

---

## Adding a skill to the registry

### 1. Open an issue first

Before building anything, open an issue at https://github.com/geoemmanuel/nave
with the title `[skill proposal] {skill-name}` and include:

- Skill repo URL and author
- The domain it covers (one sentence)
- Why it belongs in a curated collection (not just "it exists")
- What it produces differently vs without it — show an example if possible
- GitHub stars / community signal
- Confirmation it is actively maintained

Nave will not merge skills that overlap significantly with existing ones,
have unclear domains, or lack evidence of improving output.

### 2. If approved — add to registry

**`registry/index.json`** — add one entry:

```json
{
  "id": "your-skill-id",
  "name": "Display Name",
  "author": "github-username",
  "repo": "https://github.com/author/repo",
  "stars": "12k",
  "domain": "One clear domain",
  "description": "One sentence: what it does for the agent",
  "triggers": [
    "trigger phrase one",
    "trigger phrase two"
  ],
  "file": "registry/skills/your-skill-id.md"
}
```

**`registry/skills/your-skill-id.md`** — write a condensed reference:

```markdown
# Skill Name
> github.com/author/repo · Xk stars
> Philosophy: one sentence

## Core Principle
...

## Key Rules
...

## Anti-patterns
...
```

The reference should be a condensed distillation — not the full skill file,
not a copy-paste. It should capture the philosophy and the most actionable
rules in under 80 lines.

### 3. Regenerate SKILL.md

```bash
node install.js generate
```

Commit `registry/index.json`, `registry/skills/your-skill-id.md`, and
the regenerated `SKILL.md`.

### 4. Open a pull request

Title: `feat: add {skill-name} skill`

Include a before/after example showing what the agent produces differently
with the skill active.

---

## Adding agent support

To add a new AI coding agent:

1. Add an entry to `agents/index.json`:

```json
{
  "id": "agent-id",
  "name": "Agent Display Name",
  "detect": ".agent-config-dir",
  "skillPath": ".agent-config-dir/skills/nave",
  "configNote": "How to confirm it's picked up"
}
```

2. Test that `npx nave --agent agent-id` installs correctly
3. Open a PR with the change and confirmation it works

---

## What Nave will not accept

- Skills with no SKILL.md or equivalent structured format
- Skills that duplicate an existing nave domain without clear improvement
- Skills without active maintenance or community signal
- Skills that promote harmful patterns (over-engineering, security antipatterns)
- Skills tied to a paid product or service

---

## Code of conduct

Be direct. Be honest about what skills actually improve.
Nave's value is in curation — quality over quantity, always.

#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";

const cwd = process.cwd();

// Load registry and agent configs
const registry = JSON.parse(
  fs.readFileSync(path.join(__dirname, "registry/index.json"), "utf8")
);
const agentConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, "agents/index.json"), "utf8")
);

function log(msg) { process.stdout.write(msg + "\n"); }
function info(msg) { log(`${CYAN}nave${RESET}  ${msg}`); }
function ok(msg) { log(`${GREEN}✓${RESET}     ${msg}`); }
function warn(msg) { log(`${YELLOW}!${RESET}     ${msg}`); }
function err(msg) { log(`${RED}✗${RESET}     ${msg}`); }

// Detect which agents are present in the current project
function detectAgents() {
  return agentConfig.agents.filter((agent) =>
    fs.existsSync(path.join(cwd, agent.detect))
  );
}

// Generate SKILL.md dynamically from registry
function generateSkillMd() {
  const skills = registry.skills;

  const registryTable = skills
    .map(
      (s) =>
        `| ${s.id.padEnd(16)} | ${s.domain.padEnd(16)} | ★${s.stars.padEnd(5)} | ${s.description} |`
    )
    .join("\n");

  const classificationRules = skills
    .map((s) => {
      const triggers = s.triggers.map((t) => `"${t}"`).join(", ");
      return `### ${s.name} [${s.id}]\n**Domain:** ${s.domain}  \n**Triggers:** ${triggers}\n→ Read \`registry/skills/${s.id}.md\``;
    })
    .join("\n\n---\n\n");

  return `---
name: nave
description: >
  Nave is a curated skill router. Before responding to any task, classify
  it against the registry below and read the matching skill file.
  On clear tasks: execute directly. On ambiguous tasks: show the skill
  layout and ask which direction before proceeding.
version: ${registry.version}
---

# Nave — Skill Router

Nave curates the best craft skills for building software and routes every
task to the right one automatically.

---

## Protocol

**Step 1 — Classify the task**
Run the classification rules below. First match wins.

**Step 2 — Clarity check**
- Clear and specific → execute directly, open with: \`[nave] → {skill} activated\`
- Ambiguous (e.g. "fix this", "make it better") → show the Skill Layout below,
  state which 2-3 skills apply and what each would do differently, ask which direction

**Step 3 — Read the skill file**
Load the matched skill from \`registry/skills/{id}.md\` and apply its philosophy.

---

## Skill Layout

Show this when task is ambiguous or when user runs \`/nave\`:

\`\`\`
┌──────────────────┬──────────────────┬───────┬────────────────────────────────────────┐
│ skill            │ domain           │ stars │ best for                               │
├──────────────────┼──────────────────┼───────┼────────────────────────────────────────┤
${skills
  .map(
    (s) =>
      `│ ${s.id.padEnd(16)} │ ${s.domain.padEnd(16)} │ ★${s.stars.padEnd(5)} │ ${s.description.substring(0, 38).padEnd(38)} │`
  )
  .join("\n")}
└──────────────────┴──────────────────┴───────┴────────────────────────────────────────┘
\`\`\`

After showing the layout: state the suggested skill and one-line reason. Ask to confirm.

---

## Classification Rules

${classificationRules}

---

## Registered Skills

| Skill            | Domain           | Stars  | Description |
|---|---|---|---|
${registryTable}

---

## Adding Skills

To propose a skill: open an issue at https://github.com/nave-dev/nave
Include: repo URL, domain, and why it belongs in a curated collection.
`;
}

// Install nave into a target agent directory
function install(agent, targetDir) {
  const absTarget = path.join(cwd, targetDir);

  // Create directories
  fs.mkdirSync(path.join(absTarget, "registry/skills"), { recursive: true });

  // Generate and write SKILL.md
  const skillMd = generateSkillMd();
  fs.writeFileSync(path.join(absTarget, "SKILL.md"), skillMd);

  // Copy all skill reference files
  const skillsDir = path.join(__dirname, "registry/skills");
  const skillFiles = fs.readdirSync(skillsDir);
  for (const file of skillFiles) {
    fs.copyFileSync(
      path.join(skillsDir, file),
      path.join(absTarget, "registry/skills", file)
    );
  }

  ok(`Installed to ${DIM}${targetDir}${RESET}`);
  if (agent.configNote) {
    log(`      ${DIM}${agent.configNote}${RESET}`);
  }
}

// Main
function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  log("");
  log(`  ${BOLD}nave${RESET} ${DIM}v${registry.version}${RESET}`);
  log(`  ${DIM}curated skill router for AI coding agents${RESET}`);
  log("");

  if (cmd === "list") {
    log(`  ${BOLD}Registered skills:${RESET}`);
    log("");
    for (const skill of registry.skills) {
      log(`  ${CYAN}${skill.id.padEnd(18)}${RESET} ${skill.domain.padEnd(18)} ★${skill.stars.padEnd(6)} ${DIM}${skill.repo}${RESET}`);
    }
    log("");
    return;
  }

  if (cmd === "generate") {
    // Just generate SKILL.md in current directory (for repo maintenance)
    const skillMd = generateSkillMd();
    fs.writeFileSync(path.join(cwd, "SKILL.md"), skillMd);
    ok("Generated SKILL.md in current directory");
    return;
  }

  // Default: install
  const detected = detectAgents();

  if (detected.length === 0) {
    warn("No AI coding agent detected in this project.");
    log("");
    log("  Nave looks for: " + agentConfig.agents.map((a) => a.detect).join(", "));
    log("");
    log("  Install your agent first, then run npx nave again.");
    log("  Or specify a target: npx nave --agent claude");
    log("");
    return;
  }

  // --agent flag
  const agentFlag = args.find((a) => a.startsWith("--agent=") || a === "--agent");
  let targets = detected;

  if (agentFlag) {
    const agentId = agentFlag.includes("=")
      ? agentFlag.split("=")[1]
      : args[args.indexOf("--agent") + 1];
    const specific = agentConfig.agents.find((a) => a.id === agentId);
    if (!specific) {
      err(`Unknown agent: ${agentId}`);
      log("  Available: " + agentConfig.agents.map((a) => a.id).join(", "));
      return;
    }
    targets = [specific];
  }

  if (targets.length > 1) {
    info(`Detected ${targets.length} agents: ${targets.map((a) => a.name).join(", ")}`);
  } else {
    info(`Detected: ${targets[0].name}`);
  }

  log("");

  for (const agent of targets) {
    log(`  Installing for ${BOLD}${agent.name}${RESET}...`);
    install(agent, agent.skillPath);
  }

  log("");
  log(`  ${GREEN}${BOLD}Done.${RESET} Nave is live in your project.`);
  log("");
  log(`  ${DIM}Skills installed: ${registry.skills.map((s) => s.id).join(", ")}${RESET}`);
  log(`  ${DIM}Run /nave in your agent to see the skill registry.${RESET}`);
  log("");
}

main();

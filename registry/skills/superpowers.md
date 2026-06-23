# Superpowers — Planning & Multi-step Tasks
> github.com/obra/superpowers · 226k stars

## When to Use
Task has 3+ steps, spans multiple files, or is long enough to risk context loss.

## Plan First
Before any code, write a plan to .nave/plan.md:

  Goal: {one sentence — what done looks like}

  Steps:
  1. {concrete step}
  2. {concrete step}

  Success criteria: {how to verify it's done}
  Files to change: {known files — add as discovered}

Check off steps as completed. Plan survives /clear and context resets.

## Execution Rules
- Complete one step fully before moving to next
- Verify it works after each step
- Blocked: surface it explicitly, never work around silently
- Context reset: re-read plan file, continue from last checked step

## Done Checklist
- All steps checked off
- Tests pass
- No TODO comments unaddressed
- No files in broken intermediate state
- Diff scoped to what was asked

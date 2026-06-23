# Emil Design Engineering — Animation & Motion
> github.com/emilkowalski/skills · 2.8k stars

## Core Principle
Animation should be invisible. When done right, users don't notice it —
they notice the interface feels good.

## Timing
- Micro-interactions (hover, press, toggle): 150-250ms
- Standard transitions (modals, panels): 200-350ms
- Complex sequences (page transitions): 300-500ms

## Easing Rules
- Enter: ease-out (starts fast, decelerates in)
- Exit: ease-in (starts slow, accelerates out)
- Never ease-in for enter. Most common agent mistake.

## Animation Patterns
- Fade + rise: opacity 0 y:8 to opacity 1 y:0
- Scale for emphasis: scale(0.96) + opacity, never scale(0)
- Menus: transform-origin at trigger, scale + opacity from source
- Tooltips: delay on first, instant on subsequent

## Performance
- transform and opacity only. Never animate width, height, top, left.
- CSS for predetermined animations, JS for dynamic/interruptible
- Always respect prefers-reduced-motion

## Common Agent Mistakes
- ease-in on enter (should be ease-out)
- scale(0) as start (use scale(0.96))
- Missing transform-origin on menus
- All tooltips with same delay

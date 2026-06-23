# UI UX Pro Max — Patterns & Accessibility
> github.com/nextlevelbuilder/ui-ux-pro-max-skill · 88k stars

## Page-Level Rules
- One primary action per view
- Above the fold: answer "what is this and what do I do"
- Progressive disclosure: hide complexity until needed

## Navigation
- Top nav: broad multi-section products
- Side nav: complex tools, dashboards, admin
- Bottom nav: mobile, 3-5 destinations
- Tabs: sibling views at same hierarchy level
- Never mix patterns at the same level

## Forms
- One column (two only for truly paired fields like first/last name)
- Labels above fields, never placeholder-only
- Inline validation on blur, not every keystroke
- Error messages specific: "Enter a valid email" not "Invalid input"

## Buttons
- One primary CTA per view
- Label = verb + noun ("Save changes" not "Submit")
- Min touch target: 44px web / 44pt iOS / 48dp Android

## Modals
- Use for: confirmations, focused tasks
- Avoid for: complex multi-step flows, errors that could be inline
- Always: close button + Escape key + focus trap

## Accessibility Non-negotiables
- Color alone never conveys meaning
- Visible focus indicators on all interactive elements
- aria-label on icon-only buttons
- Min contrast: 4.5:1 body, 3:1 large text

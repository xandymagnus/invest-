# Code Style

## Overview

This document describes the coding conventions currently used in Invest+.

The goal is to maintain consistency, readability, and maintainability throughout the project.

## JavaScript

### Naming Conventions

- Variables and functions use `camelCase`.
- File names use `camelCase`.
- Constants representing DOM elements follow descriptive `camelCase` names.
- CSS classes and HTML IDs use descriptive names, generally following kebab-case.

Examples:

```javascript
const transactionTable = document.getElementById("transaction-body");

function displayTransaction(transaction) {
    // Function implementation
}
```

### Functions

- Use descriptive function names.
- Keep functions focused on a specific responsibility.
- Export functions when they need to be accessed by other modules.

### Modules

The project uses JavaScript ES Modules.

- Use `export` to expose functions.
- Use `import` to access functionality from other modules.
- Include the `.js` extension in browser module imports.

### Formatting

- Use four spaces for indentation.
- Use semicolons at the end of statements.
- Use double quotes for strings.
- Separate logical sections with blank lines.
- Use comments to explain relevant operations.

## HTML

- Use semantic HTML elements whenever appropriate.
- Use descriptive IDs and class names.
- Use lowercase HTML tags.
- Use indentation to represent element hierarchy.
- Keep document structure organized.

## CSS

- Use descriptive class and ID selectors.
- Use CSS variables for reusable values.
- Keep layout, spacing, and visual styles organized.
- Use the `.hidden` class to control element visibility through JavaScript.

### CSS Variables

Reusable visual properties are centralized in `variables.css`.

These include:

- Colors.
- Font sizes.
- Spacing values.
- Border radii.
- Shadows.
- Table borders.

## Comments

Comments should explain relevant implementation details, especially when the purpose of an operation may not be immediately clear.

## Documentation

Project documentation is written in English to maintain consistency with code identifiers and technical terminology.
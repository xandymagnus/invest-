# Code Style Guidelines

## Overview

This document defines the coding conventions used throughout the Invest+ project.

The goal is to maintain consistency, readability, and maintainability.

## General Guidelines

- Write code using clear and descriptive names.
- Prefer simplicity over unnecessary complexity.
- Keep functions focused on a single responsibility.
- Avoid duplicated code whenever possible.
- Use comments to explain intent when necessary.

## JavaScript

### Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase | `transactionValue` |
| Functions | camelCase | `calculateBalance()` |
| Classes | PascalCase | `TransactionManager` |
| Constants | camelCase | `maximumValue` |
| Files | camelCase | `transactionModel.js` |

### Formatting

- Use 4 spaces for indentation.
- Use semicolons at the end of statements.
- Use double quotes for strings.
- Use meaningful variable and function names.
- Separate logical sections with blank lines.

### Modules

- Use ES Modules with `import` and `export`.
- Prefer named exports for shared functionality.
- Use explicit `.js` extensions in relative imports.
- Keep module responsibilities clearly separated.

### Functions

- Each function should have a clear purpose.
- Prefer descriptive function names.
- Avoid unnecessarily large functions.

## HTML

- Use semantic HTML elements whenever appropriate.
- Use lowercase element names.
- Use descriptive and meaningful IDs and classes.
- Use kebab-case for IDs and CSS classes.

Example:

```html
<section class="transaction-list">
    <h2>Transactions</h2>
</section>
```

## CSS

### Naming Conventions

Use kebab-case for classes, IDs, and custom properties.

Examples:

```css
.transaction-list {}
.balance-summary {}
--primary-color: #000;
```

### Formatting

- Use 4 spaces for indentation.
- Keep selectors organized.
- Group related styles together.
- Prefer reusable classes over duplicated declarations.

## Comments

Comments should explain the purpose of a section or clarify decisions that may not be immediately obvious.

Avoid comments that simply repeat what the code already expresses.

## Documentation

Documentation files should be written in English and use Markdown.

Update the relevant documentation whenever a significant architectural or structural change occurs.
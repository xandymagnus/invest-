# Project Structure

## Overview

This document describes the directory organization of Invest+ and the responsibilities assigned to each folder and file.

## Directory Tree

```text
invest-plus/
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── PROJECT_STRUCTURE.md
│   ├── CODE_STYLE.md
│   ├── DATA_MODEL.md
│   └── ROADMAP.md
│
├── tests/
│   ├── models/
│   ├── utils/
│   └── views/
│
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   └── vaiiables.css
│   │
│   ├── js/
│   │   ├── models/
│   │   │   ├── transactionModel.js
│   │   │   └── balanceModel.js
│   │   │
│   │   ├── views/
│   │   │   ├── transactionView.js
│   │   │   ├── summaryView.js
│   │   │   └── formView.js
│   │   │
│   │   ├── controllers/
│   │   │   └── transactionController.js
│   │   │
│   │   ├── utils/
│   │   │   └── date.js
│   │   │
│   │   └── main.js
│   │
│   └── assets/
│       ├── images/
│       └── icons/
│
├── index.html
├── README.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

## Root Directory

| File / Folder | Responsibility |
|---|---|
| `docs/` | Project documentation. |
| `tests/` | Automated tests. |
| `src/` | Application source files. |
| `index.html` | Main HTML document. |
| `README.md` | Project introduction and setup instructions. |
| `CHANGELOG.md` | Record of relevant project changes. |
| `LICENSE` | Project licensing information. |
| `.gitignore` | Files and folders excluded from Git tracking. |

## Source Directory

### CSS

Contains stylesheets used by the application.

- `reset.css`: Resets browser default styles.
- `style.css`: Contains the application's visual styles.
- `variables.css`: Contains variables for style.css.

### JavaScript

Contains the application's logic, divided into modules.

#### Models

Responsible for data and business rules.

- `transactionModel.js`: Transaction creation and validation.
- `balanceModel.js`: Balance calculation.

#### Views

Responsible for DOM manipulation and visual presentation.

- `transactionView.js`: Displays transactions.
- `summaryView.js`: Displays financial summaries.
- `formView.js`: Manages transaction forms and related interface elements.

#### Controllers

Responsible for coordinating user interactions.

- `transactionController.js`: Handles transaction-related events and coordinates Models and Views.

#### Utils

Contains reusable helper functions.

- `date.js`: Provides date-related functionality.

#### Main

- `main.js`: Application entry point and controller initialization.

### Assets

Contains static resources used by the interface.

- `images/`: Image files.
- `icons/`: Icon files.

## Tests Directory

Contains automated tests organized according to the application modules.

Test files should follow the naming convention:

`moduleName.test.js`

Examples:

- `balanceModel.test.js`
- `transactionModel.test.js`
- `date.test.js`

Tests should be organized by the component they verify.
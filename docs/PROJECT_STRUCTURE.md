# Project Structure

## Overview

The project is organized into documentation, source code, assets, tests, and configuration files.

```text
invest-plus/
│
├── .vscode/
│   ├── launch.json
│   └── settings.json
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CODE_STYLE.md
│   ├── DATA_MODEL.md
│   ├── PROJECT_STRUCTURE.md
│   └── ROADMAP.md
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │       └── template.png
│   │
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   └── variables.css
│   │
│   ├── html/
│   │   ├── expensesByCategory.html
│   │   └── management.html
│   │
│   └── js/
│       ├── controllers/
│       │   └── transactionController.js
│       │
│       ├── models/
│       │   ├── balanceModel.js
│       │   └── transactionModel.js
│       │
│       ├── utils/
│       │   └── date.js
│       │
│       ├── views/
│       │   ├── formView.js
│       │   ├── summaryView.js
│       │   └── transactionView.js
│       │
│       └── main.js
│
├── tests/
│   ├── models/
│   ├── utils/
│   └── views/
│
├── .gitignore
├── CHANGELOG.md
├── index.html
├── LICENSE
└── README.md
```

## Root Directory

- `index.html`: Main application page.
- `README.md`: Project overview and instructions.
- `CHANGELOG.md`: Records notable project changes.
- `LICENSE`: Defines usage, modification, and distribution permissions.
- `.gitignore`: Specifies files and directories excluded from Git tracking.
- `.vscode/`: Contains Visual Studio Code workspace configuration.
- `docs/`: Contains technical project documentation.
- `src/`: Contains the application's source code and assets.
- `tests/`: Reserved for project tests.
- `.gitignore`: Specifies files and directories that Git should ignore, including virtual environments, editor settings, and selected configuration and asset files.

## Documentation Directory

- `ARCHITECTURE.md`: Explains the application architecture and module responsibilities.
- `CODE_STYLE.md`: Defines coding conventions.
- `DATA_MODEL.md`: Documents application data structures and rules.
- `PROJECT_STRUCTURE.md`: Describes the project organization.
- `ROADMAP.md`: Tracks implemented and planned features.

## Source Directory

### assets/

Stores resources used by the application.

- `icons/`: Reserved for icon assets.
- `images/`: Stores image resources, including `template.png`.

### css/

Contains the application's stylesheets.

- `reset.css`: Resets default browser styles.
- `variables.css`: Defines reusable CSS variables.
- `style.css`: Contains the main application styles.

### html/

Contains additional application pages.

- `expensesByCategory.html`: Planned page for expense visualization by category.
- `management.html`: Planned page for financial management.

Both files are currently empty.

### js/

Contains the JavaScript application.

#### controllers/

- `transactionController.js`: Handles transaction-related interactions and coordinates Models and Views.

#### models/

- `balanceModel.js`: Calculates the accumulated financial balance.
- `transactionModel.js`: Validates transaction values and creates transaction objects.

#### utils/

- `date.js`: Retrieves and formats the current date.

#### views/

- `formView.js`: Controls transaction forms and input values.
- `summaryView.js`: Displays the current balance.
- `transactionView.js`: Creates and displays individual transaction rows.

#### main.js

Initializes the application by executing the transaction controller.

## Tests Directory

The `tests/` directory is reserved for automated tests. Its current contents and testing strategy have not yet been defined.
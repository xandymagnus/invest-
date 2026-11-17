# Invest+

Invest+ is a personal finance management application designed to help users organize and monitor their income and expenses through a simple and intuitive interface.

## Features

### Currently Implemented
- Register income transactions.
- Register expense transactions.
- Validate transaction values.
- Display transactions in a structured table.
- Display transaction type, value, and date.
- Calculate and display the current balance.
- Dynamically create individual table rows for each transaction.

### Planned Features
- Edit and delete transactions.
- Expense visualization by category.
- Monthly financial management.
- Category, account, and label management.
- Transaction search and filtering.
- Data persistence.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)

## Project Architecture

The application follows a lightweight MVC-inspired architecture, separating responsibilities into:

- **Models:** Data structures, validation, and financial calculations.
- **Views:** DOM manipulation and visual presentation.
- **Controllers:** Event handling and coordination between application components.
- **Utils:** Reusable utility functions.

## Getting Started

1. Clone the repository.
2. Open the project in your preferred code editor.
3. Run the application using a local development server, such as the VS Code Live Server extension.
4. Open `index.html` through the local server.

A local server is required for proper ES Module loading in the browser.

## Project Documentation

Additional technical documentation is available in the `docs/` directory:

- `ARCHITECTURE.md`
- `PROJECT_STRUCTURE.md`
- `CODE_STYLE.md`
- `DATA_MODEL.md`
- `ROADMAP.md`

## Development Status

Invest+ is currently under development. Its initial functionality focuses on transaction registration, balance calculation, and dynamic transaction rendering.

## License

See the `LICENSE` file for information about usage, distribution, and modification permissions.
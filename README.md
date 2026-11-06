# Invest+

A personal finance management application designed to help users track their income, expenses, and financial activity through a simple and organized interface.

## Overview

Invest+ aims to provide a practical way to manage personal finances, monitor spending habits, and understand financial activity.

The project is currently under development, starting with its core transaction management features.

## Features

### Current
- Add income transactions.
- Add expense transactions.
- Display transaction dates.
- Calculate the current balance.
- Separate application responsibilities using a modular architecture.

### Planned
- Monthly financial summaries.
- Spending charts by category.
- Custom transaction categories and tags.
- Bank account management.
- Transaction search and filtering.
- Planned vs. actual expense comparison.
- Persistent data storage.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)

## Project Architecture

The application follows a lightweight MVC-inspired architecture:

- **Models:** Handle application data and business rules.
- **Views:** Manage DOM elements and visual presentation.
- **Controllers:** Coordinate user interactions, Models, and Views.
- **Utils:** Provide reusable helper functions.

## Project Structure

See [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) for a detailed explanation of the directory organization.

For architectural decisions and application flow, see [ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Getting Started

1. Clone this repository.
2. Open the project using a local development server, such as VS Code Live Server.
3. Access the application through the local server URL.

The application uses JavaScript ES Modules, so it should be served through a local web server rather than opened directly using the `file://` protocol.

## Development Status

Invest+ is an ongoing personal development project. Features, architecture, and documentation may evolve as development progresses.

## License

See the [LICENSE](LICENSE) file for license information.
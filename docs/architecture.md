# Architecture

## Overview

Invest+ follows a lightweight MVC-inspired architecture using JavaScript ES Modules.

The application separates its responsibilities into four main areas:

- Models
- Views
- Controllers
- Utils

This organization helps maintain separation of concerns and makes the code easier to understand, maintain, and expand.

## Architecture Layers

### 1. Models

The Models layer handles application data and financial operations.

**Files:**
- `balanceModel.js`
- `transactionModel.js`

Responsibilities:

- Validate transaction values.
- Create transaction objects.
- Calculate the accumulated financial balance.

Models do not directly manipulate the DOM.

### 2. Views

The Views layer handles the application's visual representation and DOM manipulation.

**Files:**
- `formView.js`
- `summaryView.js`
- `transactionView.js`

Responsibilities:

- Control the visibility of transaction forms.
- Retrieve and clear input values.
- Display transactions in the HTML table.
- Display the calculated balance.

The Views layer is responsible for presenting information, not coordinating the application's overall workflow.

### 3. Controllers

The Controllers layer coordinates user interactions and communication between Models and Views.

**File:**
- `transactionController.js`

Responsibilities:

- Register event listeners.
- Handle income and expense form interactions.
- Request transaction validation.
- Coordinate transaction creation and display.
- Request balance updates.
- Update the interface through the Views layer.

### 4. Utils

The Utils layer contains reusable functions that do not belong exclusively to a specific MVC layer.

**File:**
- `date.js`

Responsibility:

- Retrieve and format the current date.

## Application Entry Point

**File:** `main.js`

The main file initializes the application by importing and executing the transaction controller.

It acts as the entry point for the JavaScript application.

## Application Flow

The transaction registration process follows this sequence:

1. The user selects whether to register income or an expense.
2. The Controller handles the interaction.
3. The Controller retrieves the input values through the Form View.
4. The Model validates the transaction value.
5. The Model creates the transaction object.
6. The Transaction View creates a new table row and displays the transaction.
7. The Balance Model calculates the updated balance.
8. The Summary View displays the new balance.

## Module Communication

The application uses ES Modules through `import` and `export` statements.

Each module exports only the functions or references required by other modules, helping keep responsibilities separated.

## Architectural Principles

- Separation of concerns.
- Reusable functions.
- Independent modules.
- Centralized application initialization.
- Separation between data processing and DOM manipulation.

## Future Considerations

As the application grows, additional modules may be introduced for transaction editing, deletion, data persistence, filtering, and financial reporting.
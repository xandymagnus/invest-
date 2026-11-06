# Architecture

## Overview

Invest+ uses a lightweight MVC-inspired architecture to organize application responsibilities and improve maintainability.

The architecture separates data management, visual presentation, and user interaction into independent modules.

## Architectural Pattern

The project is organized around three main components:

### Model

Responsible for application data and business rules.

Responsibilities:
- Validate transaction values.
- Create transaction objects.
- Calculate the current balance.
- Manage data-related operations.

Location: `src/js/models/`

### View

Responsible for the visual representation of application data and the manipulation of DOM elements.

Responsibilities:
- Display transactions.
- Update the balance displayed on the interface.
- Show and hide forms.
- Manage visual elements.

Location: `src/js/views/`

### Controller

Responsible for handling user interactions and coordinating communication between Models and Views.

Responsibilities:
- Register event listeners.
- Receive user actions.
- Request operations from Models.
- Request interface updates from Views.

Location: `src/js/controllers/`

## Supporting Modules

### Utils

Contains reusable helper functions that do not belong exclusively to the Model, View, or Controller layers.

Location: `src/js/utils/`

### Main Entry Point

The `main.js` file acts as the application's entry point.

It imports and initializes the required controllers.

Location: `src/js/main.js`

## Application Flow

The general interaction flow follows this sequence:

1. The user interacts with the interface.
2. The Controller receives the event.
3. The Controller obtains the required information through the Views.
4. The Model processes or validates the information.
5. The Controller requests the corresponding visual update.
6. The View updates the DOM.

## Module System

The project uses JavaScript ES Modules.

Modules communicate through named exports and imports, allowing each file to expose only the functionality required by other parts of the application.

The HTML entry point loads the application using `type="module"`.

## Architectural Principles

- Separation of responsibilities.
- Reusable modules.
- Low coupling between components.
- Clear module dependencies.
- Maintainable project structure.

## Future Considerations

As the application grows, the architecture may be extended to support persistent storage, additional financial features, and automated tests.
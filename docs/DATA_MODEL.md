# Data Model

## Overview

This document describes the main data structures used by Invest+.

The application currently focuses on financial transactions and balance calculations.

## Transaction

A transaction represents a financial operation, such as income or expense.

### Attributes

| Attribute | Type | Description |
|---|---|---|
| `type` | String | Transaction type: `income` or `expense`. |
| `value` | Number | Monetary value of the transaction. |
| `date` | String | Date associated with the transaction. |

### Example

```javascript
{
    type: "income",
    value: 500,
    date: "11/6/2026"
}
```

## Transaction Types

### Income

Represents money received.

Income transactions increase the total balance.

### Expense

Represents money spent.

Expense transactions decrease the total balance.

## Balance

The balance represents the difference between all income and expenses.

### Calculation

```text
Balance = Total Income - Total Expenses
```

The current implementation uses a generator function to maintain the calculated balance as transactions are processed.

## Data Validation

Transaction values must satisfy the following conditions:

- The value must be greater than zero.
- The value must not exceed 1,000,000,000.

## Future Considerations

The data model may be extended with additional attributes, such as:

- Transaction ID.
- Description.
- Category.
- Tags.
- Bank account.
- Payment method.

Persistent storage and additional relationships may be introduced as the project evolves.
# Data Model

## Overview

Invest+ currently uses JavaScript objects to represent financial transactions.

The application supports two transaction types:

- Income
- Expense

## Transaction Object

Transactions are created through the `createTransaction()` function in `transactionModel.js`.

### Structure

```javascript
{
    type: "income",
    date: "11/17/2026",
    value: 150
}
```

### Properties

| Property | Type | Description |
|---|---|---|
| `type` | String | Transaction classification: `income` or `expense`. |
| `date` | String | Date associated with the transaction. |
| `value` | Number | Monetary transaction value. |

## Transaction Validation

The `isValidTransactionValue()` function validates transaction values.

A value is considered valid when:

- It is greater than zero.
- It is less than or equal to 1,000,000,000.

```javascript
value > 0 && value <= 1e+9
```

## Date Format

The `getCurrentDate()` function retrieves the current date using JavaScript's `Date` object.

The returned format is:

```text
MM/DD/YYYY
```

## Balance Calculation

The balance is calculated by the `calculate()` generator function in `balanceModel.js`.

The calculation follows this rule:

```text
New Balance = Previous Balance + Income - Expense
```

The initial balance is zero.

The generator maintains the accumulated balance between calls and receives the income and expense values through its `next()` method.

## Current Data Handling

Currently:

- Transactions are represented as JavaScript objects.
- Transaction information is rendered dynamically in the HTML table.
- The accumulated balance is maintained in memory.
- Data persistence has not yet been implemented.

Refreshing the page resets the application's in-memory transaction data and calculated balance.

## Future Considerations

The transaction model may be expanded with additional properties, such as:

- Transaction identifier.
- Category.
- Account.
- Label.
- Description.
- Payment method.

These properties are not currently part of the implemented transaction object.
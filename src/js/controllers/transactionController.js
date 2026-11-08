// Models
import { calculate } from "../models/balanceModel.js";
import {
    isValidTransactionValue,
    createTransaction
} from "../models/transactionModel.js";

// Views
import {
    buttonAdd,
    buttonIncome,
    buttonExpense,
    buttonSend,
    toggleAddOptions,
    showIncomeForm,
    showExpenseForm,
    returnToAddButton,
    getIncomeValue,
    getExpenseValue,
    clearIncomeInput,
    clearExpenseInput
} from "../views/formView.js";

import { displayTransaction } from "../views/transactionView.js";
import { displayBalance } from "../views/summaryView.js";

// Utils
import { getCurrentDate } from "../utils/date.js";

export function initializeTransactionController() {

    // Initialize balance generator
    const totalGenerator = calculate();
    totalGenerator.next();

    // Show income and expense options
    buttonAdd.addEventListener("click", event => {
        event.preventDefault();
        toggleAddOptions();
    });

    // Show income form
    buttonIncome.addEventListener("click", event => {
        event.preventDefault();
        showIncomeForm();
    });

    // Show expense form
    buttonExpense.addEventListener("click", event => {
        event.preventDefault();
        showExpenseForm();
    });

    // Send transaction
    buttonSend.forEach(button =>
        button.addEventListener("click", event => {
            event.preventDefault();

            const incomeValue = getIncomeValue();
            const expenseValue = getExpenseValue();

            let validate = false;

            // Validate income
            if (isValidTransactionValue(incomeValue)) {
                const income = createTransaction(
                    getCurrentDate(),
                    "income",
                    tag || undefined,
                    type || undefined,
                    incomeValue,
                );

                displayTransaction(income);
                clearIncomeInput();

                validate = true;
            }

            // Validate expense
            if (isValidTransactionValue(expenseValue)) {
                const expense = createTransaction(
                    getCurrentDate(),
                    "expense",
                    tag || undefined,
                    type || undefined,
                    expenseValue,
                );

                displayTransaction(expense);
                clearExpenseInput();

                validate = true;
            }

            // Update balance
            if (validate) {
                const nextTotal = totalGenerator.next({
                    income: incomeValue,
                    expense: expenseValue
                }).value;

                displayBalance(nextTotal);
                returnToAddButton();
            }
        }));
}
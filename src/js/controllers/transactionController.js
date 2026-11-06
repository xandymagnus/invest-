// Locals modules
import { calculate } from "../models/balanceModel";
import { displayBalance } from "../views/summaryView";
import { displayOptions } from "../views/transactionView";

// Buttons
const buttonSend = document.querySelectorAll(".send-value");

const nextTotal = totalGenerator.next({
    income: incomeValue,
    expense: expenseValue
}).value;

displayBalance(nextTotal);

[...buttonSend].forEach(element => element.addEventListener("click", event => {
    event.preventDefault();

    displayOptions();
}))
// Buttons
export const buttonAdd = document.getElementById("choose");
export const buttonIncome = document.getElementById("income-btn");
export const buttonExpense = document.getElementById("expense-btn");
export const buttonSend = document.querySelectorAll(".send-value");

// Divs
const divAdd = document.getElementById("add-div");
const divIncome = document.querySelector(".add-income");
const divExpense = document.querySelector(".add-expense");

// Inputs
const inputIncome = document.querySelector(".input-income");
const inputExpense = document.querySelector(".input-expense");

// Display options
export function toggleAddOptions() {
    divAdd.classList.toggle("hidden");

    if (buttonAdd.textContent === "Add ˅") {
        buttonAdd.textContent = "Add ˄";
    } else {
        buttonAdd.textContent = "Add ˅";
    }
}

// Show income form
export function showIncomeForm() {
    buttonAdd.classList.add("hidden");
    divAdd.classList.add("hidden");
    divIncome.classList.remove("hidden");
}

// Show expense form
export function showExpenseForm() {
    buttonAdd.classList.add("hidden");
    divAdd.classList.add("hidden");
    divExpense.classList.remove("hidden");
}

// Return to add button
export function returnToAddButton() {
    divIncome.classList.add("hidden");
    divExpense.classList.add("hidden");
    buttonAdd.classList.remove("hidden");
}

// Get input values
export function getIncomeValue() {
    return Number(inputIncome.value) || 0;
}

export function getExpenseValue() {
    return Number(inputExpense.value) || 0;
}

// Clear inputs
export function clearIncomeInput() {
    inputIncome.value = "";
}

export function clearExpenseInput() {
    inputExpense.value = "";
}
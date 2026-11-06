// Buttons
const buttonAdd = document.getElementById("choose");
const buttonIncome = document.getElementById("income-btn");
const buttonExpense = document.getElementById("expense-btn");

// Inputs
const inputIncome = document.querySelector(".input-income");
const inputExpense = document.querySelector(".input-expense");

export function displayOptions() {
    divAdd.classList.toggle("hidden");
        if (buttonAdd.textContent === "Add ˅"){
            buttonAdd.textContent = "Add ˄";
        } else {
            buttonAdd.textContent = "Add ˅"
        }
}

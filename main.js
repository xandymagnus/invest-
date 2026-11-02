// Buttons
const buttonAdd = document.getElementById("choose");
const buttonIncome = document.getElementById("income-btn");
const buttonExpense = document.getElementById("expense-btn");
const buttonSend = document.querySelectorAll(".send-value");
console.log([...buttonSend]);


// Divs
const divAdd = document.getElementById("add-div");
const divIncome = document.querySelector(".add-income");
const divExpense = document.querySelector(".add-expense");

// Inputs
const inputIncome = document.querySelector(".input-income");
const inputExpense = document.querySelector(".input-expense");

// Display infos
const list = document.getElementById("list");
const result = document.getElementById("result");

// Forms
const form = document.getElementById("form");

// State generator initialization
const totalGenerator = calculate();
totalGenerator.next();

// Show income and expense options
buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    divAdd.classList.toggle("hidden");
    if (buttonAdd.textContent === "Add ˅"){
        buttonAdd.textContent = "Add ˄";
    } else {
        buttonAdd.textContent = "Add ˅"
    }
});

// Show only income div
buttonIncome.addEventListener("click", (event) => {
    event.preventDefault();

    [buttonAdd, divAdd, divIncome].forEach(element => element.classList.toggle("hidden")); // cross array and toggle class "hidden"
});

// Show only expense div
buttonExpense.addEventListener("click", (event) => {
    event.preventDefault();

    [buttonAdd, divAdd, divExpense].forEach(element => element.classList.toggle("hidden")); // cross array and toggle class "hidden"
});

// Add send button who spreaded by two divs
[...buttonSend].forEach(element => element.addEventListener("click", (event) => {
    event.preventDefault();

    let validate = false; // If conditions on "Validation" don't come true, the total will not print. Without this logic, without any value at start the value <p> will apper

    // Inputs values
    const incomeValue = Number(inputIncome.value) || 0;
    const expenseValue = Number(inputExpense.value) || 0;
    
    // Global Details
    const date = document.createElement("span"); // Create span element to show the current day inline
    
    // Validation
    if (incomeValue > 0 && incomeValue <= 1e+9) {
        newIncome = document.createElement("li");
        newIncome.classList.add("income");

        const incomeText = document.createElement("span");
        incomeText.innerText = `Income - ${incomeValue}`;
        
        date.innerText = `🗓️ (${getCurrentDate()})`;
        date.classList.add("date");

        newIncome.append(incomeText, date); // Add income's value and other details to income card 

        list.appendChild(newIncome);
        inputIncome.value = "";

        // Toggle to initial screen
        divIncome.classList.toggle("hidden");
        buttonAdd.classList.toggle("hidden");

        validate = true;
    };
    
    // Validation
    if (expenseValue > 0 && expenseValue <= 1e+9) {
        newExpense = document.createElement("li");
        newExpense.classList.add("expense");

        const expenseText = document.createElement("span");
        expenseText.innerText = `Expense - ${expenseValue}`;

        date.innerText = `🗓️ (${getCurrentDate()})`;
        date.classList.add("date");

        newExpense.append(expenseText, date); // Add expend's value and other details to expend card

        list.appendChild(newExpense);
        inputExpense.value = "";
        
        // Toggle to initial screen
        divExpense.classList.toggle("hidden");
        buttonAdd.classList.toggle("hidden");
        validate = true;
    };

    if (validate){
        // Send the input values to update the generator state
        const nextTotal = totalGenerator.next({ income: incomeValue, expense: expenseValue }).value
        result.innerHTML = `Total: ${nextTotal.toFixed(2)}`; // Print total value returned by the function
    }
}));

function* calculate() {
    // Initialize the total accumulated balance
    let total =  0;
    
    while (true) {
        // Save data state and use the objects to calculate
        const data = yield total;
        total = total + data.income - data.expense;
    };
};

function getCurrentDate() {
    const date = new Date();
    
    // Gets current month / day / year and format them
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}
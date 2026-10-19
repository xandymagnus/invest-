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

    // Inputs values
    const incomeValue = Number(inputIncome.value) || 0;
    const expenseValue = Number(inputExpense.value) || 0;
    
    // Validation
    if (incomeValue > 0) {
        newIncome = document.createElement("li");
        newIncome.innerText = `Income - ${incomeValue}`;
        list.appendChild(newIncome);
        inputIncome.value = "";

        divIncome.classList.toggle("hidden");
        buttonAdd.classList.toggle("hidden");
    };
    
    // Validation
    if (expenseValue > 0) {
        newexpense = document.createElement("li");
        newexpense.innerText = `expense - ${expenseValue}`; 
        list.appendChild(newexpense);
        inputExpense.value = "";
        
        divExpense.classList.toggle("hidden");
        buttonAdd.classList.toggle("hidden");
    };

    // Send the input values to update the generator state
    const nextTotal = totalGenerator.next({ income: incomeValue, expense: expenseValue }).value
    result.innerHTML = `Total: ${nextTotal.toFixed(2)}`; // Print total value returned by the function
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
// Inputs
const inputIncome = document.querySelector('.input-income');
const inputExpend = document.querySelector('.input-expend');

// Buttons
const buttonAdd = document.getElementById('add-value');

// Display infos
const list = document.getElementById('list');
const result = document.getElementById('result');

// Forms
const form = document.getElementById('form');

// State generator initialization
const totalGenerator = calculate();
totalGenerator.next()

// Add button listener
buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    // Inputs values
    const incomeValue = Number(inputIncome.value) || 0;
    const expendValue = Number(inputExpend.value) || 0;
    
    // Validation
    if (incomeValue > 0) {
        newIncome = document.createElement('li');
        newIncome.innerText = `Income - ${incomeValue}`;
        list.appendChild(newIncome);
        inputIncome.value = '';
    }
    
    // Validation
    if (expendValue > 0) {
        newExpend = document.createElement('li');
        newExpend.innerText = `Expend - ${expendValue}`; 
        list.appendChild(newExpend);
        inputExpend.value = ''; 
    }

    // Send the input values to update the generator state
    const nextTotal = totalGenerator.next({ income: incomeValue, expend: expendValue }).value
    result.innerHTML = `Total: ${nextTotal}`; // Print total value returned by the function
})

function* calculate() {
    // Initialize the total accumulated balance
    let total =  0;
    
    while (true) {
        // Save data state and use the objects to calculate
        const data = yield total;
        total = total + data.income - data.expend;
    }
}
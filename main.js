const inputIncome = document.querySelector('.input-income');
const inputExpend = document.querySelector('.input-expend');

const buttonAdd = document.getElementById('add-value');
const list = document.getElementById('list');
const result = document.getElementById('result');

const form = document.getElementById('form');
const totalGenerator = calculate();
totalGenerator.next()

buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    
    const incomeValue = Number(inputIncome.value) || 0;
    const expendValue = Number(inputExpend.value) || 0;
    
    
    if (incomeValue > 0) {
        newIncome = document.createElement('li');
        newIncome.innerText = `Income - ${incomeValue}`;
        list.appendChild(newIncome);
        inputIncome.value = '';
    }
    
    if (expendValue > 0) {
        newExpend = document.createElement('li');
        newExpend.innerText = `Expend - ${expendValue}`; 
        list.appendChild(newExpend);
        inputExpend.value = ''; 
    }

    const nextTotal = totalGenerator.next({ income: incomeValue, expend: expendValue }).value
    result.innerHTML = `Total: ${nextTotal}`;
})


function* calculate() {
    let total =  0;
    
    while (true) {
        const data = yield total;
        total = total + data.income - data.expend;
    }
}
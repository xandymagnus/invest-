const inputIncome = document.querySelector('.input-income');
const inputExpend = document.querySelector('.input-expend');

const buttonAdd = document.getElementById('add-value');
const list = document.getElementById('list');
const result = document.getElementById('result');

const form = document.getElementById('form');

buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    newIncome = document.createElement('li');
    newExpend = document.createElement('li');

    const incomeValue = inputIncome.value;
    const expendValue = inputExpend.value;

    newIncome.innerText = `Income - ${incomeValue}`;
    newExpend.innerText = `Expend - ${expendValue}`; 

    if (incomeValue != '') {
        list.appendChild(newIncome);
        inputIncome.value = '';
    }
    
    if (expendValue != '') {
        list.appendChild(newExpend);
        inputExpend.value = ''; 
    }

    const total = calculate(incomeValue, expendValue);
    result.innerHTML = `Total: ${total.next().value}`;
})

function* calculate(income, expend) {
    let total =  income - expend;
    
    while (true) {
        yield total;
        total = total + income - expend;
    }
}
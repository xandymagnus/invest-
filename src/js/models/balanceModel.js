export function* calculate() {
    // Initialize the total accumulated balance
    let total =  0;
    
    while (true) {
        // Save data state and use the objects to calculate
        const data = yield total;
        total = total + data.income - data.expense;
    };
};
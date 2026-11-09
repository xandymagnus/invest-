// Validate Transaction
export function isValidTransactionValue(value) {
    return value > 0 && value <= 1e+9;
}

// Create a base transaction with necessary params
export function createTransaction(type, date, value) {
    return {
        type,
        date,
        value        
    };
}
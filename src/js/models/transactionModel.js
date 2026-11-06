export function isValidTransactionValue(value) {
    return value > 0 && value <= 1e+9;
}

export function createTransaction(type, value, date) {
    return {
        type,
        value,
        date
    };
}
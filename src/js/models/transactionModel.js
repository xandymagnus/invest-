export function isValidTransactionValue(value) {
    return value > 0 && value <= 1e+9;
}

export function createTransaction(date, establishment, tag, type, value) {
    return {
        date,
        establishment,
        tag,
        type,
        value        
    };
}
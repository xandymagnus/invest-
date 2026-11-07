const transactionTable = document.getElementById("transaction-body");

export function displayTransaction(transaction) {
    const newLine = document.createElement("tr")
    const newTransaction = document.createElement("td");
    newTransaction.classList.add(transaction.type);

    const transactionText = document.createElement("span");
    transactionText.innerText =
        `${transaction.type === "income" ? "Income" : "Expense"} - ${transaction.value}`;

    const date = document.createElement("span");
    date.innerText = `🗓️ (${transaction.date})`;
    date.classList.add("date");

    newTransaction.append(transactionText, date);
    transactionTable.appendChild(newTransaction);
}
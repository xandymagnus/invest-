const transactionTable = document.getElementById("transaction-body");

// Create a new transition card using a <table>
export function displayTransaction(transaction) {
    const newLine = document.createElement("tr")
    const newTransaction = document.createElement("td");
    newTransaction.classList.add(transaction.type);

    const transactionText = document.createElement("span");
    transactionText.innerText =
        `${transaction.type === "income" ? "Income" : "Expense"} - ${transaction.value}`; // Implement the type of transiction

    const date = document.createElement("span");
    date.innerText = `🗓️ (${transaction.date})`;
    date.classList.add("date");

    newTransaction.append(transactionText, date); // Append informations to <tr>
    newLine.append(newTransaction);
    transactionTable.appendChild(newLine);
}
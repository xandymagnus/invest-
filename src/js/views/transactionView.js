const list = document.getElementById("list");

export function displayTransaction(transaction) {
    const newTransaction = document.createElement("li");
    newTransaction.classList.add(transaction.type);

    const transactionText = document.createElement("span");
    transactionText.innerText =
        `${transaction.type === "income" ? "Income" : "Expense"} - ${transaction.value}`;

    const date = document.createElement("span");
    date.innerText = `🗓️ (${transaction.date})`;
    date.classList.add("date");

    newTransaction.append(transactionText, date);
    list.appendChild(newTransaction);
}
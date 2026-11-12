const transactionTable = document.getElementById("transaction-body");

// Create a new transition card using a <table>
export function displayTransaction(transaction) {
    const row = document.createElement("tr")
    const typeCell  = document.createElement("td");
    typeCell.classList.add(transaction.type);

    typeCell.textContent =
        `${transaction.type === "income" ? "Income" : "Expense"}`; // Implement the type of transiction

    const valueCell = document.createElement("td");
    valueCell.classList.add(transaction.type)
    valueCell.textContent = `R$${transaction.value}`

    const dateCell = document.createElement("td");
    dateCell.textContent = transaction.date;
    dateCell.classList.add(
        "dateCell",
        transaction.type
    );

    row.append(typeCell, valueCell, dateCell); // Append <td> informations to <tr>

    transactionTable.appendChild(row); // Append the transition to <tbody>
}
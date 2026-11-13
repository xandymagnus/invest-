const transactionTable = document.getElementById("transaction-body");

// Create a new transition card using a <table>
export function displayTransaction(transaction) {
    const row = document.createElement("tr") // Create a row
    const typeCell  = document.createElement("td"); // Create a transaction type
    typeCell.classList.add(transaction.type);

    typeCell.textContent =
        `${transaction.type === "income" ? "Income" : "Expense"}`; // Implement the type of transiction

    const valueCell = document.createElement("td"); // Value of transaction
    valueCell.classList.add(transaction.type)
    valueCell.textContent = `R$${transaction.value}`

    const dateCell = document.createElement("td"); // Date of transaction
    dateCell.textContent = transaction.date;
    dateCell.classList.add(
        "dateCell",
        transaction.type
    );

    const buttonEdit = document.createElement("button"); // Create a button to edit transaction
    buttonEdit.ariaLabel = "Transaction options"; // Add label to buttonEdit
    buttonEdit.classList.add("button-edit");
    buttonEdit.textContent = "...";
    

    row.append(typeCell, valueCell, dateCell, buttonEdit); // Append <td> informations to <tr>

    transactionTable.appendChild(row); // Append the transition to <tbody>
}
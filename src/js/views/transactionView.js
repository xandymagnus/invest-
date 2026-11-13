export const buttonEdit = document.querySelectorA(".button-edit");
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

    const actionCell = document.createElement("td"); // Create a td to envelop the button
    const buttonCell = document.createElement("button"); // Create a button to edit transaction
    buttonCell.ariaLabel = "Transaction options"; // Add label to buttonCell
    buttonCell.classList.add("button-edit");
    buttonCell.textContent = "...";

    actionCell.appendChild(buttonCell); // Put the button in a td to append in a row
    

    row.append(typeCell, valueCell, dateCell, actionCell); // Append <td> informations to <tr>

    transactionTable.appendChild(row); // Append the transition to <tbody>
}
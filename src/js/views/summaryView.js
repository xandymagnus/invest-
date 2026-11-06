const result = document.getElementById("result");

export function displayBalance(total) {
    result.innerText = `Total: ${total.toFixed(2)}`;
}
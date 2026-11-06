export function getCurrentDate() {
    const date = new Date();
    
    // Gets current month / day / year and format them
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}
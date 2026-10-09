let budget = 25000;

let expenses = 6000;

budget = Number(prompt("Enter your budget:"));

expenses = Number(prompt("Enter your expenses:"));

function calculateBalance(budget, expenses) {
return budget - expenses;
}

let remaining = calculateBalance(budget, expenses);

console.log("Total Budget:", budget);
console.log("Total Expenses:", expenses);
console.log("Remaining Balance:", remaining);


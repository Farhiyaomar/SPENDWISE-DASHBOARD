// 1. Implement Decision Making

let budget = 3000;
let totalExpenses = 0;

function checkBudget() {
if (totalExpenses > budget) {
return "You are over budget!";
} else if (totalExpenses === budget) {
return "You have reached your budget limit.";
} else {
return "You are within your budget.";
}
}

// 2. Work with Multiple Records

let expenses = [
{ name: "Food", amount: 200 },
{ name: "Transport", amount: 100 },
{ name: "Rent", amount: 1000 },
{ name: "Entertainment", amount: 150 },
{ name: "Savings", amount: 500 },
{ name: "Utilities", amount: 300 }
];

// 3. Process Data with Loops

function calculateTotal() {
totalExpenses = 0;

```
for (let expense of expenses) {
    totalExpenses += expense.amount;
}

return totalExpenses;
```

}

// 4. Update the Dashboard Dynamically

function updateDashboard() {
calculateTotal();

```
const cards = document.querySelector(".cards");
cards.innerHTML = "";

for (let expense of expenses) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = expense.name;

    const amount = document.createElement("p");
    amount.className = "amount";
    amount.textContent = "$" + expense.amount;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent =
        "Monthly " + expense.name.toLowerCase() + " expenses";

    card.appendChild(title);
    card.appendChild(amount);
    card.appendChild(description);

    cards.appendChild(card);
}

let totalDisplay = document.getElementById("total-expenses");

if (!totalDisplay) {
    totalDisplay = document.createElement("p");
    totalDisplay.id = "total-expenses";
    cards.after(totalDisplay);
}

totalDisplay.textContent = "Total Expenses: $" + totalExpenses;

let statusDisplay = document.getElementById("budget-status");

if (!statusDisplay) {
    statusDisplay = document.createElement("p");
    statusDisplay.id = "budget-status";
    totalDisplay.after(statusDisplay);
}

statusDisplay.textContent = checkBudget();
```

}

// 5. Handle User Interactions

document.querySelector(".cards").addEventListener("click", function () {
const name = prompt("Enter expense name:");

```
if (name === null || name.trim() === "") {
    return;
}

const amountInput = prompt("Enter expense amount:");
const amount = Number(amountInput);

if (
    amountInput === null ||
    amountInput.trim() === "" ||
    !Number.isFinite(amount) ||
    amount <= 0
) {
    alert("Please enter a valid expense amount.");
    return;
}

expenses.push({
    name: name.trim(),
    amount: amount
});

updateDashboard();
```

});

// 6. Connect Everything Together

updateDashboard();

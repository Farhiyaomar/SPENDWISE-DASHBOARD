# SpendWise Dashboard Shell

## Project Description

SpendWise is a static financial dashboard designed to provide an overview of different spending and saving categories.

The dashboard was created using HTML and CSS. The main focus of this project is using modern CSS layout techniques such as CSS Grid and Flexbox to create a clean and responsive dashboard.

The project does not include JavaScript or financial calculations because this week's task focuses only on the visual dashboard structure.

## Files

### index.html

The `index.html` file contains the structure of the dashboard.

It includes:

* A sidebar navigation menu
* A dashboard header
* Six financial category cards
* Static financial information for Food, Transport, Rent, Entertainment, Savings, and Utilities

### style.css

The `style.css` file controls the appearance and layout of the dashboard.

It includes:

* CSS custom properties for the color theme
* CSS Grid for the main dashboard layout
* Flexbox for the sidebar, header, and cards
* Responsive design for smaller screens
* Hover and keyboard focus effects on cards
* Colors, spacing, typography, and card styling

## CSS Grid

CSS Grid is used to create the main dashboard structure with a sidebar and main content area.

Grid is also used to arrange the six financial cards.

## Flexbox

Flexbox is used inside the sidebar, header, and individual cards to arrange their contents neatly.

## Responsive Design

A media query is included for screens smaller than 768px.

On smaller screens, the dashboard changes to a single-column layout and the cards stack vertically.

## Micro-interactions

The dashboard cards have a small hover and focus animation. The cards move slightly upward and receive a shadow when interacted with.

The transition lasts 200 milliseconds.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* Responsive Design

## Conclusion

The SpendWise Dashboard Shell provides the visual foundation for a future financial management application. It demonstrates how HTML and modern CSS techniques can be combined to create a clean, responsive dashboard interface.


# SpendWise Dashboard

## Project Description

SpendWise is a budgeting dashboard designed to help users manage their budgets and track their expenses. This project uses HTML and CSS for the dashboard interface and JavaScript to collect user input, perform calculations, and display results in the browser console.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input using `prompt()`
* Type conversion using `Number()`
* Arithmetic calculations
* Functions and return statements
* Console output using `console.log()`

## How Variables Are Used

Variables store the budget amount, expenses, and remaining balance.

The `budget` variable stores the user's total budget, while the `expenses` variable stores the total expenses entered by the user. The `remaining` variable stores the calculated balance.

## How User Input Is Collected

The application uses JavaScript's `prompt()` function to ask the user to enter their budget and expenses.

The `Number()` function converts the entered values into numbers so that JavaScript can perform calculations.

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting expenses from the total budget.

**Remaining Balance = Budget - Expenses**

For example, if the budget is 25,000 and expenses are 6,000, the remaining balance is 19,000.

## How Functions Organize the Code

The `calculateBalance()` function calculates the remaining balance.

It accepts the budget and expenses as parameters, subtracts the expenses from the budget, and returns the result.

Using a function makes the calculation reusable and keeps the code organized.

## How to Run the Project

1. Open the SpendWise project folder in Visual Studio Code.
2. Ensure `script.js` is linked to `index.html`.
3. Open `index.html` in a browser.
4. Enter your budget and expenses when prompted.
5. Open the browser developer tools by pressing `F12`.
6. Select the Console tab to view the results.

## Testing

Test the application using different budget and expense amounts.

For example:

* Budget: 25000
* Expenses: 6000
* Expected remaining balance: 19000

Check that the results appear correctly in the browser console.

## Conclusion

SpendWise demonstrates how JavaScript variables, data types, user input, calculations, and functions can be used to process budgeting information and calculate a remaining balance.


# SpendWise Dashboard — JavaScript

## Description

SpendWise is a budgeting dashboard that uses JavaScript to manage expense records, calculate totals, and check budget limits.

## Features

* Conditional statements for budget decisions.
* Arrays for storing multiple expense records.
* Loops for processing expenses and calculating totals.
* DOM manipulation for displaying dashboard information.
* Event listeners for handling user interactions.
* Automatic dashboard updates when expenses are added.

#

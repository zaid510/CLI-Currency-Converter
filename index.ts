import inquirer from "inquirer";

const userInput = await inquirer.prompt([
    {
        message: "Select your Currency:",
        name: "userCurrency",
        type: "list",
        choices: [
            "USD ($)",
            "PKR (Rs)",
            "INR (Rs)",
            "EURO (€)",
            "GBP (£)",
            "YEN (¥)",
            "CNY (¥)",
            "KRW (₩)",
        ]
    },
    {
        message: "Select your Currency:",
        name: "ToCurrency",
        type: "list",
        choices: [
            "USD ($)",
            "PKR (Rs)",
            "INR (Rs)",
            "EURO (€)",
            "GBP (£)",
            "YEN (¥)",
            "CNY (¥)",
            "KRW (₩)",
        ]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to Convert: ",
    }
])
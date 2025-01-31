class Calculator {
    constructor(num1, num2, operation) {
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);
        this.operation = operation;
    }

    calculate() {
        if (isNaN(this.num1) || isNaN(this.num2)) {
            return "Please enter valid numbers!";
        }

        switch (this.operation) {
            case "add":
                return this.num1 + this.num2;
            case "subtract":
                return this.num1 - this.num2;
            case "multiply":
                return this.num1 * this.num2;
            case "divide":
                return this.num2 !== 0 ? (this.num1 / this.num2).toFixed(2) : "Cannot divide by zero!";
            default:
                return "Invalid operation";
        }
    }
}

document.getElementById("calculate").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;

    let calculator = new Calculator(num1, num2, operation);
    document.getElementById("result").innerText = "Result: " + calculator.calculate();
});
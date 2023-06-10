function deleteLastChar() {
    const operation = document.querySelector("[name=operation]");
    operation.value = operation.value.slice(0, operation.value.length - 1);
}

function answer() {
    const answer = document.querySelector("#display").value;
    document.querySelector("[name=operation]").value = answer;
}

function calculate() {
    const operation = document.querySelector("[name=operation]").value;
    const display = document.querySelector("#display");
    let result = eval(operation);

// If result has too many decimals, fix to ten
    if(result.toString().length > 10) {
        result = result.toFixed(10);
    }

// Error when dividing by zero
    if(operation.includes("/0")) {
        result = result.toString()
        result = "Math Error: Cannot divide by 0";
    }

    display.value = result;
}
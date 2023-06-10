function deleteLastChar() {
    const operation = document.querySelector("[name=operation]");
    operation.value = operation.value.slice(0, operation.value.length - 1);
}

function calculate() {
    const operation = document.querySelector("[name=operation]").value;
    const display = document.querySelector("#display");
    let result = eval(operation);
    if(result.toString().length > 10) {
        result = result.toFixed(10);
    }
    display.value = result;
}

function answer() {
    const answer = document.querySelector("#display").value;
    document.querySelector("[name=operation]").value = answer;
}
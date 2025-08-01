function append(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}

// keyboard improvement
document.addEventListener("keydown", function (event) {
    const key = event.key;
    const validKeys = "0123456789+-*/.";

    if (validKeys.includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

window.onload = function () {
    document.getElementById("display").focus();
}
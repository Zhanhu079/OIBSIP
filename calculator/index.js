let history = [];

// Buttons

document.querySelectorAll('.buttons .btn').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        document.getElementById("expression").textContent += value;
    });
});

let enter = document.getElementById("enter");
enter.addEventListener("click", () => {
    let expression = document.getElementById("expression").textContent;
    let result = eval(expression);
    document.getElementById("result").textContent = result;
    history.push(expression + " = " + result);
    localStorage.setItem("history", JSON.stringify(history));   
});

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    document.getElementById("expression").textContent = "";
    document.getElementById("result").textContent = "";
});

let del = document.getElementById("del");
del.addEventListener("click", () => {
    expressionString = expression.textContent;
    expressionString = expressionString.slice(0, -1);
    document.getElementById("expression").textContent = expressionString;
    result.textContent = ''
})

let historyBtn = document.getElementById("ans");
historyBtn.addEventListener("click", () => {
    let ansScreen = document.getElementById("expression");
    let historyString = "";
    for (let i = 0; i < history.length; i++) {
        historyString += history[i];
        historyString += ", ";
        ansScreen.textContent = historyString;
    }
    
});


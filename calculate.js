const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput ="";
let opperand1 = null;
let opperand2 =null;
let operator = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const value = button.value;
    
    if (value === "AC"){
        clear();
    }
    else if (value === "DE"){
        deleteLast();
    }
    else if(value === "="){
        calculateResults();
    }
    else if(["+", "-", "*", "/"].includes(value)){
        setOperator(value);
    }

    else{
        appendValue(value);
    }
    });
});

    function deleteLast(){
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    function clear(){
        currentInput = "";
        operator = null;
        opperand1 = null;
        display.value = "";
    }
    function appendValue(value){
        currentInput += value
        display.value = currentInput;
    }

    function setOperator(op) {
        if(currentInput === "") return;
            operator = op;
            opperand1 =  parseFloat(currentInput);
            currentInput = "";
    }

    function calculateResults(){
        if(currentInput === "" || operator === null || opperand1 === null) return;
        opperand2 = parseFloat(currentInput);

        let result = 0;
        switch (operator){
            case "+":
                result = opperand1 + opperand2;
                break;
            case "-":
                result = opperand1 - opperand2;
                break;
            case "*":
                result =opperand1 * opperand2;
                break;
            case "/":
                result = opperand2!== 0 ? opperand1 / opperand2 : "Error";
                break;
        }

        display.value = result;
        currentInput = result.toString();
        opperand1 = null;
        opperand2 = null;
        operator = null;
    }

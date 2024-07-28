//accessing label
let labelShowResult = document.getElementById("mylabel");
// accessing inputbox1  and inputbox2
let inputBox1 = document.getElementById("textBox1");
let inputBox2 = document.getElementById("textBox2");
//accessing select
let operatorSelected = document.getElementById("operation-select");
// accessing button 
let equalButton = document.getElementById("equal-btn");
let result;



equalButton.addEventListener("click", calculate);

function calculate() {
    let firstNumber = parseFloat(inputBox1.value);
    let secondNumber = parseFloat(inputBox2.value);

    //checking number is valid or not 
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("you have entered an invalid number ...\n please enter a valid number");
    }
    else {

        //defining switch case
        let operator = operatorSelected.value;
        switch (operator) {
            case 'addition': result = add(firstNumber, secondNumber);
                break;

            case 'subtraction': result = sub(firstNumber, secondNumber);
                break;

            case 'multiplication': result = mul(firstNumber, secondNumber);
                break;

            case 'division': result = div(firstNumber, secondNumber);
                break;

            default: result = 'invalid Operator';
                return;
        }

        //checking the result is undefined or not
        if (result != undefined) {
            labelShowResult.innerText = `The result of your Calculation is : ${result}`;
        }
    }

    //removing the input values 
    inputBox1.value = "";
    inputBox2.value = "";
    operatorSelected.value = "";

    inputBox1.focus();
}


//function definition
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    if (num2 == 0) {
        labelShowResult.style.color = "red";
        labelShowResult.innerText = "ERROR : You can't divide a number by 0 ";
    }
    else {
        return num1 / num2;
    }
}

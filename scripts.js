function add (a,b) {
	return a + b ;
}

function subtract (a,b) {
	return a - b ;
}

function multiply (a,b) {
    return a * b ; 
}

function divide (a,b){
    return a / b ; 
}

function operate (operator, a, b){
    switch (operator) {
        case '+' : 
        return add(a,b) ;

        case '-' :
        return subtract(a,b) ; 

        case '*' :
        return multiply(a,b) ; 

        case '/' :
        return divide(a,b) ;

    }
}

let operator = null;
let selectedNumbers = [];
let a = null;
let b = null;
let displayValue = document.querySelector('#results');
let allButtons = document.querySelectorAll('#btn');
    allButtons.forEach((btn=>{
        btn.addEventListener('click',()=>{
            selectedNumbers.push(btn.value)
            displayValue.setAttribute('value', selectedNumbers.join(''))
        })
    }))

let operands = document.querySelectorAll('#operand');
    operands.forEach((operand)=>{
        operand.addEventListener('click',()=>{
            ( a === null )? a = +selectedNumbers.join('') : b = +selectedNumbers.join('');
            operator = operand.value;
            selectedNumbers = [];
        })
    });

let equals = document.getElementById('equals');
    equals.addEventListener('click',()=>{
        b = +selectedNumbers.join('');
        toDisplay = operate(operator,a,b);
        displayValue.setAttribute('value', operate(operator,a,b) )
    })

let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', ()=>{
        operator = null;
        a = null;
        b = null;
        selectedNumbers = [];
        displayValue.setAttribute('value', '');
    })
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

let a = null;
let b = null;
let operator = null;
let selectedNumbers = [];

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
            
            if( (operator !== null) ){
                b = +selectedNumbers.join('');
                ((operator === '/') && (b === 0)) ? displayValue.setAttribute('value', 'NO NO NO, cant do that!') :  a = operate(operator,a,b);
                operator = operand.value;
                b = null;
            }else if( (a === null || b === null) ){ 
                ( a === null )? a = +selectedNumbers.join('') : b = +selectedNumbers.join('');
                operator = operand.value;
            }
            selectedNumbers = [];
        })
    });

let equals = document.getElementById('equals');
    equals.addEventListener('click',()=>{
        b = +selectedNumbers.join('');
        ((operator === '/') && (b === 0)) ? displayValue.setAttribute('value', 'NO NO NO, cant do that!') : displayValue.setAttribute('value', operate(operator,a,b) );
    })

let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', ()=>{
        operator = null;
        a = null;
        b = null;
        selectedNumbers = [];
        displayValue.setAttribute('value', '');
    })
    
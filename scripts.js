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

            let toCheck = selectedNumbers.join('')
            let chckForOperandPlusZero = /[\+\-\/\*]0/g.test(toCheck);
            switch(chckForOperandPlusZero ){
                case true :
                selectedNumbers.pop();
                selectedNumbers.push(btn.value);
                displayValue.setAttribute('value', selectedNumbers.join(''))
                break;
                case false :
                selectedNumbers.push(btn.value);
                displayValue.setAttribute('value', selectedNumbers.join(''));
                break;
            }
        })
    }))


let operands = document.querySelectorAll('#operand');
    operands.forEach((operand)=>{
        operand.addEventListener('click',()=>{

            let lastButtonClicked = selectedNumbers[selectedNumbers.length -1]
            let check = /[\+\-\/\*]/g.test(lastButtonClicked) ; 

            switch(check){
                case true :
                selectedNumbers.pop();
                selectedNumbers.push(operand.value);
                displayValue.setAttribute('value', selectedNumbers.join(''))
                break;
                case false :
                selectedNumbers.push(operand.value);
                displayValue.setAttribute('value', selectedNumbers.join(''));
                break;
            }
        })
    });


let equals = document.getElementById('equals');
    equals.addEventListener('click',()=>{
        let checkForDivisionByZero = /\d+\/[0]/.test(selectedNumbers.join(''));
        if(checkForDivisionByZero){
            displayValue.setAttribute('value', 'To infinity and beyond!');
            new Notification('You cant divide by zero.')
        }else{
            //take selectedNumbers and complete the equation following order of operations. 
            // set display value as the result of this
        }

    })
    

let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', ()=>{

        operator = null;
        a = null;
        b = null;
        selectedNumbers = [];
        displayValue.setAttribute('value', '');

    });
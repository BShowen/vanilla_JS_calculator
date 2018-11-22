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

function pemdasCheck(first, second){
    if( /[\+\-]/g.test(first)  && /[\+\-]/g.test(second) ){
        a = operate(firstOperand, a, b)
        b = null;
        firstOperand = secondOperand;
        secondOperand = null;
    }else if( /[\/\*]/g.test(first) && /[\/\*]/g.test(second) ){ 
        a = operate(firstOperand, a, b)
        b = null; 
        firstOperand = secondOperand;
        secondOperand = null;
    }else if( /[\+\-]/g.test(first) && /[\/\*]/g.test(second) ){

        // do nothing. This could possibly be the 'else if' in the 'equals' function. 

    }else if( /[\/\*]/g.test(first) && /[\+\-]/g.test(second) ){ 
        a = operate(firstOperand, a, b)
        b = null;
        firstOperand = secondOperand;
        secondOperand = null;
    }
}

function checkForDoubleOperands(selectedOperand){
    const lastButtonClicked = displayThis[displayThis.length -1]
    const check = /[\+\-\/\*]/g.test(lastButtonClicked) ; 

    switch(check){
        case true :
        displayThis.pop();
        displayThis.push(selectedOperand);
        displayValue.setAttribute('value', displayThis.join(''))
        break;
        case false :
        displayThis.push(selectedOperand);
        displayValue.setAttribute('value', displayThis.join(''));
        break;
    }
}

function checkForMultipleZeros(selection){

    const checkForLeadingZeros = /^0*0$/g.test(displayThis.join(''));
    const checkForZeroAfterOperand = /[\+\-\/\*][0]$/g.test(displayThis.join(''));

    if(displayThis.length === 0){
        numbers.push(selection);
        displayThis.push(selection);
    }else if(checkForLeadingZeros){
        if(selection === '.'){
            numbers.push(selection);
            displayThis.push(selection);
        }else{
            numbers.pop();
            numbers.push(selection);
            displayThis.pop();
            displayThis.push(selection);
        }
    }else if(checkForZeroAfterOperand){
        if(selection === '.'){
            numbers.push(selection);
            displayThis.push(selection);
        }else{
            numbers.pop();
            numbers.push(selection);
            displayThis.pop();
            displayThis.push(selection);
        }
    }else{
        if(selection === '.'){
            checkForMultiplePeriods(selection)
        }else{
            numbers.push(selection);
            displayThis.push(selection);
        }
    }
}

function checkForMultiplePeriods(selection){
    let checkForPeriods = /(^\d*\.\d*?$|[\+\-\/\*]\d*?\.\d*?$)/g.test(displayThis.join(''));
    if(checkForPeriods){
        //Dont add the dot because the user already selected a dot for this current number. 
    }else{
        numbers.push(selection);
        displayThis.push(selection);
    }
}   

let displayThis = [];
let numbers = []
let a = null;
let b = null;
let c = null;
let firstOperand = null;
let secondOperand = null;

const messages = document.querySelector('#messageCenter');
const displayValue = document.querySelector('#results');
const numberButtons = document.querySelectorAll('#btn');
    numberButtons.forEach((btn=>{
        btn.addEventListener('click',()=>{
            // Start here. 
            checkForMultipleZeros(btn.value);  
            displayValue.setAttribute('value', displayThis.join(''));  
            
        })
    }))


const operands = document.querySelectorAll('#operand');
    operands.forEach((operand)=>{
        operand.addEventListener('click',()=>{

            checkForDoubleOperands(operand.className);

            if(numbers.length === 0){
                firstOperand = operand.value;
            }else if(a === null){
                a = +numbers.join(''); 
                firstOperand = operand.value;
                numbers = [];
            }else if( (a !== null) && (b === null) ){
                b = +numbers.join(''); 
                secondOperand = operand.value; 
                numbers = [];
                pemdasCheck(firstOperand, secondOperand);
            }else if( ((a !== null) && (b !== null)) && (c === null) ){
                c = +numbers.join(''); 
                numbers=[] 
                b = operate(secondOperand, b, c); 
                secondOperand = operand.value ; 
                c = null; 
                pemdasCheck(firstOperand, secondOperand);
            }
            
        })
    });


const equals = document.getElementById('equals');
    equals.addEventListener('click',()=>{
        const checkForDivisionByZero = /\d+\÷[0]/.test(displayThis.join(''));
        if(checkForDivisionByZero){
            displayValue.setAttribute('value', 'To infinity and beyond!');
            messages.textContent = 'You can\'t divide by zero';
            // new Notification('You can\'t divide by zero.')
        }else if(secondOperand === null){
            messages.innerText = `${displayThis.join('')+'='}`;
            b = +numbers.join('');
            a = operate(firstOperand, a, b) 
            b = null; 
            firstOperand = null; 
            numbers = [];
            displayValue.setAttribute('value', a );
            // Done
        }else if(secondOperand !== null){
            messages.innerText = `${displayThis.join('')}`;
            c = +numbers.join('') 
            b = operate(secondOperand, b, c) 
            c = null; 
            secondOperand = null; 
            numbers = []; 
            a = operate(firstOperand, a, b)
            b = null; 
            firstOperand = null;
            displayValue.setAttribute('value', a );
            // Done
        }

    })
    

const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', ()=>{
        displayValue.setAttribute('value' , '0');
        messages.innerText = '';
        displayThis = [];
        numbers = [];
        a = null;
        b = null;
        c = null;
        firstOperand = null;
        secondOperand = null;
    });

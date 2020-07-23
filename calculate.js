var operator="";
var firstNumber="";
var secondNumber="";
var position = 0;
var result=0;


function getNumbers(nmb){
    switch(position){
        case 0:{
            firstNumber =firstNumber+nmb;
            
            display();
            
            break;
        }
        case 1:
            secondNumber =secondNumber+nmb;
            
            display();
            break;    
    }


}

function display(){
    document.getElementById("result").innerHTML = firstNumber+" "+operator+" "+secondNumber;

}
function operatorSelect(op){

    operator = op;
    display();
    position =1;

}

function deleteChar(){
    switch(position){
        case 0:{
            /*firstNumber.slice(0, -1);*/
            firstNumber=firstNumber.substring(0, firstNumber.length - 1);
            console.log(firstNumber);
            display();
         break;}
        case 1:{
            secondNumber= secondNumber.substring(0, secondNumber.length - 1);
            display();
         break; }    
    }

}
function add(firstNumber , secondNumber){
    return Number(firstNumber) + Number(secondNumber);

}
function substract(firstNumber , secondNumber){
    return Number(firstNumber) - Number(secondNumber);

}
function multiply(firstNumber , secondNumber){
    return Number(firstNumber) * Number(secondNumber);

}
function divide(firstNumber , secondNumber){
    return Number(firstNumber) / Number(secondNumber);

}
function percent(firstNumber , secondNumber){
    return (Number(firstNumber)*100)/ Number(secondNumber);


}

function operate(operator,firstNumber , secondNumber){
    switch(operator){
        case '+':
            document.getElementById("result").innerHTML = add(firstNumber , secondNumber);
         break;
        case '-':
            document.getElementById("result").innerHTML = substract(firstNumber , secondNumber);
         break;
        case '*':
            document.getElementById("result").innerHTML = multiply(firstNumber , secondNumber);
         break;
        case '/':
            document.getElementById("result").innerHTML = divide(firstNumber , secondNumber)
         break;
        case '%':
            document.getElementById("result").innerHTML = percent(firstNumber , secondNumber)
         break; 

    }

}

function equal(){
    if (operator !== null  && firstNumber!== null && secondNumber!== null){
        operate(operator,firstNumber , secondNumber);

         operator=" ";
     firstNumber=" ";
     secondNumber=" ";
     position = 0;
      result=0;

    }
}
function reset(){
    document.getElementById("result").innerHTML = "Ready";
    operator=" ";
     firstNumber=" ";
     secondNumber=" ";
     position = 0;
      result=0;

}
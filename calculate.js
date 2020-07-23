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
/* event on keyboard press*/
document.addEventListener('keydown', function(event){

    var keyPress= event.keyCode;
    /*console.log(keyPress);*/
    switch(keyPress){
        case 8:{
            deleteChar();
            break;
        }
        case 13:{
            equal();
            break;
        }
        case 46:{
            reset();
            break;
        }
        case 107:{
            operatorSelect('+');
            break;
        }
        case 109:{
            operatorSelect('-');
            break;
        }
        case 106:{
            operatorSelect('*');
            break;
        }
        case 111:{
            operatorSelect('/');
            break;
        }
        
        case 110:{
            getNumbers('.');
            break;
        }
        case 96:{
            getNumbers('0');
            break;
        }
        case 97:{
            getNumbers('1');
            break;
        }
        case 98:{
            getNumbers('2');
            break;
        }
        case 99:{
            getNumbers('3');
            break;
        }
        case 100:{
            getNumbers('4');
            break;
        }
        case 101:{
            getNumbers('5');
            break;
        }
        case 102:{
            getNumbers('6');
            break;
        }
        case 103:{
            getNumbers('7');
            break;
        }
        case 104:{
            getNumbers('8');
            break;
        }
        case 105:{
            getNumbers('9');
            break;
        }
    }
});

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
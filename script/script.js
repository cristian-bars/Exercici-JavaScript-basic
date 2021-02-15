console.log("Hola mundo");

alert("Em dic Cristian");

let name = "Cristian";

let secondName = "Bars";

console.log(name + " " + secondName);

let num1 = 34;
let num2 = 56;

console.log("La suma entre " + num1 + " i " + num2 + " és " + (num1+num2));

let nota_examen = prompt("Digues quina nota tens!");

if (nota_examen<5){
    alert("Llastima, has suspés l'exament per un " + nota_examen);
}else{
    alert("Enhorabona! has aprovat l'exament per un " + nota_examen);
}

let frase = "Tinc un cotxe de color blau";
console.log(frase.replace('blau', 'verd'));

console.log(frase.replace(/o/g, 'u'));

let objecte = new Array('taula', 'cadira', 'ordinador', 'libreta');

for (let i=0;i<objecte.length;i++){
    console.log("L'objecte " + objecte[i] + " està a la posició " + i);
}

function calculadora(operador, num1, num2){
    switch(operador){
        case 'suma':
            resultat = num1 + num2;
            break;
        
        case 'resta':
            resultat = num1 - num2;
            break;
            
        case 'multiplicacio':
            resultat = num1 * num2;
            break;
            
        case 'divisio':
            if (num1 == 0 || num2 == 0){
                console.log("No es pot dividir amb un valor 0");
                resultat = "null";
                break;
            }else{
                resultat = num1 / num2;
                break;
            }
            
    }
    
    console.log("El resultat de l'operació es " + resultat);
    
}

let resultat = 0;
calculadora('multiplicacio',40,20);


let operandoa = "";
let operandob = "";
let operacion = "";

function add(key) { 
    if(operandoa!=""){
        result.textContent = "";
    }
    result.textContent = result.textContent + key;
}

function del(){
    resetear();
}
function suma(){
    operandoa = result.textContent;
    operacion = "+";
    limpiar();
}
function resta(){
    operandoa = result.textContent;
    operacion = "-";
    limpiar();
}
function multiplicacion(){
    operandoa = result.textContent;
    operacion = "*";
    limpiar();
}
function division(){
    operandoa = result.textContent;
    operacion = "/";
    limpiar();
}

function calc(){
    operandob = result.textContent;
    resolver();
}

function limpiar(){
    result.textContent = result.textContent;
}

function resetear(){
    result.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
  
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    result.textContent = res;
}
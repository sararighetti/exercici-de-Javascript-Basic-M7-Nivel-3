
// declaros las 3 variables que necesito para hacer las operaciones
var operandoA;
var operandoB;
var operacion;

// declaro variables para recoger el valor de cada button y asignarlo a la variable
function Calcular(){
    var resultado = document.getElementById("resultado");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var numeroZero = document.getElementById("zero");
    var numeroUno = document.getElementById ("uno");
    var numeroDos = document.getElementById ("dos");
    var numeroTres = document.getElementById ("tres");
    var numeroCuatro = document.getElementById ("cuatro");
    var numeroCinco = document.getElementById ("cinco");
    var numeroSeis = document.getElementById ("seis");
    var numeroSiete = document.getElementById ("siete");
    var numeroOcho = document.getElementById ("ocho");
    var numeroNueve = document.getElementById ("nueve");



// declaro los Eventos para que impriman el resultado en la parte alta de la calculadora
numeroUno.onclick = function(){
    resultado.textContent = resultado.textContent + "1";  // cuando hago click en el button 1 se imprime en el resultado el numeo 1
}
numeroDos.onclick = function(){
    resultado.textContent = resultado.textContent + "2";
}
numeroTres.onclick = function(){
    resultado.textContent = resultado.textContent + "3";
}
numeroCuatro.onclick = function(){
    resultado.textContent = resultado.textContent + "4";
}
numeroCinco.onclick = function(){
    resultado.textContent = resultado.textContent + "5";
}
numeroSeis.onclick = function(){
    resultado.textContent = resultado.textContent + "6";
}
numeroSiete.onclick = function(){
    resultado.textContent = resultado.textContent + "7";
}
numeroOcho.onclick = function(){
    resultado.textContent = resultado.textContent + "8";
}
numeroNueve.onclick = function(){
    resultado.textContent = resultado.textContent + "9";
}
numeroZero.onclick = function(){
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(){
    resetear();              // cuando hago click en el button C llamo a la funcion resetear
}
suma.onclick =function() {      // cuando hago click en el button + 
operandoA = resultado.textContent;   //operandoA ahora tiene el valor del numero que aparace en el textContent
operacion ="+";                      // lo necesito para el switch, para indicarle que tiene que hacer en el caso que "operacion = +" 
limpiar();                  // llamo a la funcion limpiar para que la parte del resultado vuelva vacia despues de selecionar que tipo de operacion quiero hacer, asi puedo visualizar el operadorB
}
resta.onclick =function() {
    operandoA = resultado.textContent;
    operacion ="-";
    limpiar();
}
multiplicacion.onclick =function() {
    operandoA = resultado.textContent;
    operacion ="*";
    limpiar();
}
division.onclick =function() {
    operandoA = resultado.textContent;
    operacion ="/";
    limpiar();
 }
 igual.onclick = function(){
     operandoB = resultado.textContent;
     resolver();                                    // llamo a la funcion resolver para calcular el resultado
 }

}
function limpiar(){                                 // declaro la funcion limpiar
    resultado.textContent= "";   
}
function resetear(){                                // declaro la funcion resetear
    resultado.textContent= ""; 
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}
function resolver(){                                // declaro la funcion resolver
    var solucion = 0;
    switch(operacion){
        case "+":
            solucion = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            solucion = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            solucion = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/": 
            solucion = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
   
    resultado.textContent = solucion;  
}
          
 
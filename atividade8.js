var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var result = document.querySelector('span');
function soma(){
    result.innerHTML = parseInt(numero1.value) +  parseInt(numero2.value);
}
function subtracao(){
    result.innerHTML = parseInt(numero1.value) -  parseInt(numero2.value);
}
function divisao(){
    result.innerHTML = parseInt(numero1.value) /  parseInt(numero2.value);
}
function multiplicacao(){
    result.innerHTML = parseInt(numero1.value) *  parseInt(numero2.value);
}
function evt_calculo(){
    var base = document.getElementById("txtbase").value;
    var altura = document.getElementById("txtaltura").value;
    var aux = 10;
    var calculo = parseInt(base, aux) * parseInt(altura, aux) /2;   
    var div = document.getElementById("mydiv");
    div.innerHTML = calculo;
}
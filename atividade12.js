function evt_calcular(){
    var salario_bruto = document.getElementById("txtsalario").value;
    var reajuste = document.getElementById("txtreajuste").value;
    var div1 = document.getElementById("salario");
    var calculo = reajuste*salario_bruto;

    div1.innerHTML = "o novo salario e de: "+ calculo;

}
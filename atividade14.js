function adicionar(){

    var votosV = Number(document.getElementById("votosV").value)
    var votosN = Number(document.getElementById("votosN").value)
    var votosB = Number(document.getElementById("votosEb").value)
    var span = document.querySelector("span")
    var divnull = document.getElementById("null")
    var divbranco = document.getElementById("branco")

    let total = votosV + votosB + votosN  

    let x = (total * votosB)/100
    let z = (total * votosN)/100

    span.innerHTML = "Total de votos contabilizados foi de: " + total 
    divnull.innerHTML = "Total de votos nulos contabilizados em porcentagem foi de: " + z + "%"
    divbranco.innerHTML = "Total de votos em branco contabilizados em porcentagem foi de: " + x +"%"
}
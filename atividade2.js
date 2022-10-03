function evt_btnCadastrar()
{
    let nomeInserido = document.getElementById('txtnome').value;
    
    var option = document.createElement("option");
    option.text = nomeInserido;
    option.value = nomeInserido;
    var boxNumeros = document.getElementById("myselect");
    boxNumeros.appendChild(option);

    }
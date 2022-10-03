

        var entrada;
        var retorno;

        retorno=prompt('Digite o número que você deseja ver a tabuada ');
        while(retorno == ''){
            alert("Você não digitou um número");
            break
        }
        entrada=confirm('Tem certeza que deseja utilizar esse número? ');
        if(entrada == false){
            alert("Responda corretamente da proxima vez!!")
        }else
            valor = retorno;
            document.write("<p>Tabuada do " + valor + "</p>");
            for (var i = 1; i < 11; i++)
            {
                document.write(valor + " x " + i + " = " + (valor*i) + "<br>");
            }
    
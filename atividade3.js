var valores = [];
        function adicionar(){

            var input = document.getElementById("texto");
            var upper = input.value.toUpperCase();
            input.value='';

            if(-1 !== valores.indexOf(upper)){
                    alert("Digite um nome que não esteja cadastrado!!");
                    return;
            }
            valores.push(upper);
            var option = document.createElement("option");
            document.getElementById("lista").options.add(option);
            option.text = upper;
            option.value = upper;
    
            return false;
    
        }
function evt_onclick(){
    // criação de variavel
    var combo_medias = document.getElementById("medias");
    var combo_notas = document.getElementById("notas");
    var combo_alunos = document.getElementById("alunos");
    var aux = 10;
    var nota1 = document.getElementById("txtnota1").value;
    var nota2 = document.getElementById("txtnota2").value;
    var nota3 = document.getElementById("txtnota3").value;
    var nota4 = document.getElementById("txtnota4").value;
    var aluno = document.getElementById("txtaluno").value;
    var soma = parseInt(nota1, aux) + parseInt(nota2, aux) + parseInt(nota3, aux) + parseInt(nota4, aux);
    var media = soma/4;
    var op = document.createElement("option");
    var op_nota1 = document.createElement("option");
    var op_nota2 = document.createElement("option");
    var op_nota3 = document.createElement("option");
    var op_nota4 = document.createElement("option");
    var op_medias = document.createElement("option"); 
    // modulo principal
    op.value = 0;
    op.text = aluno;
    combo_alunos.add(op, combo_alunos.options[1]);

    op_nota1.text = nota1;
    combo_notas.add(op_nota1, combo_notas.options[0]);

    op_nota2.text = nota2;
    combo_notas.add(op_nota2, combo_notas.options[1]);

    op_nota3.text = nota3;
    combo_notas.add(op_nota3, combo_notas[2]);

    op_nota4.text = nota4;
    combo_notas.add(op_nota4, combo_notas[3]);

    op_medias.text = media;
    combo_medias.add(op_medias, combo_medias.options[1]);

    

}
function evt_teste(){
    combo_alunos2 = document.getElementById("alunos");
    combo_medias2 = document.getElementById("medias");
    var x = combo_alunos2.selectedIndex;
    alert(combo_medias2[x].text);
}
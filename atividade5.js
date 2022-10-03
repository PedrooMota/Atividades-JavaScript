function adicionar(){
    var nome = 'Thalita';
    var sobrenome = 'Santos';
    var naturalidade = 'Volta Redonda';
    let idade = 19;
    let vetor = [nome, sobrenome, naturalidade, idade];
   
    document.getElementById("nome").value=vetor[0];
    document.getElementById("sobrenome").value=vetor[1];
    document.getElementById("naturalidade").value=vetor[2];
    document.getElementById("idade").value=vetor[3];

}
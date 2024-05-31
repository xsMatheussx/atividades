function saudacao (){
    // obtem o valor
    var nome = document.getElementById("nomeUsuario").value;
    // mensagem
    var mensagem = "oi " + nome + " bem vindo!";
    //exibe a mensagem com o id
    document.getElementById("mensagemSaudacao").innerText = mensagem;
    document.getElementById("nomeUsuario").value = " ";

}
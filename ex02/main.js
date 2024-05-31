function contador(){
    var textoContar = document.getElementById("texto").value;
       var mensagem = "Tem " + textoContar.length + " caracteres.";
    //exibe a mensagem com o id
    document.getElementById("mensagemContada").innerText = mensagem;
    document.getElementById("texto").value = " ";

}
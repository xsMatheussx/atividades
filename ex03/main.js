function validarNumeroPositivo(){

    var numero = document.getElementById("textArea").value;
       var mensagem = "Se for positivo é 1, negativo -1 e 0 é zero: " + Math.sing(numero);
    document.getElementById("numerovalido").innerText = mensagem;
    document.getElementById("textArea").value = " ";
}

function Area(){

    var Area = document.getElementById("textArea1").value;
    var Comprimento = document.getElementById("textArea2").value;
    
    var mensagem = "Área: " + comprimento*altura;
    document.getElementById("AreaR").innerText = mensagem;
    document.getElementById("textArea1").value = " ";
    document.getElementById("textArea2").value = " ";
}
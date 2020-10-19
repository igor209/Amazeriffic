var main = function(){
    "use strict"
    var url = window.location.href
    var urlsplit = url.split("/")
    var nomedeusuario = urlsplit[urlsplit.length-1]
    $("main h1").text(nomedeusuario)
    $("main button").on("click", function(){
        var senha = $("main input").val()
        $.post("/autenticar",{"Usuario":nomedeusuario, "Senha": senha}, function(response){
            if(response == 500){
                alert("Erro No servidor, tente mais tarde")
            }else if(response == 404){
                alert("senha Incorreta tente novamente")
            }else{
                document.write(response)
            }
        })
    })
}
$(document).ready(main)
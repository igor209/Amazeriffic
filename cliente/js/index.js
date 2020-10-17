var main = function(){
    "use strict"
    $(" main button").on("click", function(){
        var input = $("main input").val()
        alert(username)
        $.get("/"+input, function(response){
            if(response == 404){
                //escrevo usuario nao encontrado
            }else if(response == err){
                //tratar o erro
            }else{
                
                $("body main").hide()
                $("main").append('<div><h1>Nome</h1></div><div><label for="usuario">Entre com a senha</label></div><div><input type="password" name="usuario" class="senha"></div><div><button class="entrar">Entrar</button></div>')
                $("main .entrar").on("click", function(){
                    var password = $("main .senha").val()
                    var username = $("main h1").text()
                    $.post("/autenticar",{"senha":password, "username":username}, function(response){

                    })
                })
            }
        })
    })
}
$(document).ready(main)
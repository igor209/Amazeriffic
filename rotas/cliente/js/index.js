var main = function(){
    "use strict"
    $(".entrarcomusuario").on("click", function(){
        var input = $("main input").val()
        $.get("/"+input, function(response){
            if(response == 404){
                alert('usuario nao encontrado')
            }else if(response == 500){
                alert("erro no servidor, tente novamente mais tarde")
            }else{
                window.location.href = "/"+input   
            }
        })
    })
    $(".registrarusuario").on("click", function(){
        window.location.href = "/registrar"
    })
}
$(document).ready(main)
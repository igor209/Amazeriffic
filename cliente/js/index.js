var main = function(){
    "use strict"
    $(" main button").on("click", function(){
        var input = $("main input").val()
        alert(input)
        .get("/"+input, function(response){
            if(response == 404){
                //escrevo usuario nao encontrado
            }else if(response == err){
                //tratar o erro
            }else{
                //peço a senha do usuario
            }
        })
    })
}
$(document).ready(main)
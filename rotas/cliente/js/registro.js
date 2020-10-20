var main = function(){
    "use strict"
    $("main button").on("click", function(){
        var nome = $("main #usuario").val()
        var senha1 = $("main #senha1").val()
        var senha2 = $("main #senha2").val()
        // for(var i = 0; i<=9;i++){
            
        // }
        // if(senha.length > 7 && senha.indexOf("1") !== -1 && senha.indexOf("2") !== -1 && senha.indexOf("'",'"',"/",) === -1){
        //     alert("certo")
        // }else{
        //     alert("errado")
        // }
        $.post("/registrarusuario", {"Usuario": nome, "Senha1": senha1, "Senha2": senha2}, function(response){
            alert(response)
            if(response == "usuario cadastrado com sucesso"){
                window.location.href = "/"
            }
        })

    })
}
$(document).ready(main)
var main = function(){
    "use strict"
    $("main button").on("click", function(){
        var nome = $("main #usuario").val()
        var senha = $("main #senha1").val().split()
        for(var i = 0; i<=9;i++){
            
        }
        if(senha.length > 7 && senha.indexOf("1") !== -1 && senha.indexOf("2") !== -1 && senha.indexOf("'",'"',"/",) === -1){
            alert("certo")
        }else{
            alert("errado")
        }




        // if($("main #senha1").val() == $("main #senha2").val()){
        //     var senha = $("main #senha1").val()
        // }else{
        //     var senha = null
        // }
        // $.post("/registrarusuario", {"Usuario": nome, "Senha": senha}, function(response){

        // })

    })
}
$(document).ready(main)
var main = function(dados){
    "use strict";
    var toDos= dados.map(function(dado){
        return dado.descricao
    })
    var $content
    var tabs = []

    tabs.push({
        "name": "Newest",
        "content": function(callback){
            
            $.getJSON("dados", function(dados){
                $content = $("<ul>")
                var descricao = dados.map(function(dado){
                    return dado.descricao
                })
                for(var i=descricao.length-1;i>=0;i--){
                    $content.append($("<li>").text(descricao[i]))
                }

                callback($content)
            })
            
        }
    })
    tabs.push({
        "name": "Oldest",
        "content": function(callback){
            $.getJSON("dados", function(dados){
                $content = $("<ul>")
               dados.forEach(function(todo){
                    $content.append($("<li>").text(todo.descricao))
                })
                callback($content)
            })
            
        }
    })
    tabs.push({
        "name": "Tags",
        "content": function(callback){

            $.getJSON("dados", function(dados){
                var listadetags = [], arrayfinal = [], listadedescricao = []
                dados.forEach(function(dado){
                    dado.tags.forEach(function(palavra){
                        if(listadetags.indexOf(palavra) == -1){
                            listadetags.push(palavra)
                        }
                    })
                })
                
                for(var i = 0; i < listadetags.length; i++) {
                    dados.forEach(function(dado){
                        dado.tags.forEach(function(palavra){
                            if(palavra == listadetags[i]){
                                listadedescricao.push(dado.descricao)
                            }
                        })
                    })
                    arrayfinal[i] = { "name": listadetags[i], "toDos": listadedescricao};
                    listadedescricao = []
                }
                var conteudo = []
                arrayfinal.forEach(function (tags) {
                    var $tagname = $("<h3>").text(tags.name),
                        $content = $("<ul>");
                    tags.toDos.forEach(function (descricao) {
                        var $li = $("<li>").text(descricao);
                        $content.append($li);
                    });
                    conteudo.push($tagname);
                    conteudo.push($content);
                });
                callback(conteudo)
            })

            
        }
    })
    tabs.push({
        "name": "Add",
        "content": function(callback){
            var $input = $("<input>").addClass("descricao"),
                $inputlabel = $("<label>").text("Descrição:"),
                $taginput = $("<input>").addClass("tags"),
                $taglabel = $("<label>").text("Tags: "),
                $button = $("<button>").text("+")
                
                var conteudo = [$inputlabel, $input, $taglabel, $taginput, $button]
                callback(conteudo)
            
            $("main .content button").on("click", function(){
                var descripition = $input.val(),
                    tags = $taginput.val().split(",")

                if($("main .content input").val()!=""){

                    $.post("/todos", {"descricao": descripition, "tags": tags}, function(response){
                        $input.val("")
                        $taginput.val("")
                        $(".tabs a:first-child span").trigger("click")
                    })
                }
            })
            $("main .content .tags,.descricao").on("keypress", function(event){
                if(event.keyCode === 13){
                    var descripition = $input.val(),
                    tags = $taginput.val().split(",")

                    $.post("/todos", {"descricao": descripition, "tags": tags}, function(response){ 
                        $input.val("")
                        $taginput.val("")
                        $(".tabs a:first-child span").trigger("click")
                    })

                   
                }
               
            })
        
        }
    })

    tabs.forEach(function(item){
        var $aElement = $("<a>").attr("href", ""),
            $spanElement = $("<span>").text(item.name)

        $aElement.append($spanElement)
        $("main .tabs").append($aElement)
            
        $spanElement.on("click", function(){

            $(".tabs a span").removeClass("active")
            $spanElement.addClass("active")
            

            $content = item.content(function ($content){
                $("main .content").empty()
                if(Array.isArray($content) == true){
                    $content.forEach(function(dado){
                        $("main .content").append(dado)
                    })
                }else{
                    $("main .content").append($content)
                }
            })

            return false
        })
        
    })

    $(".tabs a:first-child span").trigger("click")
}

$(document).ready(function(){
    var url = window.location.href
    $.getJSON("dados", function(dados){
        main(dados)
    })
})
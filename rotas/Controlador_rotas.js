var toDo = require("../dados/conexao_BD.js")
var controlador = {}
var usuario = require("../Dados/conexao_BD.js") 

controlador.criarusuario = function(req, res){
    
}
controlador.autenticarusuario = function(req, res){
    // PEGO A SENHA MANDADA E AUTENTICO SE FOR AUTENTICADO 
    // CARREGO A PAGINA DOS TOdOS SE NAO PEÇO PARA TENTAR NOVAMENTE
}
controlador.dadosdousuario = function(req, res){
    
}
controlador.nomedeusuarios = function(req, res){

}
controlador.buscarusuarios = function(req, res){
    var username = req.params.username
    usuario.find({"Usuario": username}, function(err, resposta){
        if(err !== null){
            res.send(err)
        }else if(resposta.lenght !== 0){
            res.send("usuario encontrado")
        }else{
            res.send(404)
        }
    })
}



















// toDoController.index = function(req, res){
//     var username = req.params.username ||null,
//         respondWithToDos

//     respondWithToDos = function(query){
//         toDo.find(query, function( err, toDos){
//             if(err !== null){
//                 res.json(500, err)
//             }else{
//                 res.json(200, toDos)
//             }
        
//         })
//     }
//     if(username !== null){
//         userscontroller.find({"userName": username}, function(err, result){
//             if(err !== null){
//                 res.json(500, err)
//             }else if(result.lenght === 0){
//                  res.send(404)
//             }else{
//                 respondWithToDos({"ower": result[0].id})
//             }
//         })
//     }else{
//         respondWithToDos({})
//     }
    
// }
// toDoController.create = function(req, res){
//     var username = req.params.username || null
//     var newToDo = new toDo(req.body)
    
//     userscontroller.find({"username":username}, function(err, result){
//         if(err){
//             res.send(500)
//         }else{
//             if(result.length === 0){
//                 newToDo.owner = null
//             }else{
//                 newToDo.owner = result[0]._id
//             }
//         }
//     })
//     newToDo.save(function(err, result){
//         console.log(result)
//         if(err !== null){
//             console.log(err)
//             res.json(500, err)
//         }else{
//             res.json(200, result)
//         }
//     })
// }
// toDoController.show = function(req, res){
//     var id = req.params.id
//     toDo.find({"_id":id}, function(err, toDo){
//         if(err !== null){
//             res.json(err)
//         }else{
//             if(toDo.length > 0){
//                 res.json(toDo[0])
//             }else{
//                 res.send("NOT FOUND")
//             }
//         }
//     })
// }

module.exports = controlador
var controlador = {}
var user = require("../Dados/conexao_BD.js")
var path = require("path")

controlador.criarusuario = function(req, res){
    res.sendFile(path.join(__dirname + '/cliente/Registro.html'))
}
controlador.autenticarusuario = function(req, res){
    var senha = req.body.Senha
    var usuario = req.body.Usuario
    user.find({"Usuario": usuario, "Senha":senha}, function(err, resposta){
        if(err !== null){
            res.send(500)
        }else if(resposta.length !== 0){
            res.sendFile(path.join(__dirname + '/cliente/tarefas.html'))
        }else{
            res.send(404)
        }
    })
}
controlador.dadosdousuario = function(req, res){
    var nome = req.params.nome
    var nome
}
// controlador.nomedeusuarios = function(req, res){

// }
controlador.buscarusuarios = function(req, res){
    var username = req.params.username
    user.find({"Usuario": username}, function(err, resposta){
        if(err !== null){
            res.send(500)
        }else if(resposta.length !== 0){
            res.sendFile(path.join(__dirname + '/cliente/login.html'))
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
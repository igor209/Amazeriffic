var controlador = {}
var user = require("../Dados/conexao_BD.js")
var path = require("path")
var bcrypt = require("bcrypt")
const { response } = require("express")
var salt = bcrypt.genSaltSync(10)

controlador.autenticarusuario = function(req, res){
    var senha = req.body.Senha
    var usuario = req.body.Usuario
     user.findOne({"Usuario": usuario}, function(err, resposta){
        if(err !== null){
            console.log(err)
            res.sendStatus(500)
        }else if(resposta.length !== 0){
           bcrypt.compare(senha, resposta.Senha, function(err, validado){
            if(err){
                res.sendStatus(404)
            }else if(!validado){
                res.sendStatus(404)
            }else{
                res.sendFile(path.join(__dirname + '/cliente/tarefas.html'))
            }
           })
        }else{
            res.sendStatus(404)
        }
    })
}
controlador.dadosdousuario = function(req, res){
    var usuario = req.body.Usuario
    user.findOne({"Usuario":usuario}, function(err, resultado){
        res.json(resultado.Tarefas)
    })
}
controlador.gravardados = function(req, res){
    var usuario = req.params.username
    console.log(usuario)
    var dados = req.body
    user.findOne({"Usuario":usuario}, function(err, resultado){
        console.log(resultado)
        resultado.Tarefas.push(dados)
        resultado.save(function(err, salvo){
            if(err){
                res.send(500)
            }else if(salvo){
                res.send(200)
            }
        })
    })
}
controlador.registrar = function(req, res){
    var usuario = req.body.Usuario
    var senha1 = req.body.Senha1
    var senha2 = req.body.Senha2
    user.find({"Usuario": usuario}, function(err, result){
        if(err){
            res.send(err)
        }else if(result.length !== 0){
            res.send("Nome de usuario Não disponivel")
        }else{
            if(senha1 == senha2){
                
                var senhaCriptografada = bcrypt.hashSync(senha1, salt)

                var novousuario = new user({"Usuario": usuario, "Senha": senhaCriptografada, "Tarefas": []})
                novousuario.save(function(err, result){
                    if(err !== null){
                        res.send("erro ao criar usuario")
                    }else{
                        res.send("usuario cadastrado com sucesso")
                    }
                })
                
            }else{
                res.send("As senhas não batem")
            }
        }
    })
}
controlador.buscarusuarios = function(req, res){
    var username = req.params.username
    user.find({"Usuario": username}, function(err, resposta){
        if(err !== null){
            res.send('500')
        }else if(resposta.length !== 0){
            res.sendFile(path.join(__dirname + '/cliente/login.html'))
        }else{
            res.send('404')
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
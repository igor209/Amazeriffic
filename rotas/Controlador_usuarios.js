var User = require("../dados/users.js")

var userscontroller = {}

// User.find({}, function(err, result){
//     if(err !== null){
//         console.log(err)
//     } else if(result.length === 0){
//         console.log('CRIANDO USUARIO')
//         var exemplodeusuario = new User({"userName": "semmy"});
//         exemplodeusuario.save(function(err, result){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("usuario salvo com sucesso")
//             }
//         })
//     }
// })

userscontroller.index = function (req, res){

    res.send(200)
}
userscontroller.show = function(req, res){
    User.find({"userName":req.params.username}, function(err, result){
        console.log(result)
        if(err){
            res.sendStatus(500, err)
        }else if(result.length !== 0){
           res.send("funcinou")
        }else{
             res.sendStatus(404)
        }
    })
}
userscontroller.create = function(req, res){

    res.send(200)
}
userscontroller.update = function(req, res){

    res.send(200)
}
userscontroller.destroy = function(req, res){
    
    res.send(200)
}

module.exports = userscontroller
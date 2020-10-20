var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/amazeriffic')

var esquema = mongoose.Schema({
    Usuario: String,
    Senha: String,
    Tarefas: [Object]
})

var user = mongoose.model("usuario", esquema)


module.exports = user
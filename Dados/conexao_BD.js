var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/amazeriffic')

var esquema = mongoose.Schema({
    Usuario: String,
    Senha: String,
    Tarefas: String
})

var user = mongoose.model("usuario", esquema)


module.exports = user
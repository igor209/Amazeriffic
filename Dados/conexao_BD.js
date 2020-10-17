var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/amazeriffic')

var esquema = mongoose.Schema({
    Usuario: String,
    Senha: String,
    tarefas: [String]
})

var usuario = mongoose.model("usuario", esquema)

module.exports = usuario
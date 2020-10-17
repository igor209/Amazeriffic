var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/amazeriffic')

var esquema = mongoose.Schema({
    Usuario: String,
    Senha: String
})

var toDo = mongoose.model("toDo", esquema)

module.exports = toDo
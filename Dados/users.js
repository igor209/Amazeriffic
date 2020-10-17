var mongoose =require('mongoose')
    mongoose.connect('mongodb://localhost/amazeriffic')

var todoesquema = mongoose.Schema({
    Login: String,
    Senha: String
})

var Usuarios = mongoose.model("usuarios", todoesquema)

module.exports = usuarios
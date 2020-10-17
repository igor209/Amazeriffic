var http = require('http'), 
    app, 
    express = require('express'),
    toDoController = require("./rotas/Controlador_rotas.js"),
    Users = require("./rotas/Controlador_usuarios.js")
    
app = express()
app.use(express.static(__dirname +'/cliente'))
app.use(express.urlencoded())

http.createServer(app).listen(3000)



console.log('Servidor Online')
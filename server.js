var http = require('http'), 
    app, 
    express = require('express'),
    controlador = require("./rotas/Controlador_rotas.js")
    
app = express()
app.use(express.static(__dirname +'/rotas/cliente'))
app.use(express.urlencoded())

http.createServer(app).listen(3000)

app.post("/registrarusuario", controlador.registrar)
app.post("/autenticar", controlador.autenticarusuario)
app.post("/:username/dados", controlador.dadosdousuario)
app.get("/:username", controlador.buscarusuarios)
app.post("/:username/gravardados", controlador.gravardados)




console.log('Servidor Online')
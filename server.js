var http = require('http'), 
    app, 
    express = require('express'),
    controlador = require("./rotas/Controlador_rotas.js")
    
app = express()
app.use(express.static(__dirname +'/rotas/cliente'))
app.use(express.urlencoded())

http.createServer(app).listen(3000)

app.post("/registrarusuario", controlador.registrar)
app.get("/registrar", controlador.criarusuario)
app.post("/autenticar", controlador.autenticarusuario)
app.post("/:username/dados", controlador.dadosdousuario)
app.get("/:username", controlador.buscarusuarios)




console.log('Servidor Online')
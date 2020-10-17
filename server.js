var http = require('http'), 
    app, 
    express = require('express'),
    controlador = require("./rotas/Controlador_rotas.js"),
    
app = express()
app.use(express.static(__dirname +'/cliente'))
app.use(express.urlencoded())

http.createServer(app).listen(3000)

app.post("/registrar", controlador.criarusuario)
app.post("/autenticar", controlador.autenticarusuario)
app.get("/:username/dados", controlador.dadosdousuario)
app.get("nomesdeusuarios", controlador.nomedeusuarios)
app.get("/:username", controlador.buscarusuario)




console.log('Servidor Online')
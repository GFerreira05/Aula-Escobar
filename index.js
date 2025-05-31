const express = require("express")
const cors = require("cors")
var app = express()

app.use(cors())
app.use(express.json())

require("./routes/usuario")(app)


app.listen(3000, function() {
    console.log("Servidor online!!!")
})


app.get('/api/produtos', function(req, res) {
    return res.send("Ola mundo")
})

app.post('/api/produtos', function(req, res) {
    return res.send("Inclusao de produto")
})

app.get("/", function(req, res) {
    var texto = "<marquee>Minha primeira API</marquee>"
    return res.send(texto)
})


app.put("/api/produtos", function(req, res) {
    var { nome, modelo, ano, observacao, preco } = req.body

    if ( preco == undefined || preco == 0 )
        return res.send( { mensagem: "Preco é obrigatório"} )

    return res.send( nome )
})

app.get("/api/vendas/:id", function(req, res) {
    console.log( req.params )

    return res.send({ mensagem: "Chegou" })
})
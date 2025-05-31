// 4.1 importar EXPRESS para iniciar nossa API
const express = require("express")

// 4.2 criar variável APP que recebera todos os métodos de EXPRESS
var app = express()

// 4.6 Adicionando a possibilidade de receber JSON pelo express
app.use(express.json())

/*
 4.3 Iniciar o serviço de API
 Metodo app.listen( <porta>, funcao() {} )
*/
app.listen(3000, function() {
    console.log("Servidor online!!!")
})

/*
4.4 Recebendo requisicoes
 Metodos possiveis: GET, PUT, POST, DELETE
 Rotas: /api/login
        /api/produtos
        /api/clientes

 app.<metodo>( <rota>, 
            function(<dados_recebidos>, <dados_retornados>){
                return <dados>
            })

https://github.com/rodescobar/backendAula
*/
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

/*
 4.5 Recebendo dados via POST, PUT, DELETE
 Os dados serão recebidos pela REQUEST

 OBS: lembrar do item 4.6 (la em cima do codigo)
 {
    nome: "Fiat Uno",
    modelo: 1996,
    ano: 1996,
    observacao: "Com escada"
 }
*/

app.put("/api/produtos", function(req, res) {

    //var nome = req.body.nome
    //4.7 Pegando as variaveis recebidas
    var { nome, modelo, ano, observacao, preco } = req.body

    if ( preco == undefined || preco == 0 )
        return res.send( { mensagem: "Preco é obrigatório"} )

    return res.send( nome )
})

// 4.8 Envio de informacoes Obrigatorias ou Não via GET
// /channel/1324147874987/messages/465465465465
// /channel/:id_channel/messages/:id_message

// Buscando UMA venda especifica ou TODAS
//Neste exemplo buscando obrigatoriamente pelo ID
app.get("/api/vendas/:id", function(req, res) {
    console.log( req.params )

    return res.send({ mensagem: "Chegou" })
})
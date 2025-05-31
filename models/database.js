//5.1 Importando componente mongoose 
const moongose = require("mongoose")

try {
    //5.3 String de conexão com o banco, pego no site do MongoDB
    const url = "mongodb+srv://rodrigo:rodrigo01@cluster0.uf2sxcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    //5.2 abrir conexao com o MongoDB
    moongose.connect( url )

}
catch (err)
{
    console.log(err)
}

moongose.Promise = global.Promise

module.exports = moongose

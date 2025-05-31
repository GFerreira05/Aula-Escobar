const mongoose = require('./database')

const { Schema } = mongoose

const UsuarioTable = new Schema(
    {
        usuario: {
            type: String,
            required: true,
            unique: true
        },
        senha: {
            required: true,
            type: String
        },
        data_criacao: { 
            type: Date,
            default: Date.now 
        },
        nome: String,
        nivel: [
            {
                tipo: Number,
                observacao: String
            }
        ]
    }
)

const Usuario = mongoose.model('Usuario', UsuarioTable)
module.exports = Usuario

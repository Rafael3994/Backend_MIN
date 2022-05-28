const { Schema, model } = require('mongoose')

/**
 * Esta constante exporta el formatodel wallet del schema para mongodb
 * @const {Schema}
 */
const walletSchema = new Schema({
    nombre: {type: String, required: true},
    moneda: {type: String, required: true},
    direccion: {type: String, required: true},
    saldo: {type: String, required: true},
    valor_inicial: {type: String, required: true},
    valor_actual: {type: String, required: true},
    usuario: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Wallet', walletSchema);

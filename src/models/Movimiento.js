const { Schema, model, Mongoose } = require('mongoose')

/**
 * Esta constante exporta el formato de los movimientos schema para mongodb
 * @const {Schema}
 */
const movimientoSchema = new Schema({
    usuario: {type: String, required: true},
    nombre_moneda_original: {type: String, required: true},
    valor_moneda_original: {type: String, required: true},
    cantidad_moneda_original: {type: String, required: true},
    nombre_moneda_nueva: {type: String, required: true},
    valor_moneda_nueva: {type: String, required: true},
    cantidad_moneda_nueva: {type: String, required: true},
    fecha_operacion: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('movimiento', movimientoSchema);

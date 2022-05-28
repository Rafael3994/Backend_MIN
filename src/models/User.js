const { Schema, model, Mongoose } = require('mongoose')

/**
 * Esta constante exporta el formato del user schema para mongodb
 * @const {Schema}
 */
const userSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema);

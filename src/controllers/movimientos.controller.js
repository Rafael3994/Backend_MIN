const movimientoCtrl = {}

const Movimiento = require('../models/Movimiento')
const funciones = require('../../src/funciones')

/**
 * Esta funcion devuelve informacion de todos los movimientos del usuario logueado.
 * @return Json con todos los movimientos del usuario logueado
 */
movimientoCtrl.getMovimientos = async (req, res) => {
    id = funciones.verifyToken2(req, res)
    console.log(id);
    const movimientos = await Movimiento.find({usuario: id }).exec();
    res.json(movimientos)
}

/**
 * Esta funcion devuelve informacion de un movimientos segun su id.
 * @return movimientos creado
 */
movimientoCtrl.getMovimiento = async (req, res) => {    
    const movimiento = await Movimiento.findById(req.params.id)
    res.send(movimiento)
}

/**
 * Esta funcion crea un movimientos para el usuario logueado.
 * @return informando que se ha creado bien el movimiento
 */
movimientoCtrl.createMovimiento = async (req, res) => {
    const newMovimiento = new Movimiento(req.body)
    newMovimiento.usuario = funciones.getId(req.body.usuario);
    await newMovimiento.save()
    res.send({status: 201, message: 'Movimiento creado'})
}

/**
 * Esta funcion un movimiento con los nuevos datos a traves de su id.
 * @return informando que ha actualizado bien el movimiento
 */
movimientoCtrl.editMovimiento = async (req, res) => {
    await Movimiento.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: 204, message:"Movimiento actualitzat"})
}

/**
 * Esta funcion elimina el movimiento por la id recibida.
 * @return informando que se ha eliminado bien el movimiento
 */
movimientoCtrl.deleteMovimiento = async (req, res) => {
    await Movimiento.findByIdAndDelete(req.params.id)
    res.send({status: 204, message:"Movimiento eliminat"})
}


module.exports = movimientoCtrl

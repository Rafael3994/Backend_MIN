const walletCtrl = {}

const Wallet = require('../models/Wallet')
const funciones = require('../../src/funciones')

/**
 * Esta funcion muestra las wallets usuario.
 * @param {String} id recibe la id del usuario
 * @return todos los wallets del usuario
 */
walletCtrl.getWallets = async (req, res) => {
    id = funciones.verifyToken2(req, res)
    console.log(id);
    const wallets = await Wallet.find({usuario: id }).exec();
    res.json(wallets)
}

/**
 * Esta funcion muestra informacion de un wallets.
 * @param {String} id recibe la id del wallet
 * @return informacion del wallet
 */
walletCtrl.getWallet = async (req, res) => {    
    const wallet = await Wallet.findById(req.params.id)
    res.send(wallet)
}

/**
 * Esta funcion crea una wallet.
 * @param {JSON} body recibe la informacion del wallet
 * @return informando que ha creado correctamente
 */
walletCtrl.createWallet = async (req, res) => {
    const newWallet = new Wallet(req.body)
    newWallet.usuario = funciones.getId(req.body.usuario);
    await newWallet.save()
    res.send({status: 201, message: 'Wallet creado'})
}

/**
 * Esta funcion edita la información del wallet.
 * @param {String} id recibe la id del wallet a editar
 * @param {JSON} body recibe la informacion del wallet
 * @return informando que ha sido modificado correctamente
 */
walletCtrl.editWallet = async (req, res) => {
    await Wallet.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: 204, message:"Wallet actualitzat"})
}

/**
 * Esta funcion borra el wallet.
 * @param {String} id recibe la id del wallet a eliminar
 * @return informando que se ha eliminado correctamente
 */
walletCtrl.deleteWallet = async (req, res) => {
    await Wallet.findByIdAndDelete(req.params.id)
    res.send({status: 204, message:"Wallet eliminat"})
}

module.exports = walletCtrl

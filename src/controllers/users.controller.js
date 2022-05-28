const userCtrl = {}

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

/**
 * Esta funcion muestra la informacion del usuario.
 * @return informando de todos los usuarios
 */
userCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

/**
 * Esta funcion muestra la informacion del usuario.
 * @param {String} id recibe la id del usuario
 * @return informando del usuario solicitado
 */
userCtrl.getUser = async (req, res) => {    
    const user = await User.findById(req.params.id)
    res.send(user)
}

/**
 * Esta funcion crea el usuario.
 * @param {JSON} body recibe la informacion del usuario
 * @return informando que ha creado correctamente
 */
userCtrl.createUser = async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    res.send({status: 201, message: 'User creado'})
}

/**
 * Esta funcion edita la información del usuario.
 * @param {String} id recibe la id del usuario a editar
 * @param {JSON} body recibe la informacion del usuario
 * @return informando que ha registrado correctamente
 */
userCtrl.editUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: 204, message:"Usuari actualitzat"})
}

/**
 * Esta funcion borra a un usuario.
 * @param {String} id recibe la id del usuario a eliminar
 * @return informando que ha registrado correctamente
 */
userCtrl.deletUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send({status: 204, message:"Usuari eliminat"})
}

/**
 * Esta funcion hace el registro con los datos recibidos del formulario.
 * @return informando que ha registrado correctamente
 */
userCtrl.register = async (req, res) => {
    console.log(req)
    req.body.password = await bcrypt.hash(req.body.password, 2);
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save()
    const token = jwt.sign({_id: newUser._id}, 'secretKey')
    console.log(req.body.email)
    // funciones.sendemail(req.body.email)
    res.status(201).json({message: "usuario registrat correctamente", token});
}

/**
 * Esta funcion hace el login, comprueba que exista el correo y coincida con la contraseña
 * @param {String} email recibe el email del body de la peticion que envia el formulario.
 * @param {String} contraseña recibe la contraseña del body de la peticion que envia el formulario.
 * @return informando que se ha logueado correctamente
 */
userCtrl.login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({email})

    if (!user) { return res.status(400).send("El correo no existe"); } 

    const token = jwt.sign({_id: user._id}, 'secretKey')
    var result = bcrypt.compareSync(password, user.password);
    if (!result) {
        return res.status(400).send("Contraseña incorrecta");
    }
    res.status(200).json({message: "usuario logueado correctamente", token});
}

module.exports = userCtrl

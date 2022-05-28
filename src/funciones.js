const funciones = {}
    
const jwt = require('jsonwebtoken')

/**
 * Esta funcion mira el header de la peticion a la api que le pases el token conforme estas logueado.
 * @return {string} La id del usuario
 */
// funciones.verifyToken = (req, res) =>{
//     if (!req.headers.authorization){ return res.status(401).send('Usuario no autorizado'); } 
//     const token = req.headers.authorization.split(' ')[1]
//     if (token === null ){ return res.status(401).send('Usuario no autorizado'); }
//     const payload = jwt.verify(token, 'secretKey');
//     return payload._id;
// }

/**
 * Esta funcion mira que en la url le pases el token conforme estas logueado.
 * @return {string} La id del usuario
 */
funciones.verifyToken2 = (req, res) =>{
    if (!req.params.id){ return res.status(401).send('Usuario no autorizado'); } 
    const token = req.params.id;
    if (token === null ){ return res.status(401).send('Usuario no autorizado'); }
    const payload = jwt.verify(token, 'secretKey');
    return payload._id;
}

/**
 * Esta funcion recibe un token de usuario.
 * @return {string} La id del usuario
 */
funciones.getId = (token) =>{
    const payload = jwt.verify(token, 'secretKey');
    console.log(payload._id);
    return payload._id;
}

// funciones.sendemail = (email) =>{
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//         user: 'min.investing@gmail.com',
//         pass: 'PEDRA.2021'
//         }
//     });

//     var mailOptions = {
//         from: 'min.investing@gmail.com',
//         to: email,
//         subject: 'Bienvenido a MIN',
//         text: 'Muchas gracias por registrate en MIN le deseamos mucha fortuna!'
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//         console.log(error);
//         return error;
//         } else {
//         console.log('Email sent: ' + info.response);
//         return true;
//         }
//     });
// }
module.exports = funciones
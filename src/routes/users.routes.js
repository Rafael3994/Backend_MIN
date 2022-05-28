const { Router } = require('express')
const router = Router()

const userCtrl = require('../controllers/users.controller.js')
// CRUD
// CREATE - READ - UPDATE - DELETE

// router.get('/', (req, res) => res.send('Hello estas logueado')); // muestra todo los usuarios

router.post('/register', userCtrl.register); //
router.post('/login', userCtrl.login); //

router.get('/', userCtrl.getUsers); // muestra todo los usuarios

// router.post('/', userCtrl.createUser); //crea user al hacer post /api/users que es la ruta por defecto
 
// router.get('/:id', userCtrl.getUser); //obtiene un usuario por su id

// router.put('/:id', userCtrl.editUser); //editar user por id

// router.delete('/:id', userCtrl.deletUsers); //borrar user por id


module.exports = router

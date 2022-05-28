const { Router } = require('express')
const router = Router()

const movimientosCtrl = require('../controllers/movimientos.controller.js')
// CRUD
// CREATE - READ - UPDATE - DELETE

// router.get('/', movimientosCtrl.getMovimientos); // muestra todo los usuarios

router.get('/:id', movimientosCtrl.getMovimientos); 

router.post('/', movimientosCtrl.createMovimiento); //crea user al hacer post /api/users que es la ruta por defecto
 
router.get('/:id', movimientosCtrl.getMovimiento); //obtiene un usuario por su id

router.put('/:id', movimientosCtrl.editMovimiento); //editar user por id

router.delete('/:id', movimientosCtrl.deleteMovimiento); //borrar user por id


module.exports = router
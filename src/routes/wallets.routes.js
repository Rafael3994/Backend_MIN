const { Router } = require('express')
const router = Router()

const walletCtrl = require('../controllers/wallets.controller.js')
// CRUD
// CREATE - READ - UPDATE - DELETE

// router.get('/', walletCtrl.getWallets); // muestra todo los usuarios

router.get('/:id', walletCtrl.getWallets); 

router.post('/', walletCtrl.createWallet); //crea user al hacer post /api/users que es la ruta por defecto
 
router.get('/:id', walletCtrl.getWallet); //obtiene un usuario por su id

router.put('/:id', walletCtrl.editWallet); //editar user por id

router.delete('/:id', walletCtrl.deleteWallet); //borrar user por id


module.exports = router
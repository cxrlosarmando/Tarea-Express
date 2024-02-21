const express = require('express');
const UserGet = require('../controllers/user.get');
const UserAdd = require('../controllers/user.add');
const ActualizarUsuario = require('../controllers/actualizar');
const UserDelete = require('../controllers/user.delete')
const router = express.Router();


router.get('/',UserGet);

router.post('/Agregar-Usuario', UserAdd);

router.put('/Actualizar-Usuario/:id', ActualizarUsuario);


router.delete('/Eliminar-Usuario/:id', UserDelete);

module.exports = router;




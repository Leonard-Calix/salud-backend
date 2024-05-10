const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/ninos.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const router = Router();

router.get('/', findAll);

router.get('/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('monitoreoId', 'El monitoreo es obligatorio').isEmpty(),
    check('lactancia', 'La lactancias es obligatorio').isEmpty(),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
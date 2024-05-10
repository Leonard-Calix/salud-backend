const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/detalleNino.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existMonitoreoById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/monitoreo/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('rango1', 'El valor de rango1 es  obligatorio').not().isEmpty(),
    check('rango2', 'El valor de rango2 es obligatorio').not().isEmpty(),
    check('rango3', 'El valor de rango3 es obligatorio').not().isEmpty(),
    check('femenino', 'El valor de femenino es obligatorio').not().isEmpty(),
    check('masculino', 'El valor de masculino es obligatorio').not().isEmpty(),
    check('MonitoreoId', 'El monitoreo es obligatorio').not().isEmpty(),
    check('MonitoreoId').custom(existMonitoreoById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/partos.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existMonitoreoById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/monitoreo/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('programadas', 'El valor de programadas es obligatorio').not().isEmpty(),
    check('ejecutadas', 'El valor de ejecutadas es obligatorio').not().isEmpty(),
    check('MonitoreoId', 'El monitoreo es obligatorio').not().isEmpty(),
    check('MonitoreoId').custom(existMonitoreoById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
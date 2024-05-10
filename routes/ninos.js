const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/ninos.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existMonitoreoById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('MonitoreoId', 'El monitoreo es obligatorio').not().isEmpty(),
    check('lactancia', 'La lactancias es obligatorio').not().isEmpty(),
    check('MonitoreoId').custom(existMonitoreoById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
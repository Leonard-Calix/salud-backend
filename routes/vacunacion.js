const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/vacunacion.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existMonitoreoById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/monitoreo/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('hepatitis', 'El valor de hepatitis es obligatorio').not().isEmpty(),
    check('bcg', 'El valor de bcg es obligatorio').not().isEmpty(),
    check('pentavalente', 'El valor de pentavalente es obligatorio').not().isEmpty(),
    check('rotavirus', 'El valor de rotavirus es obligatorio').not().isEmpty(),
    check('srp', 'El valor de srp es obligatorio').not().isEmpty(),
    check('nuemococo', 'El valor de nuemococo es obligatorio').not().isEmpty(),
    check('MonitoreoId', 'El monitoreo es obligatorio').not().isEmpty(),
    check('MonitoreoId').custom(existMonitoreoById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
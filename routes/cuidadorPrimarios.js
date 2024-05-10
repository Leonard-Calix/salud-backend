const { Router } = require('express');
const { findAll, save, findAllByMonitoreo } = require('../controllers/cuidadorPrimario.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existMonitoreoById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/monitoreo/:monitoreoId', findAllByMonitoreo);

router.post('/', [
    check('padre', 'El padre es obligatorio').not().isEmpty(),
    check('madre', 'La madre es obligatorio').not().isEmpty(),
    check('abuela', 'La abuela es obligatorio').not().isEmpty(),
    check('total', 'El total es obligatorio').not().isEmpty(),
    check('MonitoreoId', 'El monitoreo es obligatorio').not().isEmpty(),
    check('MonitoreoId').custom(existMonitoreoById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
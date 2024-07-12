const { Router } = require('express');
const { grafico1, porcentajeFamilasAtendidas, porcentajeNiñosDesnutricion } = require('../controllers/graficos.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { existMonitoreoById } = require('../helpers/db-validators');
const { check } = require('express-validator');
const router = Router();

router.post('/numero-familas-atendidas',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('fechaInicial', 'El campo es obligatorio').not().isEmpty(),
        check('fechaFinal', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        //validarJWT,
        validarCampos,
    ],
    porcentajeFamilasAtendidas
);

router.post('/porcentaje-desnutricion',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('fechaInicial', 'El campo es obligatorio').not().isEmpty(),
        check('fechaFinal', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        //validarJWT,
        validarCampos,
    ],
    porcentajeNiñosDesnutricion
);

module.exports = router;
const { Router } = require('express');
const { grafico1, porcentajeFamilasAtendidas, porcentajeNiñosDesnutricion, porcentajeNiños, porcentajeFamilasAtendidasGeneral, getGraficoN1, getGraficoN2, getGraficoN3 } = require('../controllers/graficos.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { existMonitoreoById, existCommunityById } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/valida-jwt');
const { check } = require('express-validator');
const router = Router();

router.post('/numero-familas-atendidas',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('fechaInicial', 'El campo es obligatorio').not().isEmpty(),
        check('fechaFinal', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        validarJWT,
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
        validarJWT,
        validarCampos,
    ],
    porcentajeNiñosDesnutricion
);

router.post('/porcentaje-ninos',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('fechaInicial', 'El campo es obligatorio').not().isEmpty(),
        check('fechaFinal', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        validarJWT,
        validarCampos,
    ],
    porcentajeNiños
);

router.post('/porcentaje-general-anio',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
        //validarJWT,
        validarCampos,
    ],
    porcentajeFamilasAtendidasGeneral
);

router.post('/porcentaje-g1',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        validarJWT,
        validarCampos,
    ],
    getGraficoN1
);

router.post('/porcentaje-g2',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        validarJWT,
        validarCampos,
    ],
    getGraficoN2
);

router.post('/porcentaje-g3',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId', 'El campo es obligatorio').not().isEmpty(),
        check('monitoreoId').custom(existMonitoreoById),
        validarJWT,
        validarCampos,
    ],
    getGraficoN3
);

module.exports = router;
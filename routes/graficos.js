const { Router } = require('express');
const { grafico1, porcentajeFamilasAtendidas, porcentajeNiñosDesnutricion, porcentajeNiños, porcentajeFamilasAtendidasGeneral, getGraficoN1, getGraficoN2, getGraficoN3, porcentajeFamilasAtendidasGeneralDesnutricion, porcentajeFamilasAtendidasGeneralAtendidos } = require('../controllers/graficos.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { existCommunityById } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/valida-jwt');
const { check } = require('express-validator');
const router = Router();

router.post('/numero-familas-atendidas',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('fechaInicial', 'El campo es obligatorio').not().isEmpty(),
        check('fechaFinal', 'El campo es obligatorio').not().isEmpty(),
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
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
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
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
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
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
        validarJWT,
        validarCampos,
    ],
    porcentajeFamilasAtendidasGeneral
);

router.post('/porcentaje-general-anio-desnutricion',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
        validarJWT,
        validarCampos,
    ],
    porcentajeFamilasAtendidasGeneralDesnutricion
);

router.post('/porcentaje-general-anio-ninos-atendidos',
    [
        check('anio', 'El campo es obligatorio').not().isEmpty(),
        check('communityId', 'El campo es obligatorio').not().isEmpty(),
        check('communityId').custom(existCommunityById),
        validarJWT,
        validarCampos,
    ],
    porcentajeFamilasAtendidasGeneralAtendidos
);


module.exports = router;
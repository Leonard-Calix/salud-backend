const { Router } = require('express');
const { findAll, save, findAllByComnunity } = require('../controllers/momitoreo.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { existCommunityById } = require('../helpers/db-validators');
const router = Router();

router.get('/', findAll);

router.get('/:communityId', findAllByComnunity);

router.post('/', [
    check('CommunityId', 'La cominudad es obligatorio').not().isEmpty(),
    check('famPriorizadas', 'La cantidad de familias es obligatorio').not().isEmpty(),
    check('CommunityId').custom(existCommunityById),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
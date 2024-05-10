const { Router } = require('express');
const { findAll, save, findAllByComnunity } = require('../controllers/momitoreo.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const router = Router();

router.get('/', findAll);

router.get('/:communityId', findAllByComnunity);

router.post('/', [
    check('comunidadId', 'La cominudad es obligatorio').isEmpty(),
    check('famPriorizadas', 'La cominudad es obligatorio').isEmpty(),
    //validarJWT,
    validarCampos
], save);


module.exports = router;
const { Router, Request, Response } = require('express');
const { index } = require('../controllers/app.controller');
const { save } = require('../controllers/monitoreoStack.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { existCommunityById } = require('../helpers/db-validators');
const router = Router();

router.post('/', [
    check('monitoreo.communityId').custom(existCommunityById),
    //validarJWT,
    validarCampos
], save);

module.exports = router;
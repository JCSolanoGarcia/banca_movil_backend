const {Router} = require('express');
const { check } = require('express-validator');

const { bancosGet, 
        bancosPost, } = require('../controllers/bancos.controller');
const { existeBanco } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', bancosGet);

router.post('/',
    [
        check('nombre_banco','El nombre del banco es obligatorio').not().isEmpty(),
        check('nombre_banco').custom(existeBanco),
        validarCampos
    ],
    bancosPost);

module.exports = router;
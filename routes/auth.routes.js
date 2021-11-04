const {Router} = require('express');
const { check } = require('express-validator');

const { loginPost } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    check('tipoIdentificacion','El tipo de identificación es obligatorio').not().isEmpty(),
    check('numeroIdentificacion','El número de identificación es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
], loginPost);

module.exports = router;
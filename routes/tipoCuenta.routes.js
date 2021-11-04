const {Router} = require('express');
const { check } = require('express-validator');

const { tipoCuentaGet, 
        tipoCuentaPut, 
        tipoCuentaPost, 
        tipoCuentaDelete } = require('../controllers/tipoCuenta.controller');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', tipoCuentaGet);

router.put('/', tipoCuentaPut);

router.post('/',
    [
        check('tipo_cuenta','El tipo de cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    tipoCuentaPost);


router.delete('/', tipoCuentaDelete);

module.exports = router;
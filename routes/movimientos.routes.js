const {Router} = require('express');
const { check } = require('express-validator');

const { movimientoPost } = require('../controllers/movimientos.controller');
const { existeIDActualizar } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/',
    [
        check('cuenta_origen', 'Cuenta origen no es un Id valido').not().isEmpty(),
        check('cuenta_origen').custom(existeIDActualizar),
        check('cuenta_destino','Cuenta destino no es un Id valido').not().isEmpty(),
        check('cuenta_destino').custom(existeIDActualizar),
        check('monto','El monto es obligatorio').not().isEmpty(),
        check('saldo','El saldo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    movimientoPost);

module.exports = router;
const {Router} = require('express');
const { check } = require('express-validator');

const { cuentasGet,
        cuentasTercerosGet,
        cuentasTercerosUnaGet,
        cuentasAliasPut, 
        cuentasPut, 
        cuentasPost, } = require('../controllers/cuentas.controller');
        
const { existeIdentificacion, 
        existeAliasCuenta, 
        existeIDActualizar, 
        existeIDMovimiento,
        existeID,
        existeTercero,
        existeUsuarioID, 
        existeCuenta} = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//listar cuentas propias por identificación
router.get('/:id',[
    check('id').custom(existeIdentificacion),
    validarCampos
    ], cuentasGet);

//listar cuentas de terceros
router.get('/usuario/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeID),
    validarCampos
    ], cuentasTercerosGet);

//listar cuentas de terceros filtrada
router.get('/tercero/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeTercero),
    validarCampos
    ], cuentasTercerosUnaGet);

router.put('/:id',[
    check('id','No es un ID valido').not().isEmpty(),
    check('id').custom(existeIDActualizar),
    validarCampos
    ], cuentasPut);

router.put('/alias:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeIDActualizar),
    validarCampos
    ], cuentasAliasPut);

router.post('/',
    [
        check('alias','El alias es obligatorio').not().isEmpty(),
        check('nombre_banco','El nombre de la entidad bancaria es obligatorio').not().isEmpty(),
        check('tipo_cuenta','El tipo de cuenta es obligatorio').not().isEmpty(),
        check('numero_cuenta','El numero de cuenta es obligatorio y debe contener 11 números').isLength({max: 11, min: 11}),
        check('identificacion_titular','El número de identificación del titular es obligatorio y debe contener 12 números').isLength({max: 12, min: 12}),
        check('moneda','La moneda es obligatoria').not().isEmpty(),
        check('idCreador','El ID del usuario es obligatorio').not().isEmpty(),
        check('idCreador').custom(existeUsuarioID),
        check('numero_cuenta').custom(existeAliasCuenta),
        validarCampos
    ],
    cuentasPost);

module.exports = router;
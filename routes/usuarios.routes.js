
const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {existeNumero, existeUsuarioID } = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios.controller');


const router = Router();

router.get('/:id',[
        check('id','No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioID),
        validarCampos
], usuariosGet);

router.put('/:id',[
        validarJWT,
        check('id','No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioID),
        validarCampos
        ], usuariosPut);

router.post('/',[
        check('numeroIdentificacion','El número de identificación debe contener 12 números').isLength({min: 12, max: 12}),
        check('numeroIdentificacion').custom(existeNumero),
        check('password','El password debe ser de más de 8 caracteres').isLength({min: 8}),
        validarCampos
        ], usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;
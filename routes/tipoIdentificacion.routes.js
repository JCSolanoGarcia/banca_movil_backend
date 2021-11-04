const {Router} = require('express');
const { check } = require('express-validator');

const { tipoIdentificacionGet, 
        tipoIdentificacionPut, 
        tipoIdentificacionPost, 
        tipoIdentificacionDelete } = require('../controllers/tipoIdentificacion.controller');
const { existeTipo } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', tipoIdentificacionGet);

router.put('/:id', tipoIdentificacionPut);

router.post('/',
    [
        check('nombre_tipo','El tipo de identificación es obligatorio').not().isEmpty(),
        check('nombre_tipo').custom(existeTipo),
        validarCampos
    ],
    tipoIdentificacionPost);


router.delete('/', tipoIdentificacionDelete);

module.exports = router;
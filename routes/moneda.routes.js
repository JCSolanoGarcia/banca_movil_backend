const {Router} = require('express');
const { check } = require('express-validator');

const { monedaGet, 
        monedaPut, 
        monedaPost, 
        monedaDelete } = require('../controllers/moneda.controller');


const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', monedaGet);

router.put('/:id', monedaPut);

router.post('/',
    [
        check('moneda','El tipo de cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    monedaPost);


router.delete('/', monedaDelete);

module.exports = router;
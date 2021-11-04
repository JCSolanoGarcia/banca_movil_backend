const { validationResult } = require('express-validator');

const validarCampos = (req, res, next)=>{
    const errors = validationResult(req);
    //const resp = validationResult(req).mapped().numeroIdentificacion.msg;
    if(!errors.isEmpty()){
        return res.status(290).json(errors)
    }
    next();
}

module.exports = {
    validarCampos
}
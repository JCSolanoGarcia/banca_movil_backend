const {response, request} = require('express');

const TipoCuenta = require('../models/tipoCuenta.model');


const tipoCuentaGet = async (req = request, res= response)=>{
    const tiposCuenta = await TipoCuenta.find();
    res.json(tiposCuenta);
}

const tipoCuentaPut = (req= request, res= response)=>{
    const id = req.params.id;
    res.json({
        msg: 'Put al api - controller',
        id
    });
}

const tipoCuentaPost = async (req , res= response)=>{
    
    const { ...tipoId } = req.body;
    const tipoCuenta = new TipoCuenta(tipoId);

    await tipoCuenta.save();

    res.json(tipoCuenta);
}

const tipoCuentaDelete = (req = request, res= response)=>{
    res.json({
        msg: 'Delete al api - controller'
    });
}

module.exports = {
    tipoCuentaGet,
    tipoCuentaPut,
    tipoCuentaPost,
    tipoCuentaDelete
}
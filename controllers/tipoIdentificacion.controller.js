const {response, request} = require('express');

const TipoIdentificacion = require('../models/tipoIdentificacion.model');


const tipoIdentificacionGet = async (req = request, res= response)=>{
    const tiposIdentificacion = await TipoIdentificacion.find();
    res.json(tiposIdentificacion);
}

const tipoIdentificacionPut = (req= request, res= response)=>{
    const id = req.params.id;
    res.json({
        msg: 'Put al api - controller',
        id
    });
}

const tipoIdentificacionPost = async (req , res= response)=>{
    
    const { ...tipoId } = req.body;
    const tipoIdentificacion = new TipoIdentificacion(tipoId);

    await tipoIdentificacion.save();

    res.json(tipoIdentificacion);
}

const tipoIdentificacionDelete = (req = request, res= response)=>{
    res.json({
        msg: 'Delete al api - controller'
    });
}

module.exports = {
    tipoIdentificacionGet,
    tipoIdentificacionPut,
    tipoIdentificacionPost,
    tipoIdentificacionDelete
}
const {response, request} = require('express');

const Moneda = require('../models/moneda.model');


const monedaGet = async (req = request, res= response)=>{
    const monedas = await Moneda.find();
    res.json(monedas);
}

const monedaPut = (req= request, res= response)=>{
    const id = req.params.id;
    res.json({
        msg: 'Put al api - controller',
        id
    });
}

const monedaPost = async (req , res= response)=>{
    
    const { ...monedas } = req.body;
    const moneda = new Moneda(monedas);

    await moneda.save();

    res.json(moneda);
}

const monedaDelete = (req = request, res= response)=>{
    res.json({
        msg: 'Delete al api - controller'
    });
}

module.exports = {
    monedaGet,
    monedaPut,
    monedaPost,
    monedaDelete
}
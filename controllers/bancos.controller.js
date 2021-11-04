const {response, request} = require('express');

const Banco = require('../models/banco.model');


const bancosGet = async(req = request, res= response)=>{
    const bancos = await Banco.find();
    res.json({
       bancos
    });
}

const bancosPost = async (req , res= response)=>{
    
    const { nombre_banco} = req.body;
    const bancos = new Banco({nombre_banco});
    await bancos.save();
    res.json(bancos);
}

module.exports = {
    bancosGet,
    bancosPost,    
}
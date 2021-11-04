const {response, request} = require('express');

const Movimiento = require('../models/movimiento.model');

const movimientoPost = async (req , res= response)=>{
    
    const { ...movimientos } = req.body;
    const movimiento = new Movimiento(movimientos);
    await movimiento.save();
    res.json(movimiento._id);    
}

module.exports = { movimientoPost }
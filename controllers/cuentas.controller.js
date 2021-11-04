const {response, request} = require('express');

const Cuenta = require('../models/cuenta.model');

//listar cuentas propias
const cuentasGet = async(req = request, res= response)=>{ 
    const id = req.params.id;
    const cuentas = await Cuenta.find({'identificacion_titular': id});
    res.json(cuentas);
}

//listar todas cuentas de terceros ya inscritas
const cuentasTercerosGet = async(req = request, res= response)=>{ 
    const id = req.params.id;
    const cuentas = await Cuenta.find({'idCreador': id});
    res.json(cuentas);
}

//listar una cuentas de terceros ya inscritas
const cuentasTercerosUnaGet = async(req = request, res= response)=>{ 
    const id = req.params.id;
    const cuentas = await Cuenta.find({'_id': id});
    res.json(cuentas);
}

//actualizar saldo en una cuenta propia.
const cuentasPut = async(req= request, res= response)=>{
    const id = req.params.id;
    const {...datos} = req.body;
    const cuentas = await Cuenta.findByIdAndUpdate(id, {'saldo': datos.saldo, $push:{idMovimiento:{$each:[datos.idMovimiento]}}})
    res.json(cuentas);
}

//actualizar alias en una cuenta propia.
const cuentasAliasPut = async(req= request, res= response)=>{
    const id = req.params.id;
    const {alias} = req.body;
    const cuentas = await Cuenta.findByIdAndUpdate(id, {'alias': alias})
    res.json(cuentas);
}

//Crear cuentas de terceros en la base de datos
const cuentasPost = async (req , res= response)=>{    
    const { ...cuenta } = req.body;
    const cuentas = new Cuenta(cuenta);
    await cuentas.save();
    res.json(cuentas);
}

module.exports = {
    cuentasGet,
    cuentasTercerosGet,
    cuentasTercerosUnaGet,
    cuentasAliasPut,
    cuentasPut,
    cuentasPost,
}
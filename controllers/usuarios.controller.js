const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario.model');

const usuariosGet = async (req = request, res= response)=>{
    const id = req.params.id;
    const usuarios = await Usuario.findById({'_id': id});
    res.json(usuarios);
}

const usuariosPut = async(req = request, res= response)=>{
    const id = req.params.id;
    const { ...resto} = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id,{$push:{cuentasTerceros:{$each:[resto.cuentasTerceros]}}})
    res.json({
        msg: 'Put al api - controller',
        id
    });
}

const usuariosPost = async (req , res= response)=>{
    const cliente  = req.body;
    const usuario = new Usuario({
        nombreCliente: cliente.nombreCliente,
        tipoIdentificacion: cliente.tipoIdentificacion,
        numeroIdentificacion: cliente.numeroIdentificacion,
        password: cliente.password
    });

    //encriptar la constraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(cliente.password, salt);

    //guardar en BD
    await usuario.save().then((userDB)=>{
        res.json('Usuario creado exitosamente');
    }).catch((err)=>{
        console.log(err);
    });
    
}

const usuariosDelete = (req = request, res= response)=>{
    res.json({
        msg: 'Delete al api - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}
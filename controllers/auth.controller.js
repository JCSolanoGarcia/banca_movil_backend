const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario.model');
const { generarJWT } = require("../helpers/generarJWT");

const loginPost = async(req, res= response)=>{

    const { tipoIdentificacion, numeroIdentificacion, password } = req.body;
    try{
        
        const usuario = await Usuario.findOne({numeroIdentificacion});

        //validar si identificación existe
        if(!usuario){
            return res.status(400).json({
                msg:'Usuario o contraseña no son correctos- cedula'
            });
        }

        //verificar tipo identificación
        if(usuario.tipoIdentificacion != tipoIdentificacion){
            return res.status(400).json({
                msg:'Usuario o contraseña no son correctos- tipo'
            });
        }

        //verificar contraseña
        const validaPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validaPassword){
            return res.status(400).json({
                msg:'Usuario o contraseña no son correctos- password'
            });
        }
        //dar respuesta JWT
        const token = await generarJWT( usuario._id);
        res.json({
            token            
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

    
}

module.exports={
    loginPost
}
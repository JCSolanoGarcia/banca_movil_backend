
const Usuario = require('../models/usuario.model');
const Banco = require('../models/banco.model');
const Cuenta = require('../models/cuenta.model');
const TipoIdentificacion = require('../models/tipoIdentificacion.model');
const Movimiento = require('../models/movimiento.model');

const existeNumero = async( numeroIdentificacion = '')=>{
    const existe1 = await Usuario.findOne({numeroIdentificacion});
    if(existe1){
        throw new Error(`El número de identificación ya esta registrado`);
    }
}

const existeUsuarioID = async( id)=>{
    const existe2 = await Usuario.findById(id);
    if(!existe2){
        throw new Error(`El ID no esta registrado`);
    }
}

const existeTipo = async( nombre_tipo = '')=>{
    const existe3 = await TipoIdentificacion.findOne({nombre_tipo});
    if(existe3){
        throw new Error(`El tipo de identificación ya esta registrado`);
    }
}

const existeBanco = async( nombre_banco = '')=>{
    const existe4 = await Banco.findOne({nombre_banco});
    if(existe4){
        throw new Error(`El banco ya esta registrado`);
    }
}

const existeAliasCuenta = async( numero_cuenta = '')=>{
    const existe5 = await Cuenta.findOne({numero_cuenta});
    if(existe5){
        throw new Error(`La cuenta ya esta realcionada con el alias: ${existe5.alias}`);        
    }
}

const existeCuenta = async( cuenta)=>{
    const existe6 = await Cuenta.findOne({'numero_cuenta': cuenta});
    if(!existe6){
        throw new Error(`La cuenta no existe`);        
    }
}

//Validación previa a listar cuentas
const existeIdentificacion = async(id)=>{
    const existe7 = await Cuenta.find({'identificacion_titular': id})
    if(!existe7){
        throw new Error(`No hay registros para este documento usuario`);
    }
}

//Validación previa a listar cuentas de tercros
const existeID = async(id)=>{
    const existe8 = await Cuenta.find({'idCreador': id});
    if(!existe8){
        throw new Error(`No hay registros para este id de usuario`);
    }
}

//Validación previa a listar cuentas de tercros
const existeTercero = async(id)=>{
    const existe8 = await Cuenta.find({'_id': id});
    if(!existe8){
        throw new Error(`No hay registros para este id de usuario`);
    }
}

const existeIDActualizar = async( id)=>{
    console.log('id', id);
    const existe9 = await Cuenta.find({'numero_cuenta': id});
    if(!existe9){
        throw new Error(`No existe este ID`);
    }
}

const existeIDMovimiento = async( id)=>{
    const existe = await Movimiento.find({'_id': id});
    if(!existe){
        throw new Error(`No existe este ID`);
    }
}

module.exports ={
    existeNumero,
    existeBanco,
    existeAliasCuenta,
    existeCuenta,
    existeTipo,
    existeUsuarioID,
    existeIDMovimiento,
    existeCuenta,
    existeIdentificacion,
    existeID,
    existeTercero,
    existeIDActualizar
}
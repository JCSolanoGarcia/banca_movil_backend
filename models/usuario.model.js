
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    numeroIdentificacion:{
        type: String,
        required:[true,'El número de identificación es requerido'],
    },
    password:{
        type: String,
        required:[true,'La contraseña es requerida']
    },
    tipoIdentificacion:{
        type: String,
        required:[true,'El tipo de identificación es requerido']
    },
    nombreCliente:{
        type: String,
        required:[true,'el nombre del cliente es requerido']
    },
    cuentasPopias:[
        {
            type: Schema.Types.ObjectId,
            ref:'Cuenta',
            autopopulate: true,
        }
    ],
    cuentasTerceros:[
        {
            type: Schema.Types.ObjectId,
            ref:'Cuenta',
            autopopulate: true,
        }
    ],
    
},
{
    timestamps: true,
});

UsuarioSchema.methods.toJSON= function(){
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}

UsuarioSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Usuario', UsuarioSchema);
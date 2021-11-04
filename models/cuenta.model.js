const { Schema, model } = require('mongoose');

const cuentaSchema = Schema({
    alias:{
        type: String,
        required:[true, 'El alias es requerido']
    },
    nombre_banco:{
        type: String,
        required:[true, 'La entidad bancaria es requerida']
    },
    tipo_cuenta:{
        type: String,
        required:[true, 'El tipo de cuenta es requerido']
    },
    numero_cuenta:{
        type: String,
        required:[true, 'El número de cuenta es requerido']
    },
    identificacion_titular:{
        type:String,
        required:[true,'El número de identificación es requerido']
    },
    moneda:{
        type:String,
        required:[true,'La moneda es requerida']
    },
    saldo:{
        type: Number,
    },
    idMovimiento:[
        {
            type: Schema.Types.ObjectId,
            ref:'Movimiento',
            autopopulate: true,
        }
    ],
    idCreador:{
        type:String,
        required:[true,'El Id del usuario es requerido']
    },
},
{
    timestamps: true,
});

cuentaSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Cuenta', cuentaSchema);
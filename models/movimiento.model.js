const { Schema, model } = require('mongoose');

const movimientoSchema = Schema({
    cuenta_origen:{
        type: String,
        required:[true, 'La cuenta origen es requerida']
    },
    cuenta_destino:{
        type: String,
        required:[true, 'La cuenta destino es requerida']
    },
    monto:{
        type: Number,
        required:[true, 'El monto es requerido']
    },
    saldo:{
        type: String,
        required:[true, 'El nuevo saldo es requerido']
    },
},
{
    timestamps: true,
});

module.exports = model('Movimiento', movimientoSchema);
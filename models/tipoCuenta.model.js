const { Schema, model } = require('mongoose');

const tipoCuentaSchema = Schema({
    tipo_cuenta:{
        type: String,
        required:[true,'El nombre es requerido']
    }
},
{
    timestamps: true,
});


module.exports = model('tipo-cuenta', tipoCuentaSchema);
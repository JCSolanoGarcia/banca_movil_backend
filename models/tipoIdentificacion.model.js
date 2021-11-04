const { Schema, model } = require('mongoose');

const tipoIdentificacionSchema = Schema({
    nombre_tipo:{
        type: String,
        required:[true,'El nombre es requerido']
    }
},
{
    timestamps: true,
});


module.exports = model('tipo-identificacion', tipoIdentificacionSchema);
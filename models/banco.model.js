const { Schema, model } = require('mongoose');

const bancoSchema = Schema({
    nombre_banco:{
        type: String,
        required:[true,'El nombre es requerido']
    }
},
{
    timestamps: true,
});


module.exports = model('banco', bancoSchema);
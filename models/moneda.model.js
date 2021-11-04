const { Schema, model } = require('mongoose');

const monedaSchema = Schema({
    moneda:{
        type: String,
        required:[true,'La moneda es requerida']
    }
},
{
    timestamps: true,
});


module.exports = model('moneda', monedaSchema);
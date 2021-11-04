const mongoose = require('mongoose');

const dbConnection = async()=>{

    try{
       await mongoose.connect(process.env.MONGODB_CONNECT, {
           useNewUrlParser: true,
           useUnifiedTopology: true,          
       });
       console.log('Base de datos conectada');
    }catch(error){
        console.log(error);
        throw new Error('Error al iniciar la BD');

    }
}

module.exports = {
    dbConnection,
}
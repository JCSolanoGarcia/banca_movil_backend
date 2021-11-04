const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        this.bancosPath = '/api/bancos';
        this.cuentasPath = '/api/cuentas';
        this.monedaPath = '/api/moneda';
        this.movimientoPath = '/api/movimiento';
        this.tipoIdPath = '/api/tipoId';
        this.tipoCuentaPath = '/api/tipoCuenta';

        //Conectar a base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Rutas de la App
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo de codigo
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth.routes'));        
        this.app.use(this.bancosPath, require('../routes/bancos.routes'));
        this.app.use(this.cuentasPath, require('../routes/cuentas.routes'));
        this.app.use(this.monedaPath, require('../routes/moneda.routes'));
        this.app.use(this.movimientoPath, require('../routes/movimientos.routes'));
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
        this.app.use(this.tipoIdPath, require('../routes/tipoIdentificacion.routes'));
        this.app.use(this.tipoCuentaPath, require('../routes/tipoCuenta.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;
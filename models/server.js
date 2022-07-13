const express = require('express')
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios' 

        //Middlewares  *funcion que se va a ejecutar con el server*
        this.middlewares();
        //Rutas de la app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

        //use palabra clave de middleware
        //Directorio publico
        this.app.use( express.static('public'))
    }

    routes() {
        
        this.app.use(this.usuariosPath,require('../routes/user'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`app prendida con exito en el pueto
            https://localhost: ${this.port} `)
        })
    }

}


module.exports = Server;
const express = require('express');
const app = express();
require('dotenv').config();

const puerto = process.env.PORT;
//sin esta linea no funcionaria cuando se suba a produccion
const cors = require('cors');
const productsRoute = require('./routes/products.routes')
const usersRoute = require('./routes/users.routes.js')
const dbConnection = require('./database/config.js');

//Middleware's
app.use(cors());

//sin esta linea no podriamos recibir datos tipo json en los POST
app.use(express.json());

(async () => {

    try {
        await dbConnection();
        // Carga de rutas.
        app.use(productsRoute);
        app.use(usersRoute);

    } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
    }

})();

app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});
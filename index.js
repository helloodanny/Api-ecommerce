const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PORT;
//sin esta linea no funcionaria cuando se suba a produccion
const cors = require('cors');

//Middleware's
app.use(cors());
//sin esta linea no podriamos recibir datos tipo json en los POST
app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Hola, Express!');
});

app.get('/products', (req, res) => {
    res.send('GET/products');
});

app.post('/products', (req, res) => {
    res.send('POST/products');
});

app.put('/products', (req, res) => {
    res.send('PUT/products');
});

app.delete('/products', (req, res) => {
    res.send('DELETE/products');
});

app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});
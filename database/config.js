const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('conectado a la Base de Datos!!');
    } catch (error) {
        console.log(error);
        throw new Error('Error al momento de conectar a las bases de datos');
    }
}

module.exports = dbConnection;
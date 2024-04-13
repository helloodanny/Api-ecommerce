const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Conexion a base de datos exitosa");


    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de conectarse a la base de datos");


    }
}

module.exports = dbConnection;

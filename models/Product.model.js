const { Schema, model } = require('mongoose');

//Representacion de una coleccion en nuestra base de datos
const ProductsSchema = Schema ({
    nombre: {
        type: String

    },

    descripcion: {
        type: String
    },

    precio: {
        type: Number

    },

    disponibilidad: {
        type: Number

    },

    sku: {
        type: String
    },

    imagen:{
        type: String
    }

}, {versionKey: false}
);

module.exports = model('Product', ProductsSchema);
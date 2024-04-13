const { Schema, model } = require('mongoose');

//Representacion de una coleccion en nuestra base de datos
const UsersSchema = Schema ({
    nombre: {
        type: String
    
    },
    apellido: {
        type: String
    
    },

    email: {
        type: String
    
    },
    
    
    password: {
        type: String
    
    },

    active: {

        type: Boolean
    
    },

    dob: {

        type: Date

    },
    notes: {

        type: String

    },

}, {versionKey: false});

module.exports = model('User', UsersSchema);
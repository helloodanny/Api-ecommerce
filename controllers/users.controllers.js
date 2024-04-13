const { response, request } = require('express');
const User = require('../models/User.model');

const usersGet = async (req = request, res = response) => {

    const id = req.query.id;

    let users = [];

    if (id) {

        users = await User.findById(id);
    } else {
        users = await User.find();
    }
    res.status(200).json({
        message: 'Datos cargados correctamente',
        data: users
    });

}

const usersPost = async (req = request, res = response) => {
    const body = req.body;


    let user = User(body);
    await user.save();

    res.status(200).json({
        message: 'User guardado',
        data: user
    })

}

const usersPut = async (req = request, res = response) => {
    const { id } = req.query
    const userEditar = req.body

    const userActualizado = await User.findByIdAndUpdate(id, userEditar, { new: true });
    
    res.status(200).json({
        message: 'User actualizado correctamente',
        code: userActualizado
    });
}


const usersDelete = async (req = request, res = response) => {
    const { id } = req.query;
    await User.findByIdAndDelete(id);

    res.status(200).json({
        message: 'User eliminado correctamente',
        code: id
    });

}



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}
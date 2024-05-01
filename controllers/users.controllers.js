const { response, request } = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;

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
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(200).json({
        message: 'User guardado',
        data: user
    });
}

const usersPut = async (req = request, res = response) => {
    const { id } = req.query;
    const userEditar = req.body;
    const userActualizado = await User.findByIdAndUpdate(id, userEditar, { new: true });
    res.status(200).json({
        message: 'User actualizado correctamente',
        data: userActualizado
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

const loginPost = async (req = request, res = response) => {
    const body = req.body;
    const userInformationDb = await User.findOne({ email: body.email, active: true });
    if (userInformationDb == null) {
        res.status(400).json({
            message: 'Usuario no registrado o no encontrado',
            data: null
        });
    }
    const comparePassword = await bcrypt.compare(body.password, userInformationDb.password);
    if (comparePassword == false) {
        res.status(400).json({
            message: 'Contraseña incorrecta',
            data: null
        });
    }
    const payload = {
        full_name: `${userInformationDb.nombre} ${userInformationDb.apellido}`,
        email: userInformationDb.mail
    };
    res.status(200).json({
        message: 'Login Correcto',
        data: jwt.sign(payload, process.env.JWT_SIGNATURE)
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    loginPost
};

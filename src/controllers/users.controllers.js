import User from '../models/users.models.js';

export const getAllUsers = async (req,res) =>{
    try{
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error("error al traer los usuarios", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = await User.findByPk(req.params.id);
        if (userId) {
            res.json(userId);
        } else {
            res.status(404).json({ error: "Usuario no encontrado"});
        }
    } catch (error) {
        console.error("error al traer el usuario", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("error al crear el usuario", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const usuario = await User.findByPk(req.params.id);
        if (usuario){
            await usuario.destroy();
            res.json({ message: "Usuario eliminado" });
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("error al eliminar el usuario", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const usuario = await User.findByPk(req.params.id);
        if (usuario){
            await usuario.update(req.body);
            res.json(usuario);
        }
    } catch (error){
        console.error("error al actualizar el usuario", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};
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
import Like from "../models/likes.models.js";
import { User, Task } from "../models/index.models.js";

export const likeTask = async (req, res) => {
    try {
        const { user_id, task_id } = req.body;

        // Validar existencia de usuario y tarea
        const user = await User.findByPk(user_id);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const task = await Task.findByPk(task_id);
        if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

        // Intentar crear el like
        const like = await Like.create({ user_id, task_id });
        res.status(201).json(like);
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({ error: "Ya diste like a esta tarea" });
        }
        console.error("error al dar like a la tarea", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};
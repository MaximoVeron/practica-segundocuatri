import Task from "../models/tasks.models.js";

export const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.error("error al traer las tareas", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const taskId = await Task.findByPk(req.params.id);
        if (!taskId) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }
        res.json(taskId);
    } catch (error) {
        console.error("error al traer la tarea", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const createTask = async (req, res) => {
    try{
        if (!req.body.title || req.body.title.trim() === "") {
            return res.status(400).json({ error: "El título es obligatorio" });
        }
        if (req.body.title.length>100){
            return res.status(400).json({ error: "El título no puede tener más de 100 caracteres" });
        }
        if (req.body.description.length>100) {
            return res.status(400).json({ error: "La descripción no puede tener más de 100 caracteres" });
        }
        if (!req.body.description || req.body.description.trim() === "") {
            return res.status(400).json({ error: "La descripción es obligatoria" });
        }
        const newTask = await Task.create(req.body);
        res.json(newTask);
    } catch (error) {
        console.error("error al crear la tarea", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const updateTask = async (req, res) => {
    try {
        if (!req.body.title || req.body.title.trim() === "") {
            return res.status(400).json({ error: "El título es obligatorio" });
        }
        if (req.body.title.length>100){
            return res.status(400).json({ error: "El título no puede tener más de 100 caracteres" });
        }
        if (req.body.description.length>100) {
            return res.status(400).json({ error: "La descripción no puede tener más de 100 caracteres" });
        }
        if (!req.body.description || req.body.description.trim() === "") {
            return res.status(400).json({ error: "La descripción es obligatoria" });
        }
        const taskId = await Task.findByPk(req.params.id);
        if (taskId){
            await taskId.update(req.body);
            res.json(taskId);
        } else {
            res.status(404).json({ error: "Tarea no encontrada" });
        }
    } catch (error) {
        console.error("error al actualizar la tarea", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskId = await Task.findByPk(req.params.id);
        if (taskId){
            await taskId.destroy();
            res.json({ message: "Tarea eliminada" });
        } else {
            res.status(404).json({ error: "Tarea no encontrada" });
        };
    } catch (error) {
        console.error("error al eliminar la tarea", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};
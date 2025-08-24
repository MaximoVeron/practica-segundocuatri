import {Router} from "express";
import { getAllTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
 } from "../controllers/task.controllers.js";

 const tasksRouter = Router();

 tasksRouter.get("/tasks", getAllTask);
 tasksRouter.get("/tasks/:id", getTaskById);
 tasksRouter.post("/tasks", createTask);
tasksRouter.put("/tasks/:id", updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);
 export default tasksRouter;

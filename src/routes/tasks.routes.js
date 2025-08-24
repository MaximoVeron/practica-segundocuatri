import {Router} from "express";
import { getAllTask,
    getTaskById,
    createTask,
    updateTask,
 } from "../controllers/task.controllers.js";

 const tasksRouter = Router();

 tasksRouter.get("/tasks", getAllTask);
 tasksRouter.get("/tasks/:id", getTaskById);
 tasksRouter.post("/tasks", createTask);
tasksRouter.put("/tasks/:id", updateTask);
 export default tasksRouter;

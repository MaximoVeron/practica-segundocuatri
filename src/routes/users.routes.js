import { Router } from "express";
import { getAllUsers } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get ("/users", getAllUsers);

export default usersRouter;
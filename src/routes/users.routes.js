import { Router } from "express";
import { getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
 } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get ("/users", getAllUsers);
usersRouter.get ("/users/:id", getUserById);
usersRouter.post ("/users", createUser);
usersRouter.delete ("/users/:id", deleteUser);
usersRouter.put ("/users/:id", updateUser);


export default usersRouter;
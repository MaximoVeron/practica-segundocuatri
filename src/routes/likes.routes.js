import { Router } from "express";
import { likeTask } from "../controllers/likes.controllers.js";

const likesRouter = Router();

likesRouter.post("/likes", likeTask);

export default likesRouter;
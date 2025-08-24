import express from "express";
import {initDB} from "./src/config/db.js";
import usersRouter from "./src/routes/users.routes.js";
import tasksRouter from "./src/routes/tasks.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

initDB();

const PORT = process.env.PORT;

app.listen (PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.use("/api", usersRouter);
app.use("/api", tasksRouter);

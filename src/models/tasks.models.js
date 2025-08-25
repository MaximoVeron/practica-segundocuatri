import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.js";

const Task = sequelize.define(
  'task',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
  },
  {
    // Other model options go here
  },
);

export default Task;
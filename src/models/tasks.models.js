import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.js";

const Task = sequelize.define(
  'task',
  {
    // Model attributes are defined here
    Title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING(100),
      // allowNull defaults to true
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
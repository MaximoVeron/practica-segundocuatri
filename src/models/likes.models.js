import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.js";

const Like = sequelize.define(
  'Like',
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

export default Like;
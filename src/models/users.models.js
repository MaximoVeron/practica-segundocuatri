import {sequelize} from "../config/db.js";
import { DataTypes } from "sequelize";


const User = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING(100),
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);



export default User;
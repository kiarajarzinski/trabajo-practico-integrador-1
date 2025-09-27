import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user",
  },

},
{
  createdAt: "created_at",
  updatedAt: "updated_at",
  //para eliminacion logica
  paranoid: true,
  deletedAt: "deleted_at"
});



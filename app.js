//importaciones
import express from "express";
import "dotenv/config" 
import sequelize from "./src/config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//configuracion del servidor 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const PORT = process.env.PORT

//conexion a la bd e inicio del servidor
sequelize.sync({force:true}).then(() =>  {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
});


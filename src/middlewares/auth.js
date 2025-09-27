import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => { 

    //el usuario no está autenticado
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No autenticado. Por favor, inicia sesión." });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {

        res.status(401).json({ message: "Token inválido. Vuelve a iniciar sesión.", error });
    }
};
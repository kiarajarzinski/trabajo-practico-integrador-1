import jwt from "jsonwebtoken";

//se crea un token seguro con informacion del usurio
export const generateToken = (user) => {
    try {
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        return token;
    } catch (error) {
        console.error("Error al generar el token:", error);
        throw new Error("No se pudo generar el token.");
    }
};

//verificar si el token recibido es autentico
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        console.error("Error al verificar el token:", error);
        throw new Error("Token inválido.");
    }
};
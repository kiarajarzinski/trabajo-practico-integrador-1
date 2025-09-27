import bcrypt from "bcrypt";

//para asegurar la contraseña
export const hashPassword = (password) => {
    try {
        return bcrypt.hash(password, 10);
    } catch (error) {
        console.error("Error al hashear la contraseña:", error);
        throw new Error("No se pudo hashear la contraseña.");
    }
};

//verificar y comparar contraseña que ingreso el usuario
export const comparePasswords = (password, hashedPassword) => {
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error("Error al comparar contraseñas:", error);
        throw new Error("Error al autenticar la contraseña.");
    }
};
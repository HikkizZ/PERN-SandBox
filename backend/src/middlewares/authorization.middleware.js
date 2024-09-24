/*
EL middleware de autorización se utiliza para verificar si el usuario tiene permiso para acceder a una ruta específica.
*/
import User from "../models/user.model.js";
import { AppDataSource } from "../config/configDB.js";
import {
    handleErrorClient,
    handleErrorServer
} from "../helpers/responseHandlersjs";

export async function isAdmin(req, res, next) {
    try {
        const userRepository = AppDataSource.getRepository(User);

        const userFound = await userRepository.findOne({ email: req.user.email });

        if (!userFound) {
            return handleErrorClient(res, 401, "User not found in the database.");
        }

        const rolUser = userFound.role;

        if (rolUser === "admin") {
            next();
            return;
        }

        return handleErrorClient(res, 401, "You need to be an administrator to perform this action");
    } catch (error) {
        handleErrorServer(res, 500, "Internal server Middleware error. -> isAdmin()", error.message);
    }
}
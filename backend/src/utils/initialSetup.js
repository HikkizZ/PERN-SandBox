"use strict";
import User from "../models/user.model.js";
import { AppDataSource } from "../config/configDB.js";
import { encryptPassword } from "../helpers/bcrypt.helper.js";

async function createUsers() {
    try {
        const userRepository = AppDataSource.getRepository(User);

        const count = await userRepository.count();
        if (count > 0) return;

        await Promise.all([
            userRepository.save(
                userRepository.create({
                    name: "Hikki",
                    rut: "20.903.783-1",
                    email: "hikkiadmin@gmail.cl",
                    password: await encryptPassword("hikki2024"),
                    role: "admin"
                })
            ),
            userRepository.save(
                userRepository.create({
                    name: "Oliver Sykes",
                    rut: "12.345.678-9",
                    email: "oliver.sykes@gmail.cl",
                    password: await encryptPassword("bmth2024"),
                    role: "user"
                })
            )
        ]);
        console.log("Users created successfully.");
    } catch (error) {
        console.error("An error occurred while creating the users:", error);
    }
};

export { createUsers }; //? Export the createUsers function.
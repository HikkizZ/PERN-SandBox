"use strict";
import User from "../models/user.model.js"; //* Import the user model
import { AppDataSource } from "../config/configDB.js"; //* Import the database connection

//? This function is used to get all the users from the database.
export async function getUsers(req, res) {

};

//? This function is used to get a user by its id from the database.
export async function getUserById(req, res) {

}

//? This function is used to create a new user in the database.
export async function createUser(req, res) {
    try {
        const userRepositoy = AppDataSource.getRepository(User); // Get the user repository. Instancia que permite interactuar con la base de datos.

        const user = req.body; // Get the user data from the request body.

        if (!user) { // If the user is not created.
            return res.status(400).json({ 
                message: "Error creating the user. Please try again.",
                data: null
            }); // Return a message.
        }

        const newUser = userRepositoy.create({ // Create a new user with the user data.
            name: user.name,
            rut: user.rut,
            email: user.email
        });

        const userSaved = await userRepositoy.save(newUser); // Save the new user in the database.

        return res.status(201).json({ // Return a message.
            message: "User created successfully.",
            data: userSaved
        });
    } catch (error) {
        console.log("Error creating the user: ", error); // Print an error message.
    }
};
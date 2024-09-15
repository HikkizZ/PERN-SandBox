import { Router } from "express";

// Importing the functions from the user controller.
import {
    createUser,
    getUsers,
    getUserById,
} from '../controllers/user.controller.js';

const router = Router(); //? It creates a new instance of the express router.

//! http://localhost:3000/api/user
router.post('/', createUser); //? It creates a new user. - Method: HTTP POST
//! http://localhost:3000/api/user/all
router.get('/all', getUsers); //? It gets all the users. - Method: HTTP GET
//! http://localhost:3000/api/user/update/:id
router.get('/:id', getUserById); //? It gets a user by id. - Method: HTTP GET

// Exporting the routers.
export default router;
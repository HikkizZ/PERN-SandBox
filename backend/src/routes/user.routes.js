import { Router } from "express";

// Importing the functions from the user controller.
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';

const router = Router(); //? It creates a new instance of the express router.

router
    //! http://localhost:3000/api/user/
    .post('/', createUser) //? It creates a new user. - Method: HTTP POST
    //! http://localhost:3000/api/user/all
    .get('/all', getUsers) //? It gets all the users. - Method: HTTP GET
    //! http://localhost:3000/api/user/:id
    .get('/:id', getUserById) //? It gets a user by id. - Method: HTTP GET
    //! http://localhost:3000/api/user/:id
    .patch('/:id', updateUser) //? It updates a user by id. - Method: HTTP PATCH
    //! http://localhost:3000/api/user/:id
    .delete('/:id', deleteUser); //? It deletes a user by id. - Method: HTTP DELETE

// Exporting the routers.
export default router;
import { Router } from "express";

// Importing routes
import userRoutes from './user.routes.js';

const router = Router(); //? It creates a new instance of the express router.

//! http://localhost:3000/api/user
router.use('/user', userRoutes); //? It uses the user routes.

// Exporting the routers
export default router;
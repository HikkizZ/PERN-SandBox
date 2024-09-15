import express, { json } from 'express'
import indexRoutes from './src/routes/index.routes.js'
import { PORT, HOST } from './src/config/configEnv.js'
import { connectDB } from './src/config/configDB.js'

//? This function is used to start the server.
async function setupServer() { //* It creates an instance of the express app and listens on the specified port.
    try {
        const app = express()

        app.use(json())

        app.use('/api/', indexRoutes)

        app.listen(PORT, () => {
            console.log(`Server running on: http://${HOST}:${PORT}/api`);
        })
    }catch (error){
        console.log("Index.js Error -> Error starting the server: ", error);
    }
};

//? This function is used to start the API. It connects to the database and starts the server.
async function setupAPI() {
    try {
        await connectDB()
        await setupServer()
    }catch (error){
        console.log("Index.js error -> Error starting the API: ", error);
    }
}

setupAPI() //* It starts the API
    .then(() => console.log("=> API started successfully"))
    .catch((error) => console.log("Error starting the API: ", error));
import express from 'express'
import indexRoutes from './routes/index.routes.js'
import { PORT, HOST } from './config/configEnv.js'
import { connectDB } from './config/configDB.js'

async function setupServer() {
    try {
        const app = express()

        app.use(json())

        app.use('/api/', indexRoutes)

        app.listen(port, () => {
            console.log(`Server running on: http://${HOST}:${PORT}/api`);
        })
    }catch (error){
        console.log("Index.js Error -> Error starting the server: ", error);
    }
};

async function setupAPI() {
    try {
        await connectDB()
        await setupServer()
    }catch (error){
        console.log("Index.js error -> Error starting the API: ", error);
    }
}

setupAPI()
    .then(() => console.log("=> API started successfully"))
    .catch((error) => console.log("Error starting the API: ", error));
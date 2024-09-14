"use strict"; //! strict mode helps you to write cleaner code and avoid common mistakes.
import dotenv from "dotenv"; //* dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
import path from "path"; //* The path module provides utilities for working with file and directory paths.
import { fileURLToPath } from "url"; //* The fileURLToPath() method of the URL module is used to convert a file URL to a file path.

//? The fileURLToPath() method of the URL module is used to convert a file URL to a file path.
const __filename = fileURLToPath(import.meta.url);
//? The path.dirname() method is used to get the directory name of the path.
const __dirname = path.dirname(__filename);
//? The path.resolve() method is used to resolve a sequence of paths or path segments into an absolute path.
const __envPath = path.resolve(__dirname, ".env");

//? The dotenv.config() method is used to load environment variables from a .env file into process.env.
dotenv.config({ path: __envPath });

//? The process.env property returns an object containing the user environment.
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const DATABASE = process.env.DATABASE;
export const BD_USERNAME = process.env.BD_USERNAME;
export const BD_PASSWORD = process.env.BD_PASSWORD;
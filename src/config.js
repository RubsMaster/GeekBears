import {config} from 'dotenv' //inicializa dotenv y lo almacena en una variable llamada config.
config(); //inicializa el objeto obtenido de dotenv y se ejecuta apenas comienza la ejecucion

// Exportando a todo el proyecto
export default {
    mongodbURL: process.env.MONGODB_URI
};
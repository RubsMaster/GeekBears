import mongoose from 'mongoose' //Importndo modulo mongoose, guardando el objeto en variable mongoose
import config from './config' //Importando el archivo config.js y almacenando en un objeto llamado config, donde se encuentran las variables de entorno

//Funcion anonima por que no posee nombre, y el hecho que este enntre parentesis es por que es inmediatamente invocada
(async () => {
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }); //Definiendo conexion a la base de datos
    console.log('Database connected: ' + db.connection.name);
})();
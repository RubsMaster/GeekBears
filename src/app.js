//Esta pagina tiene la configuracion general de la aplicacion.

import express from 'express'; //Importando express gracias a que esta instalada la dependencia babel
import salesRoutes from './routes/links.router';

const app = express(); //Inicializacion del objeto express

        //Settings
app.set('port', process.env.PORT || 3000); //Asignacion de numero de puerto, la funcion process.env.PORT es por si existe una variable de entorno.

app.use(express.json()); //Esto permite recibir y enviar json en las peticiones

        //Routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application'});
});

app.use('/URL', salesRoutes);

export default app; //Exportando app para poder usarlo en todo el proyecto
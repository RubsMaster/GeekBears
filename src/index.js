// Este archivo sirve para arrancar la aplicacion
import app from './app' //Importa la configuracion de express almacenada en el objeto app
import './database' //Funciona como una inicializacion del archivo database, por que este no exporta nada

app.listen(app.get('port')); //Iniciando el servidor en el puerto asignado
console.log('Server listening on port: ' + app.get('port')); //Mostrando en consola que la conexion ha sido exitosa


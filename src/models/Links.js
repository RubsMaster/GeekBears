// Los modelos describen la estructura de los datos que se almacenan en la base de datos, sirven para interactuar con el esquema
// El esquema es para decirle a mongoose que voy a guardar en la base de datos

import {Schema, model} from 'mongoose'; // Importando únicamente el Schema y el model de mongoose, no todo el objeto.

// Crenado el esquema que conitne la estructura de los datos a almacenar respecto a los empleados
const urlSchema = new Schema({
    URL: {
        type: String,
        required: true
    },
    URLshort: {
        type: String,
        required: true
    },
    Code: {
        type: String,
        required: true
    }    
}, { //Este segundo objeto permite delimitar parametros por default de la coleccion, como crear automaticamente la fecha de o eliminar la version
    versionKey: false
});

// Para poder utilizar los esquemas creados, es necesario exportarlos como modelos.
export default model('Links', urlSchema); //La funcion recibe dos parametros, el nombre que se asignara al modelo y el esquema que utilizara el mismo
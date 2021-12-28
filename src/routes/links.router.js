// Esta pagina sirve para definir las rutas
// Las rutas es la forma en la que express maneja las peticiones que se hacen al servidor.

import { Router } from "express"; //Permite definir varias rutas y agruparlas
import * as urlCtrl from '../controllers/links.controller';
const router = Router(); //Ejecutando y almacenando el objeto en constante router

router.post('/encode', urlCtrl.encodeURL);

router.get('/decode/:code', urlCtrl.decodeURL);

export default router;
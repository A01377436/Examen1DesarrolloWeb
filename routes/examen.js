const express = require('express');
const router = express.Router();
const examenController=require('../controllers/examen')

//Create, Read, Update, Delete (CRUD) ABCC

//Servicio para mostrar formulario
router.get('/pagina',examenController.getPagina);
//Servicio para consultar todos los datos
router.get('/validacion',examenController.getValidacion);

router.post('/validacion',examenController.postValidacion);

module.exports = router;
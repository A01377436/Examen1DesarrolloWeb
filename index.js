//impbrtar las bibliotecas

const express = require('express');
const path = require('path');
const examenRoutes=require('./routes/examen');

const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/examen',examenRoutes);

//lanzar la aplicación
app.listen(8083 ,()=>{
console.log("Servidor en línea")

});
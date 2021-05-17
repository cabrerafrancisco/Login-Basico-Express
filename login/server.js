const express = require('express');
const path = require("path");
const app = express()
const PUERTO = 3000;

// midellware bodyparser
app.use(express.urlencoded({ extended: true}));
/*Con esta funcion pasamos los parametros ingresados al form*/
// midellware para archivos linkeados 
app.use(express.static(path.join(__dirname, "client"))); // agrego la ruta a la carpeta cliente
/*linkeados en html como css o js o imagen ... */

app.listen(PUERTO , function(){
    console.log(`server iniciado en el puerto ${PUERTO}...`)
})
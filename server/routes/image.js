const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/imagen/:ruta/:nombre', (req, res) => {
    let ruta = req.params.ruta;
    let nombreImgen = req.params.nombre;
    let rutaImgen = path.resolve(__dirname, `../../uploads/${ruta}/${nombreImagen}`);
    let noImage = path.resolve(__dirname, `../assets/no-image.png`);
    
    if(fs.existsSync(rutaImgen)){
        return res.sendFile(rutaImgen);
    }else{
        return res.sendFile(noimage);
    }
});

module.exports = app;
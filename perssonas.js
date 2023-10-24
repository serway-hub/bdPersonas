const express = require('express');
const app = express();
const personas = require('./personas.json'); 

console.log(personas)// Asegúrate de que el archivo personas.json se encuentre en el mismo directorio que tu archivo de código

// Ruta para obtener personas filtradas por sexo
app.get('/personas.json', (req, res) => {
    const sexo = req.query.sexo;
    const ciudad = req.query.ciudad;
    const nivel_educativo = req.query.nivel_educativo;

    // Filtra los datos en función del valor de los parámetros de consulta
    let personasFiltradas = personas;

    if (sexo) {
        personasFiltradas = personasFiltradas.filter(persona => persona.sexo === sexo);
    }

    if (ciudad) {
        personasFiltradas = personasFiltradas.filter(persona => persona.ciudad === ciudad);
    }

    if (nivel_educativo) {
        personasFiltradas = personasFiltradas.filter(persona => persona.nivel_educativo === nivel_educativo);
    }

    // Envía los datos filtrados como respuesta en formato JSON
    res.json(personasFiltradas);
});

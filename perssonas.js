import express from 'express';
const app = express();
const personas = require('./personas.json'); 

// Ruta para obtener personas filtradas
app.get('/personas.json', (req, res) => {
    const queryParams = req.query; // Recoge todos los parámetros de consulta

    if (Object.keys(queryParams).length === 0) {
        // Si no hay parámetros de consulta, simplemente devuelve todas las personas
        res.json(personas);
        return;
    }

    // Filtra los datos en función de los parámetros de consulta
    const personasFiltradas = personas.filter(persona => {
        return Object.keys(queryParams).every(param => {
            return persona[param] === queryParams[param];
        });
    });

    // Envía los datos filtrados como respuesta en formato JSON
    res.json(personasFiltradas);
});

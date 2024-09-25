const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Sirve archivos estáticos (HTML, CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Ruta para equipos
app.get('/equipos', (req, res) => {
    res.json([
        { equipo: 'Infantil', dia: 'Lunes', hora: '10:00 AM' },
        { equipo: 'Juvenil', dia: 'Miércoles', hora: '4:00 PM' },
    ]);
});

// Levantar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

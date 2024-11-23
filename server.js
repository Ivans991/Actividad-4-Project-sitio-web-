const express = require('express');
const path = require('path');
const app = express();

// Usar el puerto proporcionado por Render (o 4000 como fallback)
const port = process.env.PORT || 4000;

// Middleware para manejar formularios
app.use(express.urlencoded({ extended: true }));

// Sirve archivos estáticos desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

// Ruta para la página de mujeres
app.get('/mujeres', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mujeres.html'));
});

// Ruta para la página de hombres
app.get('/hombres', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hombres.html'));
});

// Ruta para la página de accesorios
app.get('/accesorios', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'accesorios.html'));
});

// Ruta para manejar el formulario de contacto
app.post('/enviar-formulario', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Muestra los datos en la consola para verificar
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);

    // Redirige al usuario a la página de agradecimiento
    res.redirect('/thank-you');  // Redirige a la nueva página de agradecimiento
});

// Ruta para la página de agradecimiento
app.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'thank-you.html'));
});

// Manejador para rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send(`
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <a href="/">Volver al inicio</a>
  `);
});

// Arranca el servidor en el puerto especificado por Render (o 4000 como fallback)
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

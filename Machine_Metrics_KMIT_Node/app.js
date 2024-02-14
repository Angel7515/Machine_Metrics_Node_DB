const express = require('express');
const projectsRoutes = require('./routes/projectsRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const personRoutes = require('./routes/personRoutes');
const personHasprojects = require('./routes/person_has_projectRoutes');

const app = express();
const PORT = 3000;

// Middleware para analizar JSON
app.use(express.json());

// Rutas de usuario
app.use('/dbprojects', projectsRoutes);
app.use('/dbperformance',performanceRoutes);
app.use('/dbperson',personRoutes);
app.use('/dbpersonHasProjects',personHasprojects);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});

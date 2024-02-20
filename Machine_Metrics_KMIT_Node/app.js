const express = require('express');
const cors = require('cors');
const projectsRoutes = require('./routes/projectsRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const personRoutes = require('./routes/personRoutes');
const personHasprojects = require('./routes/person_has_projectRoutes');
const IDprojectRoutes = require('./routes/IDprojectRoutes');
const newprojectRoutes = require('./routes/NewProjectRoutes');
const UPdateproject = require('./routes/PutprojectRoutes');
const checkPersonLogin = require('./routes/checkPersonLoginRoutes');
const updateUser = require('./routes/UpPersonRoutes');
const createPerson = require('./routes/crearPersonRoutes');


const app = express();
const PORT = 3000;

// Middleware para analizar JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Rutas de usuario

/* GET ALL*/
app.use('/dbprojects', projectsRoutes);
app.use('/dbperformance',performanceRoutes);
app.use('/dbusers',personRoutes);
app.use('/dbpersonHasProjects',personHasprojects);

/* GET for ID */
app.use('/dbproject', IDprojectRoutes);
app.use('/dbeditproject',IDprojectRoutes);
app.use('/dbcheckUser',checkPersonLogin);

/* POST */
app.use('/dbNewproject', newprojectRoutes);
app.use('/dbcreateperson',createPerson);

/* UPLOAD */
app.use('/dbputprojects', UPdateproject);
app.use('/dbupdateuser', updateUser);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});

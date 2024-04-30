const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

// Importar tus rutas
const projectsRoutes = require('./routes/projectsRoutes');
const personRoutes = require('./routes/personRoutes');
const personHasprojects = require('./routes/person_has_projectRoutes');
const IDprojectRoutes = require('./routes/IDprojectRoutes');
const newprojectRoutes = require('./routes/NewProjectRoutes');
const UPdateproject = require('./routes/PutprojectRoutes');
const checkPersonLogin = require('./routes/checkPersonLoginRoutes');
const updateUser = require('./routes/UpPersonRoutes');
const createPerson = require('./routes/createPersonRoute');
const kpiRoutes = require('./routes/kpisRoutes');
const personHasProjectCreate = require('./routes/personHasProjectRoutes');
const kpiscreate = require('./routes/KpisRoutesCreate');
const performanceRoutes2 = require('./routes/GETPersonRoutes');
const performanceRoutes = require('./routes/CreatePerformanceRoutes');
const searchOneP = require('./routes/searchOnePerson');
const createPP = require('./routes/PersonProjectCreate');
const deletePersonP = require('./routes/Deleteperson_has_projectController');
const updatekpi = require('./routes/UpdateKPI');
const overviewKPI = require('./routes/overviewKPI');
const OverviewHome = require('./routes/OverviewHome');

const app = express();
const PORT = 8443;

// Middleware para analizar JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Middleware para verificar el User-Agent y permitir solicitudes desde el frontend
const userAgentCheck = (req, res, next) => {
  const userAgent = req.get('User-Agent');
  const origin = req.get('Origin');
  
  // Verificar si la solicitud proviene de un navegador
  const isBrowser = /mozilla|chrome|safari|firefox|opera/i.test(userAgent);

  // Verificar si la solicitud proviene del frontend
  const isFromFrontend = origin && origin === 'https://cimmyt-project-management.cimmyt.org';

  if (isBrowser && !isFromFrontend) {
    // Si la solicitud proviene de un navegador pero no del frontend, requerir autenticación OAuth
    res.status(401).json({ error: 'Authentication required' });
  } else {
    // Permitir la solicitud desde el frontend o desde otras fuentes
    next();
  }
};

// Aplicar el middleware de verificación del User-Agent a todas las rutas
app.use(userAgentCheck);

// Rutas de usuario
/* GET ALL*/
app.use('/api/dbprojects', projectsRoutes);
app.use('/api/dbusers',personRoutes);
app.use('/api/dbpersonHasProjects',personHasprojects);
app.use('/api/kpis',kpiRoutes);
app.use('/api/dboverviewP',OverviewHome);

/* GET for ID */
app.use('/api/dbproject', IDprojectRoutes);
app.use('/api/dbeditproject',IDprojectRoutes);
app.use('/api/dbcheckUser',checkPersonLogin);
app.use('/api/dbOneP', searchOneP);
app.use('/api/dbgetperformance', performanceRoutes2);
app.use('/api/dboverview', overviewKPI);

/* POST */
app.use('/api/dbNewproject', newprojectRoutes);
app.use('/api/dbcreateperson',createPerson);
app.use('/api/dbkpis',kpiscreate);
app.use('/api/dbpersonproject',createPP);
app.use('/api/dbcreate', performanceRoutes);

/* UPLOAD */
app.use('/api/dbputprojects', UPdateproject);
app.use('/api/dbupdateuser', updateUser);
app.use('/api/dbcreatePersonProject',personHasProjectCreate);
app.use('/api/dbupKPI',updatekpi);

/* DELETE */
app.use('/api/dbdeletePerPro',deletePersonP);

// Configurar servidor HTTPS
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('cert.crt')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});


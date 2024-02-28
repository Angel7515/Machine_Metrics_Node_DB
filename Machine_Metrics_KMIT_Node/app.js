const express = require('express');
const cors = require('cors');
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


const app = express();
const PORT = 3000;

// Middleware para analizar JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Rutas de usuario

/* GET ALL*/
app.use('/dbprojects', projectsRoutes);
app.use('/dbusers',personRoutes);

app.use('/dbpersonHasProjects',personHasprojects);

app.use('/kpis',kpiRoutes);

/* GET for ID */
app.use('/dbproject', IDprojectRoutes);
app.use('/dbeditproject',IDprojectRoutes);
app.use('/dbcheckUser',checkPersonLogin);
app.use('/dbOneP', searchOneP);

/* POST */
app.use('/dbNewproject', newprojectRoutes);
app.use('/dbcreateperson',createPerson);
app.use('/dbkpis',kpiscreate);
app.use('/dbpersonproject',createPP);

/* UPLOAD */
app.use('/dbputprojects', UPdateproject);
app.use('/dbupdateuser', updateUser);
app.use('/dbcreatePersonProject',personHasProjectCreate);


app.use('/dbgetperformance', performanceRoutes2);
app.use('/dbcreate', performanceRoutes);


app.use('/dbdeletePerPro',deletePersonP);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});

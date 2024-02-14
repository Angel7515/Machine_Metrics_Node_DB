const PersonHasProject = require('../models/person_has_projectModel')

// Controlador para obtener todos los proyectos
exports.getPersonProjects = (req, res) => {
    PersonHasProject.getAllPresonProjects((err, personProjects) => {
      if (err) {
        console.error('Error al obtener el diccionario de personas y proyectos:', err);
        res.status(500).send('Error al obtener personas y proyectos: ' + err.message);
      } else {
        res.json(personProjects);
      }
    });
  };
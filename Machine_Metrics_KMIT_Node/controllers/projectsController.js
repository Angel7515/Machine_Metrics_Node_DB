const Projects = require('../models/projectsModel')

// Controlador para obtener todos los proyectos
exports.getProjects = (req, res) => {
    Projects.getAllProjects((err, projects) => {
      if (err) {
        console.error('Error al obtener proyectos:', err);
        res.status(500).send('Error al obtener proyectos: ' + err.message);
      } else {
        res.json(projects);
      }
    });
  };
  

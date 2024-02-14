const db = require('../db');

const Projects = {};

// Método para obtener todos los proyectos
Projects.getAllProjects = (callback) => {
  db.query('SELECT * FROM project', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};


module.exports = Projects;

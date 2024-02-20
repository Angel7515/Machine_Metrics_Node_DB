const db = require('../db');

const Projects = {};

// Método para obtener un proyecto por su ID
Projects.getProjectById = (projectId, callback) => {
  projectId = parseInt(projectId); // Convertir a entero
  db.query('SELECT * FROM project WHERE idproject = ?', [projectId], (err, result) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, result);
      }
  });
};

module.exports = Projects;

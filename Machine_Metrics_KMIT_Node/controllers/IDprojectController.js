const Projects = require('../models/IDprojectModel');

// Controlador para obtener un proyecto por su ID
exports.getProjectById = (req, res) => {
    const projectId = parseInt(req.params.id);
    Projects.getProjectById(projectId, (err, project) => {
        if (err) {
            console.error('Error al obtener el proyecto por ID:', err);
            res.status(500).send('Error al obtener el proyecto por ID: ' + err.message);
        } else {
            res.json(project);
        }
    });
};

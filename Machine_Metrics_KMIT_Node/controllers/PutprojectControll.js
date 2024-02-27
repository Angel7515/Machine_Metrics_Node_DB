const projectModel = require('../models/PutProjectModel');

const projectController = {
    updateProject: function (req, res) {
        const idproject = req.params.idproject;
        const projectData = req.body;

        projectModel.updateProjectDB(idproject, projectData, (error, result) => {
            if (error) {
                res.status(500).json({ error: "Error al actualizar el proyecto" });
            } else {
                res.status(200).json({ message: "Proyecto actualizado exitosamente" });
            }
        });
    }
};

module.exports = projectController;

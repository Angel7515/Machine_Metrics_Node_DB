// personProjectController.js
const PersonProjectModel = require('../models/PersonProjectCreate');

const PersonProjectController = {
    createPersonProject: function(req, res) {
        const { person_idactive, project_idproject } = req.body;
        if (!person_idactive || !project_idproject) {
            return res.status(400).json({ message: "Los campos person_idactive y project_idproject son obligatorios." });
        }

        PersonProjectModel.createPersonProject(person_idactive, project_idproject, (err, result) => {
            if (err) {
                console.error("Error al insertar en la base de datos:", err);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            res.status(201).json({ message: "Registro insertado correctamente", data: result });
        });
    }
};

module.exports = PersonProjectController;

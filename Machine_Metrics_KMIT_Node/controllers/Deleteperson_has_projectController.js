// controllers/person_has_projectController.js

const db = require('../db');

// Controlador para eliminar un registro de person_has_project
exports.deletePersonProject = (req, res) => {
    const personIdActive = req.params.personIdActive; // Obtiene el person_idactive de los parámetros de la URL

    // Consulta SQL para eliminar el registro correspondiente
    const sql = 'DELETE FROM person_has_project WHERE person_idactive = ?';

    db.query(sql, [personIdActive], (err, result) => {
        if (err) {
            console.error('Error al eliminar el registro:', err);
            res.status(500).send({ message: 'Error al eliminar el registro', error: err });
        } else {
            res.status(200).send({ message: 'Registro eliminado correctamente' });
        }
    });
};

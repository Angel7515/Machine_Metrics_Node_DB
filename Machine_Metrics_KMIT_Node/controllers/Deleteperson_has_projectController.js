// controllers/person_has_projectController.js

const db = require('../db');

// Controlador para eliminar un registro de person_has_project y kpis_has_person
exports.deletePersonProject = (req, res) => {
    const personIdActive = req.params.personIdActive; // Obtiene el person_idactive de los parámetros de la URL

    // Consulta SQL para eliminar el registro de person_has_project
    const deletePersonProjectSQL = 'DELETE FROM person_has_project WHERE person_idactive = ?';

    // Consulta SQL para eliminar el registro de kpis_has_person
    const deleteKpisPersonSQL = 'DELETE FROM kpis_has_person WHERE person_idactive = ?';

    // Ejecutar la primera consulta para eliminar de person_has_project
    db.query(deletePersonProjectSQL, [personIdActive], (err1, result1) => {
        if (err1) {
            console.error('Error al eliminar el registro de person_has_project:', err1);
            res.status(500).send({ message: 'Error al eliminar el registro de person_has_project', error: err1 });
            return;
        }

        // Ejecutar la segunda consulta para eliminar de kpis_has_person
        db.query(deleteKpisPersonSQL, [personIdActive], (err2, result2) => {
            if (err2) {
                console.error('Error al eliminar el registro de kpis_has_person:', err2);
                res.status(500).send({ message: 'Error al eliminar el registro de kpis_has_person', error: err2 });
                return;
            }

            // Ambas consultas se ejecutaron correctamente
            res.status(200).send({ message: 'Registros eliminados correctamente' });
        });
    });
};

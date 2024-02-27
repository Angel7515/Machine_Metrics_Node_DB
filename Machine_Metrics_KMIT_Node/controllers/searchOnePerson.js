const Person = require('../models/searchOnePerson');

// Controlador para obtener el nombre de una persona por su idactive
exports.getPersonByName = (req, res) => {
    const idactive = req.params.idactive;
    Person.getPersonByIdActive(idactive, (err, result) => {
        if (err) {
            console.error('Error al obtener el nombre de la persona:', err);
            res.status(500).json({ error: 'Error al obtener el nombre de la persona' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'No se encontró ninguna persona con el idactive proporcionado' });
            } else {
                res.json({ fullName: result[0].full_name });
            }
        }
    });
};

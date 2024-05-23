const KpisHasPerson = require('../models/kpisHasPersonModel');

// Controlador para obtener todos los registros de kpis_has_person
exports.getKpisHasPerson = (req, res) => {
    KpisHasPerson.getAllKpisHasPerson((err, kpisHasPerson) => {
        if (err) {
            console.error('Error al obtener kpis_has_person: ', err);
            res.status(500).send('Error al obtener kpis_has_person: ' + err.message);
        } else {
            res.json(kpisHasPerson);
        }
    });
};

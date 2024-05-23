const db = require('../db');

const KpisHasPerson = {};

// Método para obtener todos los registros de kpis_has_person
KpisHasPerson.getAllKpisHasPerson = (callback) => {
    db.query('SELECT * FROM kpis_has_person', (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = KpisHasPerson;

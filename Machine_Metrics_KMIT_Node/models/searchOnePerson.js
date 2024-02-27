const db = require('../db');

const Person = {};

// Método para obtener el nombre de una persona por su idactive
Person.getPersonByIdActive = (idactive, callback) => {
    db.query('SELECT full_name FROM person WHERE idactive = ?', [idactive], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = Person;

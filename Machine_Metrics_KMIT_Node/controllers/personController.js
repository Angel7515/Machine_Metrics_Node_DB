const Person = require('../models/personModel');

//Controlador para obtener a todas las personas
exports.getPerson = (req, res) => {
    Person.getAllPerson((err, person) => {
        if (err) {
            console.error('Error al obtener personas: ', err);
            res.status(500).send('Error al obtener a las personas: ' + err.message);
        } else {
            res.json(person);
        }
    });
};
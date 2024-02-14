const db = require('../db');

const Person = {};

//Método para obtener registro de personas
Person.getAllPerson = (callback) => {
    db.query('SELECT * FROM person',(err,result) => {
        if(err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    });
};

module.exports = Person;
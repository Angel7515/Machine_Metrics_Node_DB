const db = require('../db');

const PersonHasProject = {}

//Método para obtener el diccionario de personas que pertenecen a un proyecto
PersonHasProject.getAllPresonProjects = (callback) => {
    db.query('SELECT * FROM person_has_project', (err,result) => {
        if(err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    });
};

module.exports = PersonHasProject;
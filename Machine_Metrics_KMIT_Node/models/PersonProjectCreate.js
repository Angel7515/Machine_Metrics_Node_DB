// personProjectModel.js
const db = require('../db');

const PersonProjectModel = {
    createPersonProject: function(person_idactive, project_idproject, callback) {
        const sql = 'INSERT INTO person_has_project (person_idactive, project_idproject) VALUES (?, ?)';
        db.query(sql, [person_idactive, project_idproject], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = PersonProjectModel;

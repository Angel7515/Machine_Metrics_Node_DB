// personModel.js
const db = require('../db');

const newPerson = {
    createUser: function (fullName, userRole, callback) {
        const sql = 'INSERT INTO person (full_name, user_role) VALUES (?, ?)';
        db.query(sql, [fullName, userRole], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
}

module.exports = newPerson;

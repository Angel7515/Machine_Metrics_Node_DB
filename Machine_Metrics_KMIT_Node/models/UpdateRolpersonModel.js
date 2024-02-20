// personModel.js
const db = require('../db');

const personModel = {
     updateRole: function(fullName, newRole, callback) {
        const sql = `UPDATE person SET user_role = ? WHERE full_name = ?`;
        db.query(sql, [newRole, fullName], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
}

module.exports = personModel;

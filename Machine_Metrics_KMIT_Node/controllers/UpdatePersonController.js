// personController.js
const Person = require('../models/UpdateRolpersonModel');

const personControllerUp = {
    updateRole: function (req, res) {
        const { fullName, newRole } = req.body;
        Person.updateRole(fullName, newRole, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Usuario actualizado correctamente' });
            }
        });
    }
}

module.exports = personControllerUp;

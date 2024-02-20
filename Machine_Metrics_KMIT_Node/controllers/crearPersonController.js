// personController.js
const Person = require('../models/crearPersonModel');

const newPersonController = {
    createNewUser: function (req, res) {
        const { fullName, userRole } = req.body;
        Person.createUser(fullName, userRole, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Usuario creado correctamente' });
            }
        });
    }
}

module.exports = newPersonController;
const Person = require('../models/checkPersonLoginModel');

exports.checkUserAccess = (req, res) => {
  const { idactive, full_name } = req.body;

  Person.findByFullName(idactive, (err, person) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!person.idactive || person.user_role === 'PARTICIPANT') {
      return res.status(403).json({ accessGranted: false });
    }

    // Si el idactive coincide, comparamos el full_name
    if (person.full_name !== full_name) {
      // Si el full_name no coincide, actualizamos el full_name en la base de datos
      Person.updateFullNameByIdActive(idactive, full_name, (updateErr) => {
        if (updateErr) {
          return res.status(500).json({ error: 'Error updating full name' });
        }
        res.status(200).json({ accessGranted: true });
      });
    } else {
      // Si el full_name coincide, respondemos con un estado 200
      res.status(200).json({ accessGranted: true });
    }
  });
};

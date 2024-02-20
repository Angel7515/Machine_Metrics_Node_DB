const Person = require('../models/checkPersonLoginModel');

exports.checkUserAccess = (req, res) => {
  const { fullName } = req.body;

  Person.findByFullName(fullName, (err, person) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!person || person.user_role === 'PARTICIPANT') {
      return res.status(403).json({ accessGranted: false });
    }

    res.status(200).json({ accessGranted: true });
  });
};

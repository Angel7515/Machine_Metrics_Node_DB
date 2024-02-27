const db = require('../db');

// Controlador para crear un nuevo KPI
exports.createKpi = (req, res) => {
  const { name, type_kp, importance, project_idproject, project_person_idactive } = req.body;
  const query = 'INSERT INTO kpis (name, type_kp, importance, project_idproject, project_person_idactive) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, type_kp, importance, project_idproject, project_person_idactive], (err, result) => {
    if (err) {
      console.error('Error creating KPI: ', err);
      res.status(500).json({ error: 'An error occurred while creating the KPI.' });
      return;
    }
    res.status(201).json({ message: 'KPI created successfully', id: result.insertId });
  });
};

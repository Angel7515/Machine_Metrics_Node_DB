const db = require('../db');

// Crear un nuevo registro en person_has_project
exports.createPersonHasProject = (req, res) => {
  const { person_full_name, project_idproject } = req.body;
  const sql = 'INSERT INTO person_has_project (person_full_name, project_idproject) VALUES (?, ?)';
  db.query(sql, [person_full_name, project_idproject], (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    res.json({ message: 'New record created successfully', id: result.insertId });
  });
};

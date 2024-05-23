/* const db = require('../db'); */

// Controlador para crear un nuevo KPI
/* exports.createKpi = (req, res) => {
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
}; */




/* 2 tables */

/* const db = require('../db');

exports.createKpi = (req, res) => {
  const { name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive } = req.body;
  const query = `
    INSERT INTO kmit_projects_dashboard.kpis 
    (name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive], (err, result) => {
    if (err) {
      console.error('Error creating KPI: ', err);
      res.status(500).json({ error: 'An error occurred while creating the KPI.' });
      return;
    }

    const kpiId = result.insertId;

    let kpi_num;
    let kpi_str = 'Recorded KPI';
    let kpi_str_porcent = 0;

    if (type_kp === 'QUANTITATIVE') {
      kpi_num = 0;
    } else {
      kpi_num = null;
    }

    const performanceQuery = `
      INSERT INTO kmit_projects_dashboard.performance 
      (kpi_num, kpi_str, kpi_str_porcent, kpi_descripcion, date_upload, kpis_idkpis, kpis_project_idproject, kpis_project_person_idactive) 
      VALUES (?, ?, ?, ?, CURRENT_DATE(), ?, ?, ?)
    `;
    db.query(performanceQuery, [kpi_num, kpi_str, kpi_str_porcent, kpi_str, kpiId, project_idproject, project_person_idactive], (error, result) => {
      if (error) {
        console.error('Error creating initial performance record: ', error);
        res.status(500).json({ error: 'An error occurred while creating the initial performance record.' });
        return;
      }

      res.status(201).json({ message: 'KPI created successfully', id: kpiId });
    });
  });
}; */

const db = require('../db');

// Controlador para crear un nuevo KPI
exports.createKpi = (req, res) => {
  const { name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive, responsibleParticipants } = req.body;
  const query = `
    INSERT INTO kmit_projects_dashboard.kpis 
    (name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [name, type_kp, importance, start_date, end_date, project_idproject, project_person_idactive], (err, result) => {
    if (err) {
      console.error('Error creating KPI: ', err);
      res.status(500).json({ error: 'An error occurred while creating the KPI.' });
      return;
    }

    // Obtener el ID del KPI recién creado
    const kpiId = result.insertId;

    // Insertar un registro inicial en la tabla performance
    let kpi_num;
    let kpi_str = 'Recorded KPI';
    let kpi_str_porcent = 0;

    if (type_kp === 'QUANTITATIVE') {
      kpi_num = 0;
    } else {
      kpi_num = null;
    }

    const performanceQuery = `
      INSERT INTO kmit_projects_dashboard.performance 
      (kpi_num, kpi_str, kpi_str_porcent, kpi_descripcion, date_upload, kpis_idkpis, kpis_project_idproject, kpis_project_person_idactive) 
      VALUES (?, ?, ?, ?, CURRENT_DATE(), ?, ?, ?)
    `;
    db.query(performanceQuery, [kpi_num, kpi_str, kpi_str_porcent, kpi_str, kpiId, project_idproject, project_person_idactive], (error, result) => {
      if (error) {
        console.error('Error creating initial performance record: ', error);
        res.status(500).json({ error: 'An error occurred while creating the initial performance record.' });
        return;
      }

      // Insertar los responsables en la tabla kpis_has_person
      if (responsibleParticipants && responsibleParticipants.length > 0) {
        const values = responsibleParticipants.map(personId => [kpiId, project_idproject, personId]);
        const responsibleQuery = `
          INSERT INTO kmit_projects_dashboard.kpis_has_person 
          (kpis_idkpis, kpis_project_idproject, person_idactive) 
          VALUES ?
        `;
        db.query(responsibleQuery, [values], (respErr) => {
          if (respErr) {
            console.error('Error inserting responsible participants: ', respErr);
            res.status(500).json({ error: 'An error occurred while inserting responsible participants.' });
            return;
          }

          // Envía una respuesta exitosa con el ID del KPI creado
          res.status(201).json({ message: 'KPI created successfully', id: kpiId });
        });
      } else {
        // Envía una respuesta exitosa con el ID del KPI creado
        res.status(201).json({ message: 'KPI created successfully', id: kpiId });
      }
    });
  });
};



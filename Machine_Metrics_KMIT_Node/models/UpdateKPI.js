// models/kpi.js
const db = require('../db');

const Kpi = {};

Kpi.updateKpi = async (idkpis, newData) => {
  const { responsibles, ...kpiData } = newData;

  // Actualizar datos principales del KPI
  await new Promise((resolve, reject) => {
    db.query('UPDATE kpis SET ? WHERE idkpis = ?', [kpiData, idkpis], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  // Procesar el array de responsables
  if (responsibles && responsibles.length > 0) {
    await Promise.all(responsibles.map(async (responsible) => {
      const { person_id, responsibility } = responsible;

      if (responsibility === 'Responsible') {
        // Verificar si el registro ya existe
        const existingRecord = await new Promise((resolve, reject) => {
          db.query('SELECT * FROM kpis_has_person WHERE kpis_idkpis = ? AND kpis_project_idproject = ? AND person_idactive = ?',
            [idkpis, newData.project_idproject, person_id],
            (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results[0]);
              }
            });
        });

        // Si no existe, insertar el nuevo registro
        if (!existingRecord) {
          await new Promise((resolve, reject) => {
            db.query('INSERT INTO kpis_has_person (kpis_idkpis, kpis_project_idproject, person_idactive) VALUES (?, ?, ?)',
              [idkpis, newData.project_idproject, person_id],
              (err, results) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(results);
                }
              });
          });
        }
      } else if (responsibility === 'Remove') {
        // Eliminar el registro si existe
        await new Promise((resolve, reject) => {
          db.query('DELETE FROM kpis_has_person WHERE kpis_idkpis = ? AND kpis_project_idproject = ? AND person_idactive = ?',
            [idkpis, newData.project_idproject, person_id],
            (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });
      }
    }));
  }

  return Promise.resolve('KPI updated successfully.');
};

module.exports = Kpi;


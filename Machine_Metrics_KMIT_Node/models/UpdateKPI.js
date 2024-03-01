// models/kpi.js
const db = require('../db');

const Kpi = {};

Kpi.updateKpi = (idkpis, newData) => {
  return new Promise((resolve, reject) => {
    // Query para actualizar el registro
    db.query('UPDATE kpis SET ? WHERE idkpis = ?', [newData, idkpis], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = Kpi;

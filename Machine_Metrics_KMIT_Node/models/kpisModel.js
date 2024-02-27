// models/kpi.js
const db = require('../db');

class KPI {
  static getAllKPIs(callback) {
    db.query('SELECT * FROM kpis', (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      callback(null, results);
    });
  }
}

module.exports = KPI;

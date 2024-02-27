// controllers/kpiController.js
const KPI = require('../models/kpisModel');

// Método para obtener todos los registros de KPIs
function getAllKPIs(req, res) {
  KPI.getAllKPIs((error, kpis) => {
    if (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(kpis);
  });
}

module.exports = {
  getAllKPIs
};

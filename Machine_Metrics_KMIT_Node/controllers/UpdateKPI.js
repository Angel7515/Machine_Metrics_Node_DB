// controllers/kpiController.js
const Kpi = require('../models/UpdateKPI');

const kpiController = {};

kpiController.updateKpi = async (req, res) => {
  const idkpis = req.params.idkpis;
  const newData = req.body; // Se espera que los datos a actualizar estén en el cuerpo de la solicitud

  try {
    const result = await Kpi.updateKpi(idkpis, newData);
    res.json({ success: true, message: 'KPI updated successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating KPI.', error: error.message });
  }
};

module.exports = kpiController;

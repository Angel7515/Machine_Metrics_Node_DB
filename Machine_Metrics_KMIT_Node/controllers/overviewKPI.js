// controllers/kpisController.js
const Kpi = require('../models/overviewKPI');

exports.getKpisByProject = (req, res) => {
  const projectId = req.params.projectId;

  Kpi.getKpisByProject(projectId, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los KPIs.' });
      return;
    }

    res.json(results);
  });
};

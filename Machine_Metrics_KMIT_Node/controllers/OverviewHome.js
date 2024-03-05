const ProjectSummary = require('../models/OverviewHome');

exports.getSummary = (req, res) => {
    ProjectSummary.getSummary((err, results) => {
        if (err) {
            console.error('Error al obtener el resumen del proyecto:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(results);
        }
    });
};

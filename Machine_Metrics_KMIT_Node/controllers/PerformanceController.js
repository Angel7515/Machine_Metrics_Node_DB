const Performance = require('../models/PerformanceModel');

// Controlador para obtener todas las entradas de rendimiento
exports.getAllPerformance = (req, res) => {
    Performance.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al recuperar las entradas de rendimiento."
            });
        } else {
            res.send(data);
        }
    });
};

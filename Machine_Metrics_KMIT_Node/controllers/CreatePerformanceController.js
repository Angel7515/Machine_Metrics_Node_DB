const Performance = require('../models/CreatePerformanceModel');

exports.createPerformance = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'El contenido no puede estar vacío.' });
        return;
    }

    const performanceData = req.body;

    Performance.create(performanceData, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error al crear una nueva entrada de performance.'
            });
        } else {
            res.send(data);
        }
    });
};

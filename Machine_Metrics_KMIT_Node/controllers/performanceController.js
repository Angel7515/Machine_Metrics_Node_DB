const Performance = require('../models/performanceModel');

//Controlador para obtener todos los performance
exports.getPerformance = (req,res) => {
    Performance.getAllPerformance((err,performance) => {
        if(err) {
            console.error('Error al obtener registros de Performance: ',err);
            res.status(500).send('Error al obtener los performance: '+err.message);
        } else {
            res.json(performance);
        }
    })
}
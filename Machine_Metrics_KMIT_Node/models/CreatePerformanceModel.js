const db = require('../db');

const Performance = {};

Performance.create = (performanceData, result) => {
    db.query('INSERT INTO performance SET ?', performanceData, (err, res) => {
        if (err) {
            console.error('Error al crear una nueva entrada de performance: ', err);
            result(err, null);
            return;
        }
        console.log('Nueva entrada de performance creada: ', { id: res.insertId, ...performanceData });
        result(null, { id: res.insertId, ...performanceData });
    });
};

module.exports = Performance;

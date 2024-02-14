const db = require('../db');

const Performance = {};

//Método para obtener todos los registros de performance
Performance.getAllPerformance = (callback) => {
    db.query('SELECT * FROM performance', (err,result) => {
        if(err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    });
};

module.exports = Performance;
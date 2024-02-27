const db = require('../db'); // Importa el archivo de conexión a la base de datos

const Performance = {};

Performance.getAll = (result) => {
    db.query('SELECT * FROM performance', (err, res) => {
        if (err) {
            console.error('Error al obtener todas las entradas de performance: ', err);
            result(null, err);
            return;
        }
        console.log('Entradas de performance: ', res);
        result(null, res);
    });
};

module.exports = Performance;


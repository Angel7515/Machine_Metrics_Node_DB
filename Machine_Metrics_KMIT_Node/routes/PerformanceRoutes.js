// performanceRoutes.js

module.exports = app => {
    const performance = require('../controllers/PerformanceController');

    // Crear una nueva entrada de performance
    app.post('/create', performance.create);

    // Obtener todas las entradas de performance
    app.get('/get', performance.getAll);
};

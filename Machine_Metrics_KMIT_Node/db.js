const mysql = require('mysql2');

// Crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: 'mysql-container',
  user: 'root',
  password: '59511348277525*',
  database: 'kmit_projects_dashboard',
  waitForConnections: true,
  connectionLimit: 20, // Limitar a 20 conexiones
  queueLimit: 0
});

// Exportar el pool de conexiones para su uso en otros módulos
module.exports = pool;

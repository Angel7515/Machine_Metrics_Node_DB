const mysql = require('mysql2');

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'mysql-container',
    user: 'root',
    password: '59511348277525*',
    database: 'kmit_projects_dashboard'
  });
  
  // Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    throw err; // Otra opción sería: process.exit(1);
  } else {
    console.log('Conexión a MySQL [ kmit_projects_dashboard ]');
  }
});


module.exports = db;

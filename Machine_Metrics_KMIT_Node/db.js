const mysql = require('mysql');

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59510215617525',
    database: 'machine_metrics'
  });
  
  // Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    throw err; // Otra opción sería: process.exit(1);
  } else {
    console.log('Conexión a MySQL [ machine_metrics ]');
  }
});


module.exports = db;

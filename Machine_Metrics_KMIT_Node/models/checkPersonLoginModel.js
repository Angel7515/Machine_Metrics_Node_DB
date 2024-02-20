const db = require('../db');

class Person {
  static findByFullName(fullName, callback) {
    db.query('SELECT * FROM person WHERE full_name = ?', [fullName], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      callback(null, results[0]);
    });
  }
}

module.exports = Person;

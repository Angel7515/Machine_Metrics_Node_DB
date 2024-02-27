const db = require('../db');

class Person {
  static findByFullName(idactive, callback) {
    db.query('SELECT * FROM person WHERE idactive = ?', [idactive], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      callback(null, results[0]);
    });
  }

  static updateFullNameByIdActive(idactive, full_name, callback) {
    db.query('UPDATE person SET full_name = ? WHERE idactive = ?', [full_name, idactive], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      callback(null);
    });
  }
}

module.exports = Person;

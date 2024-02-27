// projectModel.js
const db = require('../db');

const projectModel = {
    updateProjectDB: function (idproject, projectData, callback) {
        const { project_name, description, start_date, end_date, status_project, person_idactive } = projectData;
        const query = `UPDATE project SET project_name=?, description=?, start_date=?, end_date=?, status_project=?, person_idactive=? WHERE idproject=?`;

        db.query(query, [project_name, description, start_date, end_date, status_project, person_idactive, idproject], (error, results, fields) => {
            if (error) {
                console.log("Error al actualizar el proyecto:", error);
                callback(error, null);
            } else {
                console.log("Proyecto actualizado exitosamente");
                callback(null, results);
            }
        });
    }
};

module.exports = projectModel;

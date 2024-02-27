// models/project.js
const db = require('../db');

const NewProject = {
    create: function(projectData, callback) {
        return db.query('INSERT INTO project (project_name, description, start_date, status_project, person_idactive) VALUES ( ?, ?, ?, ?, ?)', 
            [projectData.project_name, projectData.description, projectData.start_date, projectData.status_project, projectData.person_idactive], 
            callback);
    }
};

module.exports = NewProject;

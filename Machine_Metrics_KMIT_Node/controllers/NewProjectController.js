const NewProject = require('../models/NewProjectModel');

const newprojectController = {
    createProject: function(req, res) {
        const newprojectData = {
            project_name: req.body.project_name,
            description: req.body.description,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            status_project: req.body.status_project,
            person_full_name: req.body.person_full_name
        };

        NewProject.create(newprojectData, function(err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: "Error creating project" });
            }
            return res.status(201).json({ success: true, message: "Project created successfully", project_id: result.insertId });
        });
    }
};

module.exports = newprojectController;

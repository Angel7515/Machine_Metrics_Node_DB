// models/kpis.js
const db = require('../db');

class Kpi {
  static getKpisByProject(projectId, callback) {
    const query = `
      SELECT 
        k.idkpis,
        k.name,
        k.type_kp,
        k.importance,
        p.idperformance,
        p.kpi_num,
        p.kpi_str,
        p.kpi_str_porcent,
        p.kpi_descripcion,
        p.date_upload
      FROM
        kmit_projects_dashboard.kpis k
      LEFT JOIN
        kmit_projects_dashboard.performance p ON k.idkpis = p.kpis_idkpis
      WHERE
        k.project_idproject = ?
      AND p.idperformance IN (SELECT 
          MAX(idperformance)
        FROM
          kmit_projects_dashboard.performance
        WHERE
          kpis_idkpis = k.idkpis
          AND kpis_project_idproject = k.project_idproject
        GROUP BY kpis_idkpis , kpis_project_idproject);`;

    db.query(query, [projectId], callback);
  }
}

module.exports = Kpi;

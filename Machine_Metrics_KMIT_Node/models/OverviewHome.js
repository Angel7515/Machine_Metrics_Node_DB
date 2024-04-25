const db = require('../db');

class ProjectSummary {
  static getSummary(callback) {
    /* const query = `
      SELECT 
        k.project_idproject,
        SUM(p.kpi_str_porcent) AS total_porcentaje,
        COUNT(*) AS numero_elementos,
        MAX(p.date_upload) AS fecha_ultima_actualizacion
      FROM
        kmit_projects_dashboard.kpis k
      LEFT JOIN
        kmit_projects_dashboard.performance p ON k.idkpis = p.kpis_idkpis
      WHERE
        p.idperformance IN (SELECT 
            MAX(idperformance)
          FROM
            kmit_projects_dashboard.performance p2
          JOIN
            kmit_projects_dashboard.kpis k2 ON p2.kpis_idkpis = k2.idkpis
          WHERE
            k2.project_idproject = k.project_idproject
          GROUP BY k2.idkpis)
      GROUP BY k.project_idproject;`; */

    const query = `
      SELECT 
        k.project_idproject,
        SUM(COALESCE(p.kpi_str_porcent, 0)) AS total_porcentaje,
        COUNT(*) AS numero_elementos,
        MAX(p.date_upload) AS fecha_ultima_actualizacion
      FROM
        kmit_projects_dashboard.kpis k
      LEFT JOIN
        kmit_projects_dashboard.performance p ON k.idkpis = p.kpis_idkpis
      GROUP BY k.project_idproject;`;

    db.query(query, callback);
  }
}

module.exports = ProjectSummary;

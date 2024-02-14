use machine_metrics;

-- Inserción en la tabla `person`
INSERT INTO `person` (`full_name`, `supervisor_name`) VALUES
('ANDRADE AYALA, Miguel Angel (CIMMYT)', 'TENORIO ROBLES, Alejandra (CIMMYT)'),
('TENORIO ROBLES, Alejandra (CIMMYT)', 'HERRERA DE LA CRUZ, Jesus (CIMMYT)');

-- Inserción en la tabla `project`
INSERT INTO `project` (`project_name`, `description`, `start_date`, `end_date`, `status_project`, `person_full_name`) VALUES
('Proyecto A', 'Descripción del Proyecto A', '2024-01-01', '2024-06-30', 'ACTIVE', 'TENORIO ROBLES, Alejandra (CIMMYT)'),
('Proyecto B', 'Descripción del Proyecto B', '2024-02-01', '2024-07-31', 'PENDING', 'ANDRADE AYALA, Miguel Angel (CIMMYT)');

-- Inserción en la tabla `person_has_project`
INSERT INTO `person_has_project` (`person_full_name`, `project_idproject`) VALUES
('ANDRADE AYALA, Miguel Angel (CIMMYT)', 1),
('TENORIO ROBLES, Alejandra (CIMMYT)', 2);

-- Inserción en la tabla `performance`
INSERT INTO `performance` (`kpi_type`, `project_idproject`, `project_person_full_name`, `kpi_num`, `kpi_str`, `kpi_str_porcent`, `kpi_descripcion`, `date_upload`) VALUES
('Calidad', 1, 'TENORIO ROBLES, Alejandra (CIMMYT)', 80.5, NULL, NULL, 'Informe de calidad del Proyecto A', '2024-02-13'),
('Productividad', 2, 'ANDRADE AYALA, Miguel Angel (CIMMYT)', NULL, 'Bueno', 75.3, 'Informe de productividad del Proyecto B', '2024-02-13');
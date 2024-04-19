-- MySQL Script generated by MySQL Workbench
-- Fri Feb 23 16:26:55 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema kmit_projects_dashboard
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `kmit_projects_dashboard` ;

-- -----------------------------------------------------
-- Schema kmit_projects_dashboardpersonperson
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kmit_projects_dashboard` DEFAULT CHARACTER SET utf8 ;
USE `kmit_projects_dashboard` ;

-- -----------------------------------------------------
-- Table `kmit_projects_dashboard`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kmit_projects_dashboard`.`person` (
  `idactive` VARCHAR(45) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `user_role` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`idactive`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idactive_UNIQUE` ON `kmit_projects_dashboard`.`person` (`idactive` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `kmit_projects_dashboard`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kmit_projects_dashboard`.`project` (
  `idproject` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(150) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NULL,
  `status_project` ENUM('CREATED', 'PENDING', 'ACTIVE', 'COMPLETE') NOT NULL,
  `person_idactive` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproject`, `person_idactive`),
  CONSTRAINT `fk_project_person1`
    FOREIGN KEY (`person_idactive`)
    REFERENCES `kmit_projects_dashboard`.`person` (`idactive`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idproject_UNIQUE` ON `kmit_projects_dashboard`.`project` (`idproject` ASC) VISIBLE;

CREATE INDEX `fk_project_person1_idx` ON `kmit_projects_dashboard`.`project` (`person_idactive` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `kmit_projects_dashboard`.`kpis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kmit_projects_dashboard`.`kpis` (
  `idkpis` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `type_kp` ENUM('QUANTITATIVE', 'QUALITATIVE') NOT NULL,
  `importance` LONGTEXT NOT NULL,
  `project_idproject` INT NOT NULL,
  `project_person_idactive` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idkpis`, `project_idproject`, `project_person_idactive`),
  CONSTRAINT `fk_kpis_project1`
    FOREIGN KEY (`project_idproject` , `project_person_idactive`)
    REFERENCES `kmit_projects_dashboard`.`project` (`idproject` , `person_idactive`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idkpis_UNIQUE` ON `kmit_projects_dashboard`.`kpis` (`idkpis` ASC) VISIBLE;

CREATE INDEX `fk_kpis_project1_idx` ON `kmit_projects_dashboard`.`kpis` (`project_idproject` ASC, `project_person_idactive` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `kmit_projects_dashboard`.`performance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kmit_projects_dashboard`.`performance` (
  `idperformance` INT NOT NULL AUTO_INCREMENT,
  `kpi_num` FLOAT NULL,
  `kpi_str` VARCHAR(250) NULL,
  `kpi_str_porcent` FLOAT NULL,
  `kpi_descripcion` LONGTEXT NOT NULL,
  `date_upload` DATE NOT NULL,
  `kpis_idkpis` INT NOT NULL,
  `kpis_project_idproject` INT NOT NULL,
  `kpis_project_person_idactive` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idperformance`, `kpis_idkpis`, `kpis_project_idproject`, `kpis_project_person_idactive`),
  CONSTRAINT `fk_performance_kpis1`
    FOREIGN KEY (`kpis_idkpis` , `kpis_project_idproject` , `kpis_project_person_idactive`)
    REFERENCES `kmit_projects_dashboard`.`kpis` (`idkpis` , `project_idproject` , `project_person_idactive`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idperformance_UNIQUE` ON `kmit_projects_dashboard`.`performance` (`idperformance` ASC) VISIBLE;

CREATE INDEX `fk_performance_kpis1_idx` ON `kmit_projects_dashboard`.`performance` (`kpis_idkpis` ASC, `kpis_project_idproject` ASC, `kpis_project_person_idactive` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `kmit_projects_dashboard`.`person_has_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kmit_projects_dashboard`.`person_has_project` (
  `person_idactive` VARCHAR(45) NOT NULL,
  `project_idproject` INT NOT NULL,
  PRIMARY KEY (`person_idactive`, `project_idproject`),
  CONSTRAINT `fk_person_has_project_person`
    FOREIGN KEY (`person_idactive`)
    REFERENCES `kmit_projects_dashboard`.`person` (`idactive`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_person_has_project_project1`
    FOREIGN KEY (`project_idproject`)
    REFERENCES `kmit_projects_dashboard`.`project` (`idproject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_person_has_project_project1_idx` ON `kmit_projects_dashboard`.`person_has_project` (`project_idproject` ASC) VISIBLE;

CREATE INDEX `fk_person_has_project_person_idx` ON `kmit_projects_dashboard`.`person_has_project` (`person_idactive` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення та початкового наповнення бази даних
- RESTfull сервіс для управління даними

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `avatar` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`OperationType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`OperationType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`OperationType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`RequestType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`RequestType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`RequestType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `OperationType_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_RequestType_OperationType1_idx` (`OperationType_id` ASC) VISIBLE,
  CONSTRAINT `fk_RequestType_OperationType1`
    FOREIGN KEY (`OperationType_id`)
    REFERENCES `mydb`.`OperationType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Grant` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
  `Role_id` INT NULL,
  `RequestType_id` INT NOT NULL,
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Grant_RequestType1_idx` (`RequestType_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_RequestType1`
    FOREIGN KEY (`RequestType_id`)
    REFERENCES `mydb`.`RequestType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Category` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`Access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Access` (
  `User_id` INT NOT NULL,
  `Role_id` INT NOT NULL,
  INDEX `fk_Access_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Access_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_Access_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`File`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`File` ;

CREATE TABLE IF NOT EXISTS `mydb`.`File` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `uploadDate` DATETIME NULL,
  `file_csv` BLOB NULL,
  `hasGraph` TINYINT NULL,
  `Category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_File_Category1_idx` (`Category_id` ASC) VISIBLE,
  CONSTRAINT `fk_File_Category1`
    FOREIGN KEY (`Category_id`)
    REFERENCES `mydb`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`FileCollection`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`FileCollection` ;

CREATE TABLE IF NOT EXISTS `mydb`.`FileCollection` (
  `User_id` INT NOT NULL,
  `File_id` INT NOT NULL,
  INDEX `fk_FileCollection_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_FileCollection_File1_idx` (`File_id` ASC) VISIBLE,
  CONSTRAINT `fk_FileCollection_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FileCollection_File1`
    FOREIGN KEY (`File_id`)
    REFERENCES `mydb`.`File` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`EditForm`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`EditForm` ;

CREATE TABLE IF NOT EXISTS `mydb`.`EditForm` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `editorUsername` VARCHAR(45) NULL,
  `oldFile_csv` BLOB NULL,
  `newFile_csv` BLOB NULL,
  `editDate` DATETIME NULL,
  `File_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_EditForm_File1_idx` (`File_id` ASC) VISIBLE,
  CONSTRAINT `fk_EditForm_File1`
    FOREIGN KEY (`File_id`)
    REFERENCES `mydb`.`File` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`User`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (1, 'Viserctul', 'udovichenko.roman@lll.kpi.ua', 'sxZ6bBN8', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (2, 'Bogdandadai', 'Roxan1hor333@gmail.com', 'puU8ZtSh', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (3, 'BONDVados', 'bondarenko.vlad@lll.kpi.ua', 'Qp4ULPye', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (4, 'nobodytriestowakeup', 'volodinvaleriy123@gmail.com', 'y3ex9gom', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (5, 'ministr_r', 'vladnyznyi2003@gmail.com', 'Ek5FUy7s', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (6, 'OlehBielov', 'olaph22@gmail.com', 'xjXJ4fE3', NULL);
INSERT INTO `mydb`.`User` (`id`, `username`, `email`, `password`, `avatar`) VALUES (7, 'Chuyan_Andrey', 'umajyr295@gmail.com', 'V6NPvGgT', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Role` (`id`, `name`) VALUES (1, 'SuperAdmin');
INSERT INTO `mydb`.`Role` (`id`, `name`) VALUES (2, 'Admin');
INSERT INTO `mydb`.`Role` (`id`, `name`) VALUES (3, 'User');
INSERT INTO `mydb`.`Role` (`id`, `name`) VALUES (4, 'Guest');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Category`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Category` (`id`, `name`) VALUES (DEFAULT, 'Text');
INSERT INTO `mydb`.`Category` (`id`, `name`) VALUES (DEFAULT, 'Image');
INSERT INTO `mydb`.`Category` (`id`, `name`) VALUES (DEFAULT, 'Undefined');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Access`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (1, 1);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (2, 2);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (3, 2);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (4, 3);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (5, 3);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (6, 4);
INSERT INTO `mydb`.`Access` (`User_id`, `Role_id`) VALUES (7, 4);

COMMIT;

```


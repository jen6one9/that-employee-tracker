/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS employeeDB;

-- Create the database employeeDB and specified it for use.
CREATE DATABASE employeeDB;

USE employeeDB;

-- Create the table employee
CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int,
  manager_id int,

  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO employee (employees) VALUES ('id, first_name, last_name, role_id, manager_id');

-- Create the table department
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO department (departments) VALUES ('id, name');

-- Create the table role
CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal NOT NULL,
  department_id INIT NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO department (departments) VALUES ('id, name');
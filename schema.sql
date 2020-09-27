DROP DATABASE IF EXISTS employeeDB;

-- Create the database employeeDB and specified it for use.
CREATE DATABASE employeeDB;

USE employeeDB;

-- Create the table department
CREATE TABLE department
(
  id int NOT NULL
  AUTO_INCREMENT,
  name varchar
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);


  select *
  from department;
  -- Create the table role
  CREATE TABLE role
  (
    id int NOT NULL
    AUTO_INCREMENT,
  title varchar
    (30) NOT NULL,
  salary decimal NOT NULL,
  department_id  int NOT NULL,
  PRIMARY KEY
    (id)
);


    -- Create the table employee
    CREATE TABLE employee
    (
      id int NOT NULL
      AUTO_INCREMENT,
  first_name varchar
      (30) NOT NULL,
  last_name varchar
      (30) NOT NULL,
  role_id int,
  manager_id int,

  PRIMARY KEY
      (id)
);
 



 

    

     
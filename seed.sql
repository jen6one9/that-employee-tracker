-- Insert a set of records.
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Namitha', 'Barthur', 1, null);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Ferdie', 'Ong', 2, null);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('James', 'Brown', 3, null);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Yan', 'Huang', 4, null);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Nancy', 'Bango', 5, 1);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Mike', 'Estrada', 6, 2);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Moosa', 'Mohammad', 7, 3);
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES
    ('Archana', 'Ali', 8, 4);
  select *
  from employee;

  INSERT INTO department
      (name)
    VALUES
      ('Production');
    INSERT INTO department
      (name)
    VALUES
      ('Sales');
    INSERT INTO department
      (name)
    VALUES
      ('IT');

       -- Insert a set of records.
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Manager', 100000, 1);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Manager', 100000, 2);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Manager', 100000, 3);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Manager', 100000, 4);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Team Lead', 100000, 1);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Team Lead', 100000, 2);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Team Lead', 100000, 3);
      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ('Team Lead', 100000, 4);
      select *
      from role;

var express = require("express");
var cTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql");
var app = express();

// Set the port of our application

var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "Localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employeeDB"
});






connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

mainMenu();



connection.connect(function (error) {
  if (error) {
    throw error;
  }
  console.log("Database connection established. Welcome to the HR system.")
  console.log("----------------------------------------------------------------------------------------------------")
  displayMenu()
})




// Prompt the user with questions

function displayMenu() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do today?",
      name: "userInput",
      choices: ["View Department", "View Role", "View All Employees", "Update Employee Role", "Add Department", "Add Role", "Add Employee", "Exit application"]

    }
  ])
    .then(function (response) {
      switch (response.userInput) {
        case "View Department":
          viewDepartment()
          break;
        case "View Role":
          viewRole()
          break;
        case "View All Employees":
          ViewAllEmployees()
          break;
        case "Update Employee Role":
          updateEmployeeRole()
          break;
        case "Add Department":
          AddDepartment()
          break;
        case "Add Role":
          AddRole()
          break;
        case "Add Employee":
          AddEmployee()
          break;
        default:
          connection.end()
          process.exit(0)
      }
    })
}


function AddEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's first name?",
        name: "first_name"


      },
      {
        type: "input",
        message: "What is your employee's last name?",
        name: "last_name"


      },
      {
        type: "list",
        message: "What is your employee's role ID?",
        name: "role_id",
        choices: [1, 2, 3, 4, 5, 6, 7, 8]


      },
      {
        type: "input",
        message: "What is your employee's manager role ID?",
        name: "manager_id",
        choices: [1, 2, 3, 4, null]


      },

    ])
    .then(function (response) {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
        [response.first_name, response.last_name, response.role_id, response.manager_id], function (error, records) {
          if (error) throw error;
          console.table(records)
          displayMenu()
        })
    })


}
function ViewAllEmployees() {
  connection.query("select * from employee;", function (error, records) {
    if (error) throw error;
    console.table(records)
    displayMenu()
  })
}
function viewDepartment() {
  connection.query("select * from department;", function (error, records) {
    if (error) throw error;
    console.table(records)
    displayMenu()
  })
}

function viewRole() {
  console.log("Loading roles...\n");
  connection.query("SELECT * FROM role", function (error, records) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(records);
      displayMenu()
  });
};



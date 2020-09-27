
const inquirer = require("inquirer");
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeeDB"

})
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
                [response.first_name, response.last_name, response.role_id, response.manager_id], function(error,records){
                    if(error) throw error;
                    console.table(records)
                    displayMenu()
                })
            })

     
}
function ViewAllEmployees(){
    connection.query("select * from employee;", function(error,records){
        if(error) throw error;
        console.table(records)
        displayMenu()
    })
}
function viewDepartment(){
    connection.query("select * from department;", function(error,records){
        if(error) throw error;
        console.table(records)
        displayMenu()
    })
}

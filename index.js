
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
            choices: ["View Department", "View Role", "View all employees", "Update Employee Role", "Add department", "Add Role", "Add Employee", "exit application"]

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
                case "View all employees":
                    ViewAllEmployees()
                    break;
                case "Update Employee Role":
                    updateEmployeeRole()
                    break;
                case "Add department":
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
        }    )
    }


function addemployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your employee's first name?",
                name: "Name"
                // console.log(response.Name)

            },
            {
                type: "input",
                message: "What is your employee's last name?",
                name: "LastName"
                // console.log(response.LastName)

            },
            {
                type: "input",
                message: "What is your employee's ID?",
                name: "ID"
                // console.log(response.ID)

            },
            {
                type: "input",
                message: "What is your employee's role?",
                name: "Role"
                // console.log(response.Role)


            },
            {
                type: "input",
                message: "Who is your employee's manager?",
                name: "Manager"
                // console.log(response.Manager)

            }
        ])

        .then(function (response) {
            var newEmployee = new Employee(response.Name, response.LastName, response.ID, response.Role, response.Manager)
            employeeDB.push(newEmployee)
            displayMenu()
        })
}
// ===========================================================================================================================
// function addintern(){
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is your name?",
//             name: "Name"
//             // console.log(response.Name)

//         },
//         {
//             type: "input",
//             message: "What is your ID?",
//             name: "ID"
//             // console.log(response.ID)

//         },
//         {
//             type: "input",
//             message: "What is your email address?",
//             name: "Email"
//             // console.log(response.Email)


//         },
//         {
//             type: "input",
//             message: "What school did you graduate from?",
//             name: "School"
//             // console.log(response.School)

//         }
//     ])

// .then(function (response) {
//     var newIntern = new Intern(response.Name, response.ID,response.Email,response.School)
//     employeeDirectory.push(newIntern)
//     displayMenu()
// })
// }
// function addengineer(){
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is your name?",
//             name: "Name"
//             // console.log(response.Name)

//         },
//         {
//             type: "input",
//             message: "What is your ID?",
//             name: "ID"
//             // console.log(response.ID)

//         },
//         {
//             type: "input",
//             message: "What is your email address?",
//             name: "Email"
//             // console.log(response.Email)


//         },
//         {
//             type: "input",
//             message: "What is your official Github?",
//             name: "GitHub"
//             // console.log(response.GitHub)

//         }
//     ])


// .then(function (response) {
//     var newEngineer = new Engineer(response.Name, response.ID,response.Email,response.GitHub)
//     employeeDirectory.push(newEngineer)
//     displayMenu()
// })
// }
// function exitapp(){
//     console.log(employeeDirectory);
//     var html = render(employeeDirectory);
//     console.log(html);
//     fs.writeFileSync ("./index.html", html, function(){
//         console.log("html generator")
//     })
// }
// displayMenu()
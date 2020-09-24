const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");
var employeeDirectory = []

// const util = require('util');

// Prompt the user with questions


      
function displayMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do today?",
            name: "userInput",
            choices: ["Add employee", "View all employees", "Remove employee", "exit application"]

        }
    ])
        .then(function (response) {
            switch (response.userInput) {
                case "Add employee":
                    addemployee()
                    break;
                case "View all employees":
                    viewAllEmp()
                    break;
                case  "Remove employee":
                    removeEmp()
                    break;
                default:
                    exitapp()
            }
        }    )
    }


    function addemployee(){
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
        var newEmployee = new Employee(response.Name, response.LastName, response.ID,response.Role,response.Manager)
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
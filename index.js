const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
let employeesData = [];
let idNum = 0;

function getInputRole() {
  console.log("Initializing Inquirer...");
  idNum++;
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "What role is this employee?",
      choices: ["Manager", "Engineer", "Intern", "Finish build HTML"],
    })
    .then(({ role }) => {
      if (role === "Manager") {
        this.employee = new Manager();
        this.employee.id = idNum;
        // console.log(Manager.employee);
        managerPrompts(this.employee).then((data) => {
          //ask the prompt again
          getInputRole();
        });
      } else if (role === "Engineer") {
        this.employee = new Engineer();
        this.employee.id = idNum;
        // console.log(Engineer.employee);
        engineerPrompts(this.employee).then((data) => {
          //ask the prompt again
          getInputRole();
        });
      } else if (role === "Intern") {
        this.employee = new Intern();
        this.employee.id = idNum;
        // console.log(Intern.employee);
        internPrompts(this.employee).then((data) => {
          //ask the prompt again
          getInputRole();
        });
      } else {
        console.log("generating HTML PAGE");
        //call the fs.writefile and the helper code
        console.log("All member(s) Information ", employeesData);
        process.exit(0);
      }
    });
}

function managerPrompts(employee) {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Manager`s name?",
      },
      {
        type: "text",
        name: "email",
        message: "What is this Manager`s email address?",
      },
      {
        type: "text",
        name: "officeNumber",
        message: "What is the Manager`s office number?",
      },
    ])
    .then((managerData) => {
      employee.name = managerData.name;
      employee.email = managerData.email;
      employee.officeNumber = managerData.officeNumber;
      
      employeesData.push(employee);
    });
}

function engineerPrompts(employee) {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Engineer`s name?",
      },
      {
        type: "text",
        name: "email",
        message: "What is this Engineer`s email address?",
      },
      {
        type: "text",
        name: "gitHub",
        message: "What is the Engineers`s github username?",
      },
    ])
    .then((engineerData) => {
      employee.name = engineerData.name;
      employee.email = engineerData.email;
      employee.gitHub = engineerData.gitHub;
      employeesData.push(employee);
    });
}

function internPrompts(employee) {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the Intern`s name?",
      },
      {
        type: "text",
        name: "email",
        message: "What is this Intern`s email address?",
      },
      {
        type: "text",
        name: "school",
        message: "What is the Intern`s school name?",
      },
    ])
    .then((internData) => {
      employee.name = internData.name;
      employee.email = internData.email;
      employee.school = internData.school;
      employeesData.push(employee);
    });
}

function generateCards(employeeObj) {}

getInputRole();

const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
let idNum = 0;

function getInputRole(){
  console.log('Initializing Inquirer...')
  idNum++;
  inquirer
  .prompt(
  {
    type: 'list',
    name: 'role',
    message: 'What role is this employee?',
    choices: ['Manager','Engineer','Intern']
  })
  .then(({role})=>{
    if(role === "Manager"){
      this.employee = new Manager();
      this.employee.id = idNum;
      // console.log(Manager.employee);
      managerPrompts(this.employee);
    } 
    else if(role === "Engineer"){
      this.employee = new Engineer();
      this.employee.id = idNum;
      // console.log(Engineer.employee);
      engineerPrompts(this.employee);
    }
    else if(role === "Intern"){
      this.employee = new Intern();
      this.employee.id = idNum;
      // console.log(Intern.employee);
      internPrompts(this.employee);
    }
  });
};

function managerPrompts(employee){
  // console.log(employee);
  // employee.name = 'Steven';
  // console.log(employee.name);

  return inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the Manager`s name?',
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is this Manager`s email address?'
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: 'What is the Manager`s office number?'
    }
  ])
  .then((managerData)=>{
    employee.name = managerData.name;
    employee.email = managerData.email;
    employee.officeNumber = managerData.officeNumber;
    console.log(employee);
  });
};

function engineerPrompts(employee){
  console.log(employee);
};

function internPrompts(employee){
  console.log(employee);
};

function generateCards(employeeObj){

};

getInputRole();
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '') {
    super(name);
    this.officeNumber = officeNumber;
  }
  getRole(){
    return 'Manager';
  }
}

// inherit prototype methods from Employee
Player.prototype = Object.create(Character.prototype);

module.exports = Manager;
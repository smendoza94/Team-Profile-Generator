const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Bob');
  expect(manager.name).toBe('Bob');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number)); // unique to Manager
});

// getOfficeNumber() is unique to the Manager
test('gets the manager office number', () => {
  const manager = new Manager('Bob');
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('gets the manager role', () => {
  const manager = new Manager('Bob');
  expect(manager.getRole()).toBe('Manager');
});

test('gets the manager name', () => {
  const manager = new Manager('Bob');
  expect(manager.getName()).toBe('Bob');
});

test('gets the manager id', () => {Manager
  const manager = new Manager('Bob');
  expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets the manager email', () => {
  const manager = new Manager('Bob');
  expect(manager.getEmail()).toEqual(expect.any(String));
});
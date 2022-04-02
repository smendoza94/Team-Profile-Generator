const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Albert');
  expect(employee.name).toBe('Albert');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('gets the employee name', () => {
  const employee = new Employee('Albert');
  expect(employee.getName()).toBe('Albert');
});

test('gets the employee id', () => {
  const employee = new Employee('Albert');
  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets the employee email', () => {
  const employee = new Employee('Albert');
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employee role', () => {
  const employee = new Employee('Albert');
  expect(employee.getRole()).toBe('Employee');
});
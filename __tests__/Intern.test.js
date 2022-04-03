const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const intern = new Intern('Jake');
  expect(intern.name).toBe('Jake');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String)); // unique to Intern
});

// getSchool() is unique to intern 
test('gets the intern school name', () => {
  const intern = new Intern('Jake');
  expect(intern.getSchool()).toEqual(expect.any(String));
})

test('gets the intern role', () => {
  const intern = new Intern('Jake');
  expect(intern.getRole()).toBe('Intern');
});

test('gets the intern name', () => {
  const intern = new Intern('Jake');
  expect(intern.getName()).toBe('Jake');
});

test('gets the intern id', () => {
  const intern = new Intern('Jake');
  expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets the intern email', () => {
  const intern = new Intern('Jake');
  expect(intern.getEmail()).toEqual(expect.any(String));
});
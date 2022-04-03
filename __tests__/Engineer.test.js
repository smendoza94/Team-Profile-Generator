const Engineer = require('../lib/Engineer.js');

test('creats a engineer object', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.name).toBe('Steve');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String)); // unique to engineer
});

// getGitHub() is unique to engineer 
test('gets the engineer GitHub username', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('gets the engineer role', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.getRole()).toBe('Engineer');
});

test('gets the engineer name', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.getName()).toBe('Steve');
});

test('gets the engineer id', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets the engineer email', () => {
  const engineer = new Engineer('Steve');
  expect(engineer.getEmail()).toEqual(expect.any(String));
});
function employeeTypeAttb(employee){
  if(employee.getRole() === "Manager"){
    return `Office #${employee.officeNumber}`
  } else if (employee.getRole() === "Engineer"){
    return `Github: <a href="https://github.com/${employee.gitHub}" class="card-link">${employee.github}</a>`
  } else if (employee.getRole() === "Intern"){
    return `School: ${employee.school}`
  }
}

const generateEmployeeCards = employeeData => {
if(!employeeData){
  return ``;
}
  return `
  <div class="col-sm">
  <div class="card mx-auto mt-2" style="width: 18rem;">
    <div class="card-body bg-dark">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
    </div>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-dark text-white">ID: ${employee.id}</li>
        <li class="list-group-item bg-dark text-white">Email: ${employee.email}</li>
        <li class="list-group-item bg-dark text-white">${employeeTypeAttb(employeeData.getRole())}</li>
      </ul>
    </div>
  </div>
</div>
  `
}

module.exports = templateData => {
  console.log(templateData);
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark">
  <header>
      <h1 class="d-block bg-primary p-2 text-center">My Team</h1>
  </header>
  <main class="container">
    <div class="row">
    ${generateEmployeeCards(employee)}
    </div>
  </main>
</body>
</html>
    `
}
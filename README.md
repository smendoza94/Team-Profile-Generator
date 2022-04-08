# Team-Profile-Generator
A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Description
A team leader would be able to generate a webpage that displays the team's basic info so they have a quick access to their emails and GitHub profiles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#Tests)

## Installation

Ensure you have node.js downloaded. Git Clone the repo into your local drive. Navigate your terminal to the downloaded directory (folder). Run $node index.js. Follow the prompts to enter new employees. Once finished select "finish build html". Html will be generated in "dist" directory (folder).

Video Demonstration: https://drive.google.com/file/d/16CykZMXqMECOwNjfNRGFfJIfTuCpYPzE/view?usp=sharing

## Usage
GIVEN a command-line application that accepts user input
- [x] WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- [x] WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
- [x] WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
- [x] WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- [x] WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- [x] WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- [x] WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

![concept mockup](/Concept-Mockup.png)

## Credits

Collaborators: @smendoza94

## License
Refer to [LICENSE](/LICENSE).

## Tests

Jest Test include Employee, Engineer, Intern, and Manager constructor element type insurance tests. Use "$npm run test" to run tests.

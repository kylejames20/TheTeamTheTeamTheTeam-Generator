const inquirer = require('inquirer');
const fs = require('fs');

const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

let theTeam = {
    manager: "",
    engineers: [],
    interns: [],
};

const newManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of your manager?',
            },
            {
                type:'input',
                name: 'employeeID',
                message: 'What is their employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
        ])
        .then((answers) => {
            theTeam.manager = new manager(answers.managerName, answers.employeeID, answers.email, answers.officeNumber);
            theMenu();
        });
};

const newEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of your engineer?',
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the ID for your engineer?',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the email for your engineer?',
            },
            {
                type: 'input',
                name: 'engineerGithubName',
                message: 'What is the Github username for your engineer?',
                
            },
            {
                type: 'input',
                name: 'engineerGithubLink',
                message: 'What is the link to their Github?',
            },
        ])
        .then((answers) => {
            theTeam.engineers.push(new engineer(answers.engineerName, answers.engineerID, answers.engineerGithubName, answers.engineerGithubLink));
            theMenu();
        });
}

const newIntern = () => {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is the name of your intern?',
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'What is the email for your intern?',
                },
                {
                    type: 'input',
                    name: 'internUniversity',
                    message: 'Where is the intern attending school?',
                },
            ])
            .then((answers) => {
                theTeam.interns.push(new intern(answers.internName, answers.internEmail, answers.internUniversity));
                theMenu();
            });
        };

const theMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'listChoice',
                message: 'Do you want to add an engineer, intern, or complete your Team?',
                choices: [
                    'Add Engineer',
                    'Add Intern',
                    'Complete the Team',
                ],
            },

        ])
        .then((yourChoice) => {
           const { listChoice } = yourChoice;
           if (listChoice == 'Add Engineer') {
               newEngineer();
           } else if(listChoice == 'Add Intern') {
               newIntern();
           } //renderHTML??
        });
};

function init() {
    const managerInfo = newManager();
    // newEngineer();
    // newIntern();
}

init();

//const renderHTML????


const inquirer = require('inquirer');
const fs = require('fs');

const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const templateGen = require('./src/source');

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
            const managerObj = new manager(answers.managerName, answers.employeeID, answers.email, answers.officeNumber)
            // theTeam.manager = new manager(answers.managerName, answers.employeeID, answers.email, answers.officeNumber);
            theTeam.manager = {name: managerObj.name, id: managerObj.id, email: managerObj.getEmail(), officeNumber: managerObj.getofficeNumber(), getRole: managerObj.getRole()};
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
            let engineersObj = new engineer(answers.engineerName, answers.engineerID, answers.engineerGithubName, answers.engineerGithubLink)
            // theTeam.engineers.push(new engineer(answers.engineerName, answers.engineerID, answers.engineerGithubName, answers.engineerGithubLink));
            theTeam.engineers.push({name: engineersObj.name, id: engineersObj.id, email: engineersObj.getEmail(), github: engineersObj.getGithub(), getRole: engineersObj.getRole()});
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
                    name: 'internID',
                    message: 'What is the ID for your intern?',
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
                let internsObj = new intern(answers.internName, answers.internID, answers.internEmail, answers.internUniversity)
                // theTeam.interns.push(new intern(answers.internName, answers.internID, answers.internEmail, answers.internUniversity));
                theTeam.interns.push({name: internsObj.name, id: internsObj.id, email: internsObj.getEmail(), school: internsObj.getSchool(), getRole: internsObj.getRole()});
                theMenu();
            });
        };
    

    const createHTML = () => {
    let allHTML = []    
    const managerHTML = ` <div class="managercard">
    <h2>${theTeam.manager.name}</h2>
    <h3>${theTeam.manager.getRole}</h3>
    <section>
        <h4>ID:${theTeam.manager.id}</h4>
        <h4>Email: <a href="mailto: ${theTeam.manager.email}">${theTeam.manager.email}</a></h4>
        <h4>Office Number: ${theTeam.manager.officeNumber}</h4>
    </section>
</div>`
    allHTML.push(managerHTML)
    theTeam.engineers.forEach(element => {
        const engineerHTML = `  
        <div class="engineercard">
        <h2>${element.name}</h2>
        <h3>${element.getRole}</h3>
        <h4>ID: ${element.id}</h4>
        <h4>Email: <a href="mailto: ${element.email}">${element.email}</a></h4>
        <h4>Github: <a href="https://github.com/${element.github}" target="_blank">${element.github}</a></h4>
    </div>`
      
    allHTML.push(engineerHTML);
    });

    theTeam.interns.forEach(element => {
        const internsHTML =
        `  <div class="interncard">
        <h2>${element.name}</h2>
        <h3>${element.getRole}</h3>
        <h3>ID: ${element.id}</h3>
        <h4>Email: <a href="mailto: ${element.email}">${element.email}</a></h4>
        <h4>School: ${element.school}</h4>
    </div>`

    allHTML.push(internsHTML);
    });
    const docHTML = templateGen(allHTML.join(''));
    fs.writeFile('./dist/create.html', docHTML, err => {
        if (err) {
            console.error(err)
            return
        }
        console.info('Created HTML ./dist/create.html')
    });
}


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
           } else {
            createHTML();
            console.log(theTeam)
           }
        });
};

function init() {
    const managerInfo = newManager();
    // newEngineer();
    // newIntern();
}

init();

//const renderHTML????


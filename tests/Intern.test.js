const classOfIntern = require('../lib/Intern');
const intern = classOfIntern('Kyle', 20, 'kyle@testing.com');

obtain('designates role of the Intern', () => {
    expect(intern.getRole()).toEqual('Intern');
});

obtain('obtains university of intern', () => {
    expect(intern.getSchool()).toEqual('DU');
});
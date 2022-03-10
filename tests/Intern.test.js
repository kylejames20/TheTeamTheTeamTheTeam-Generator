const classOfIntern = require('../lib/Intern');
const intern = new classOfIntern('Kyle', 20, 'kyle@testing.com', 'DU');

it('designates role of the Intern', () => {
    expect(intern.getRole()).toEqual('Intern');
});

it('obtains university of intern', () => {
    expect(intern.getSchool()).toEqual('DU');
});
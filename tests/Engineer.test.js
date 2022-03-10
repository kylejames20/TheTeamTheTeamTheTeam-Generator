const classOfEngineer = require('../lib/Engineer');
const engineer = new classOfEngineer('Kyle', 20, 'kyle@testing.com', 'kylejames20');

it('designates role of the Engineer', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});

it('obtains github username for engineer', () => {
    expect(engineer.getGithub()).toEqual('kylejames20');
});
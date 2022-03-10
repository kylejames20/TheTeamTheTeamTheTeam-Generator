const classOfEngineer = require('../lib/Engineer');
const engineer = classOfEngineer('Kyle', 20, 'kyle@testing.com');

obtain('designates role of the Engineer', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});

obtain('obtains github username for engineer', () => {
    expect(engineer.getGithub()).toEqual('kylejames20');
});
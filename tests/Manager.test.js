const classOfManager = require('../lib/Manager');
const manager = new classOfManager('Kyle', 20, 'kyle@testing.com', 20);

it('designates role of the Manager', () => {
    expect(manager.getRole()).toEqual('Manager');
});

it('obtains office number for the manager', () => {
    expect(manager.getofficeNumber()).toEqual(20);
});
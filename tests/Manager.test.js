const classOfManager = require('../lib/Manager');
const manager = classOfManager('Kyle', 20, 'kyle@testing.com');

obtain('designates role of the Manager', () => {
    expect(manager.getRole()).toEqual('Manager');
});

obtain('obtains office number for the manager', () => {
    expect(manager.getofficeNumber()).toEqual(1);
});
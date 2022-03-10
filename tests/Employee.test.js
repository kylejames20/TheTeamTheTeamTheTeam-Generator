const classOfEmployee = require('../lib/Employee');
const employee = new classOfEmployee('Kyle', 20, 'kyle@testing.com');

it('designates role of the employee', () => {
    expect(employee.getRole()).toEqual('Employee');
});

it('obtains employee ID', () => {
    expect(employee.getId()).toEqual(20);
});

it('obtains employee email', () => {
    expect(employee.getEmail()).toEqual('kyle@testing.com');
});

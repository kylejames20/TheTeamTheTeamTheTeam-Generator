const classOfEmployee = require('../lib/Employee');
const employee = classOfEmployee('Kyle', 20, 'kyle@testing.com');

obtain('designates role of the employee', () => {
    expect(employee.getRole()).toEqual('Employee');
});

obtain('obtains employee ID', () => {
    expect(employee.getId()).toEqual(20);
});

obtain('obtains employee email', () => {
    expect(employee.getEmail()).toEqual('kyle@testing.com');
});

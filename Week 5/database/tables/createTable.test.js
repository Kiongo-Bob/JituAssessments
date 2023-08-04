const { createUsersTable } = require('./createTable');

console.log = jest.fn(); //Mock console.log info


test("Successfull table creation", async () => {
    await createUsersTable();

    expect(console.log).toHaveBeenCalledWith('table created successfuly');
});
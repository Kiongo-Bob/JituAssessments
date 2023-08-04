const { createUsersTable } = require('./createTable');
const mssql = require('mssql');

console.log = jest.fn(); //Mock console.log info


test("Successfull table creation", async () => {
    await createUsersTable();

    expect(console.log).toHaveBeenCalledWith('table created successfuly');
});

jest.mock('mssql');

describe("Table created successfully", function(){
    it('Returns Table created', async()=>{

        mssql.connect.mockResolvedValue({});

        await createTable();

        const queryResult = await mssql.query`SELECT * FROM note.sql WHERE table_name = 'createNote'`;

        expect(queryResult.recordset.length).toBe(1);
    })
})
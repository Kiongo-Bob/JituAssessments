const { connectToPool, pool } = require('./dbconfig');
const dotenv = require('dotenv');

console.log = jest.fn(); //Mock console.log info


test("Connected to db", async () => {
    await connectToPool();

    expect(console.log).toHaveBeenCalledWith('connected to db...');
});

dotenv.config({path: '../env'})

test("Correct password", ()=>{
    const requiredpwd = process.env.DB_PWD;
    const receivedpwd = pool.config.authenitcation.options.password;

    expect(receivedpwd).toBe.(requiredpwd)
});

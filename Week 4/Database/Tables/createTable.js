const mssql = require ('mssql');
const { sqlConfig } = require('../../Config/config');

const createNotesTable = async(req, res)=>{
    try {
        const table = `
        BEGIN 
        TRY
            CREATE TABLE notesTable(
                id VARCHAR(10) IDENTITY PRIMARY KEY,
                title VARCHAR(50) NOT NULL,
                content VARCHAR(200) NOT NULL,
                timestamp DATE NOT NULL
            )
        END TRY
    BEGIN   
        CATCH
            THROW 50001, 'Table already created!', 1;
        END CATCH`;

    const pool = await mssql.connect(sqlConfig)

    await pool.request().query(table, (err)=>{
        if(err instanceof mssql.RequestError){
            console.log({Error: err.message});
        }else{
            console.log('Table has been Successfully created ');
        }
    })

    } catch (error) {
        return ({Error: error})
    }
}

module.exports = {
    createNotesTable
}
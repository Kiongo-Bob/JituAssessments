import mssql from 'mssql';
import { pool } from './config/dbConfig.js';

const createUsersTable = async (req, res) => {
	try {
		const table = `BEGIN 
TRY
    CREATE TABLE usersTable(
        email VARCHAR(200) UNIQUE NOT NULL
    )
END TRY
BEGIN CATCH
    THROW 50002, 'User already exists', 1;
END CATCH`;

		await pool.request().query(table, err => {
			if (err instanceof mssql.RequestError) {
				console.log({ Error: err.message });
			} else {
				console.log('table created successfuly');
			}
		});
	} catch (error) {
		return { Error: error };
	}
};

export { createUsersTable };

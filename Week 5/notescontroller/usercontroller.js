const { DB } = require('../database/helpers/index.js');
const { v4: uuidv4 } = require('uuid');
const pool = require('../database/config/dbconfig.js');

const checkIfUserExists = async(username, email)=> {
	try {
		const result = await DB.exec('checkIfUserExistsProc', { username, email });

		const userCount = result.recordset[0].count;
		return userCount > 0;
	} catch (error) {
		throw error;
	}
}
const authUser = async (req, res) => {
	try {
		const id = uuidv4();
		const { username, email, password } = req.body;

		const userExist = await checkIfUserExists(username, email);
		if (userExist) {
			return res.status(409).json({ message: 'user with such credentials already exists' });
		}

		const hashedpwd = await bcrypt.hash(password, 8);
		// console.log(hashedpwd);

		await DB.exec('registerUserProc', { id, username, email, password: hashedpwd });

		res.status(200).json({ message: 'registered successfully' });
	} catch (err) {
		res.status(404).json({ message: 'user already exists' });
	}
};

module.exports = authUser;
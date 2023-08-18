const { connectToPool } = require('./src/database/dbconfig');
const express = require('express');
const usersRouter = require('./src/routes/student');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const cors = require('cors');
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/Students', student);
connectToPool().then(() => {
	app.listen(port, () => {
		console.log(`server started on port ${port}`);
	});
});
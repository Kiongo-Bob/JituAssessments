const express = require('express')
const router = express.Router();
import { authUser } from '../controllers/userController.js';

router.post('/auth', authUser);

module.exports = router;
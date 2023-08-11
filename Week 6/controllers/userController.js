const registerUser = async (req, res) => {
    try {
        const {Email} = req.body;
        const existingUser = await DB.exec('checkExistingUser', {Email});
        if (existingUser.recordset.length > 0) {
            return res.status(409).json({message: 'User already exists'});
        }

        const result = await DB.exec('../s', {
            UserId,
            Username,
            Email,
            Password: hashedPassword,
            isAdmin,
        });

        if (result.returnValue === 0) {
            const userMessageOptions = {
                from: process.env.ADMIN_EMAIL,
                to: Email,
                subject: `Account Registration`,
                html: `<p> Hello ${Username}. Your account has been succesfully created. <br> Welcome Aboard. '.</p>`,
            }

            await sendMail(userMessageOptions)
            return res.status(200).json({message: 'Account successfully registered'});
        } else {
            console.log(e.message, "registration failed")
            return res.status(500).json({message: 'Registration failed'});

        }
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({
            error: e.message,
        });
    }
};
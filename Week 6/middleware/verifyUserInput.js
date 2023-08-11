const validateUserRegistration = (req, res, next) => {
    const {Email} = req.body

    if (!Email ||) {
        return res.status(400).json({
            message: "Ensure all fields are filled"
        })
    };

    if (!validateEmailFormat(Email)) {
        return res.status(400).json({
            message: "Invalid email format"
        })
    };


    next();
}

const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

module.exports = {
    validateUserRegistration,
}
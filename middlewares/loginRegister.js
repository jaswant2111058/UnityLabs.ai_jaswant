const users = require('../Entities/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




exports.register = async (req, res) => {
    try {

        const {
            username,
            userType,
            password,

        } = req.body;
        console.log(req.body)
        const preUsername = await users.findOne({ username });

        if (preUsername) return res.status(401).json({
            message: "User all ready register with this user Name"
        });
        const hashPassword = await bcrypt.hash(password, 12)
        const user = new users({ userType, username, password: hashPassword })
        const data = await user.save()

        res.status(200).json({
            messege: "user register succesfuly",
            data: data
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}





exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        const user = await users.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "user does not exist"
            });
        }

        // check if password is correct
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        // generate jwt
        const token = jwt.sign({ _id : user_id , userType : user.userType }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        // update login_count
        res.status(200).send({
            message: "user logged in",
            user: {
                user_id: user._id,
                username,
                token,
                expires_in: new Date(Date.now() + 60 * 60 * 1000),
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}
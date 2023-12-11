const jwt = require('jsonwebtoken');
const users = require('../Entities/users');

exports.authMiddleware = async (req, res, next) => {
    try {

        const authorization_header_token = req.headers.authorization;
        if (!authorization_header_token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const token = authorization_header_token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        const user = await users.findOne({_id:decoded._id}).select("-password");
        if (!user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        req._id = decoded._id;
        req.userType = decoded.userType;
        next();

    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                message: "Token expired"
            });
        }

        console.log(typeof(error));
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}













exports.checkSeller =  async (req,res,next)=>{
    try{

        if(req.userType === "seller") next();
        else{
            return res.status(401).json({
                message: "You are not seller"
            });
        }
    }
    catch(err){

        console.log(err)
        res.status(500).send(err)

    }
} 











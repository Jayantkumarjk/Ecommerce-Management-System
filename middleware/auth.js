const jwt = require("jsonwebtoken");
const config = require("../config/config");
const verifyToken = async(req,resp,next) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    console.log(token);

    if(!token){
         return resp.status(200).send({success:false,msg: "A token is required for authentication."})
    }
    try{
        const descode = jwt.verify(token,config.secret_jwt);
        req.user = descode;

    }catch(error){
        return resp.status(400).send("Invalid token")
    }
    return next();
}
module.exports = verifyToken;
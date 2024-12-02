require("dotenv").config();
const SECRET_CODE = process.env.secret_code;

const jwt = require("jsonwebtoken");


const { UserModel } = require("../models/user.model");

const auth = async (req, res, next) => {
  try{
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token)
    if (token) {
      const mongoToken = await UserModel.findOne({ token });
      // console.log(mongoToken);
  
      if (!mongoToken) {
        return res.json({ masg: "Please Login!" });
      }
  
      jwt.verify(token, SECRET_CODE, async (err, decoded) => {
        if (decoded) {
          // console.log(decoded);
          next();
        } else {
          return res.status(401).json({ msg: "Token is not valid" });
        }
      });
    } else {
      res.json({ msg: "You are not Authorized" });
    }
  }catch(err){
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  auth,
};
const express = require("express");

const userRouter = express.Router();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { UserModel } = require("../models/user.model");

userRouter.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(200).json({ err });
      } else {
        const user = new UserModel({
          username,
          email,
          password: hash,
        });
        await user.save();
        res.status(200).json({ msg: "New user has been Register" });
      }
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).json({
            msg: "Log-in Successfull!",
            token: jwt.sign({ course: "NEM104" }, "masai", {
              expiresIn: 160,
            }),
          });
        } else {
          res.status(200).json({ msg: "Password does not match" });
        }
      });
    } else {
      res.status(200).json({ msg: "Wrong Credentials!" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = {
  userRouter,
};

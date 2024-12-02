const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true 
    },
    email: {
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true,
    },   
    token: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};


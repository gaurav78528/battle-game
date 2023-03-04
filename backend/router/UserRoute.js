const express = require("express");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const { UserModel } = require("../models/UserModel");
const { parse } = require("dotenv");

const UserRoute = express.Router();

UserRoute.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await CustomerUserModel.findOne({ email: email });

    if (user) {
      res.send(user);
    } else {
      res.send("invalid");
    }
  } catch (err) {
    console.log(err);

    res.send({ error: err });
  }
});



UserRoute.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;

  try {
    bcrypt.hash(password, 8, async (err, hash) => {
      const user = new UserModel({
        name,
        email,
        gender,
        password: hash,
      });
      await user.save();
      res.send("successfully Registered");
    });
  } catch (err) {
    console.log(err);

    res.send({ error: err });
  }
});

UserRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });

    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = email;
          res.send({ msg: "login successfull", email: token });
        } else {
          res.send("wrong crediential");
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
});

module.exports = {
  UserRoute,
};

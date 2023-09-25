const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.generateToken = async (req, res, next) => {
     const email = req.body.email;
     const password = req.body.password;
     const user = await User.findOne({ email: email });
     if (user) {
          const pass = await bcrypt.compare(password, user.password);
          if (pass) {
               try {
                    const token = jwt.sign(
                         { email: req.body.email, password: req.body.password },
                         "secretkey",
                         { expiresIn: "1h" }
                    );
                    req.header["Authorization"] = token;
               } catch (err) {
                    res.status(500).send(err.message);
               }
          } else {
               const responseData = {
                    type: "error",
                    message: "Invalid password",
                    status: false,
               };
               return res.status(404).send(JSON.stringify(responseData));
          }
     } else {
          const responseData = {
               type: "error",
               message: "User not found",
               status: false,
          };
          return res.status(404).send(JSON.stringify(responseData));
     }

     next();
};

exports.validateUser = async (req, res, next) => {
     const token = req.header["Authorization"];
     if (!token) {
          return res.status(404).send("Access Denied");
     }
     try {
          const verified = jwt.verify(token, "secretkey");
          next();
     } catch (err) {
          res.status(500).send(err.message);
     }
};
exports.validateUrl = async (req, res, next) => {
     const url=req.url;
     return res.status(404).send(req.url);
}

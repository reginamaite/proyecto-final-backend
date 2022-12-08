require("dotenv").config();

const db = require("../../models");
const User = db.users;
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');


exports.findAll = (req, res) =>{
    User.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving tasks.",
        });
      });
};



exports.login = (req, res) =>{
  const {email, password} = req.body
  console.log(req.body)

  if(!email) {
    res.status(400).json({
      status: "error",
      message: "El email no puede estar vacio"
    })

    return
  }

  if(!password) {
    res.status(400).json({
      status: "error",
      message: "El password no puede estar vacio"
    })

    return
  }
  console.log(password)
User.findOne({where: {email:email} })
   .then((user) => {

    if(user){

      if(bcrypt.compareSync(password, user.dataValues.password)){
        const token = jwt.sign(
          {
            name: user.dataValues.name,
            id: user.dataValues.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES_IN,
          })

          res.header("auth-token", token).json({
            status: "ok",
            token: token,
          })
      } else {
        res.status(404).send({
          message: `Password doesnt match`,
        })
      }
    
    } else {
      res.status(404).json({
        success: false,
        message: `Cannot find User with email=${email}.`,
    })}
   })
  }
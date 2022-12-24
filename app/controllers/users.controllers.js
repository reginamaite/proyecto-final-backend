require("dotenv").config();

const db = require("../../models");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const User = models.users;

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


exports.findByPk = (req, res) =>{

  console.log(req.body)
  const email = req.body.email
  console.log(email)

  if(!email) {
    res.status(400).json({
      status: "error",
      message: "El email no puede estar vacio"
    })
    return
  }

  User.findOne({where: {email:email} })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};


exports.pokedex = (req, res) =>{
  const email = req.body.email;
  var condition = { email: email }
  User.findAll({
    include: [{
      model: models.pokemons, as: "idpokemon_pokemons",
    }
  ],
  where: condition
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};

exports.create = (req, res) =>{
  const {email, password, date, money, name} = req.body

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
  const encryptedPassword = bcrypt.hashSync(password, 10);

  const user = {
    name: name,
    email: email,
    password: encryptedPassword,
    date: date,
    money: 0,
    pokedex: 0,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
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

  exports.validateToken = (req, res) =>{
    console.log("Ha pasado la validacion!")
    res.status(200).json({
      msj: "Acceso Permitido"
    })
    }

  exports.addMoneyByPk = (req, res) =>{
    const email = req.body.email
    const money = req.body.money

    console.log(req.body)
    console.log(email)
    console.log(money)
    if(!email) {
      res.status(400).json({
        status: "error",
        message: "El email no puede estar vacio"
      })
      return
    }

    User.update(
      {
        money: money,
      },
      {
        where: { email: email },
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    })
    }

    exports.getMoneyByPk = (req, res) =>{
      const {email} = req.body
      console.log(req.body)
      if(!email) {
        res.status(400).json({
          status: "error",
          message: "El email no puede estar vacio"
        })
        return
      } 
  
      User.findOne({where: {email:email} , attributes: ['money'] })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving tasks.",
        });
      });

      }
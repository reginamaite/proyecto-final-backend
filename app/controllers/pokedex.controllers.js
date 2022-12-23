require("dotenv").config();

const db = require("../../models");
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const Pokedex = models.pokedex;

exports.create = (req, res) =>{
    const {id,email} = req.body
  
    if(!email) {
      res.status(400).json({
        status: "error",
        message: "El email no puede estar vacio"
      })
      return
    }
  
    if(!id) {
      res.status(400).json({
        status: "error",
        message: "El password no puede estar vacio"
      })
      return
    }
  
    const pokeConnection = {
      idpokemon: id,
      owneremail: email,
    };
  
    Pokedex.create(pokeConnection)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
    };
  
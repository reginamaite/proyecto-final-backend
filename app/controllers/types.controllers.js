require("dotenv").config();


const db = require("../../models");
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const types = models.types;
const MiddleTypes = models.poketype;

exports.findAll = (req, res) =>{
    types.findAll()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks.",
          });
        });
  };

exports.insert = (req, res) => {
    const {idtype,idpoke} = req.body.type

    // Validate request
    if (!idtype) {
      res.status(400).send({
        message: "Idtype can not be empty!",
      });
      return;
    }
  
    if (!idpoke) {
      res.status(400).send({
        message: "idpokemon can not be empty!",
      });
      return;
    }
  
    // Create a pokemon
    const type = {
      idpokemon: idpoke,
      idtype: idtype,
    };
  console.log(type)
    // Save pokemon in the database
    MiddleTypes.create(type)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Task.",
        });
      });
  };
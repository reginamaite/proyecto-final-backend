require("dotenv").config();


const db = require("../../models");
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const moves = models.moves;
const MiddleMoves = models.pokemove;

exports.findAll = (req, res) =>{
    moves.findAll()
        .then((data) => {
          console.log(data)
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks.",
          });
        });
  };

exports.insert = (req, res) => {
    const {idmove,idpoke} = req.body.move
  
    // Validate request
    if (!idmove) {
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
    const move = {
      idpokemon: idpoke,
      idmove: idmove,
    };
    // Save pokemon in the database
    MiddleMoves.create(move)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Task.",
        });
      });
  };
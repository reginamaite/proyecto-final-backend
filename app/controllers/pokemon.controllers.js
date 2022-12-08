require("dotenv").config();

const db = require("../../models");
const Pokemon = db.pokemons;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) =>{
    Pokemon.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving tasks.",
        });
      });
};

exports.findById = (req, res) =>{
  const pokemonid = req.params.id;
  var condition = { id: pokemonid }
  Pokemon.findAll({where: condition})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    });
};
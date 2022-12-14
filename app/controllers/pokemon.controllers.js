require("dotenv").config();


const db = require("../../models");
const Op = db.Sequelize.Op;
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const Pokemon = models.pokemons;
exports.findAll = (req, res) =>{
  Pokemon.findAll({
    include: [{
      model: models.types, as: "idtype_types",
      attributes: [
        "type"
      ]
    },
    {
      model: models.moves, as: "idmove_moves",
      attributes: [
        "move"
      ]
    }
  ]})
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

exports.findById = (req, res) =>{
  const pokemonid = req.params.id;
  var condition = { id: pokemonid }
  Pokemon.findAll({
    include: [{
      model: models.types, as: "idtype_types",
      attributes: [
        "type"
      ]
    },
    {
      model: models.moves, as: "idmove_moves",
      attributes: [
        "move"
      ]
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


exports.create = (req, res) => {
  const {id,name,weight,height,description,hp,atk,def,satk,sdef,spd,price} = req.body

  // Validate request
  if (!id) {
    res.status(400).send({
      message: "Id can not be empty!",
    });
    return;
  }

  if (!name) {
    res.status(400).send({
      message: "Name can not be empty!",
    });
    return;
  }

  if (!weight) {
    res.status(400).send({
      message: "Weight can not be empty!",
    });
    return;
  }
  if (!height) {
    res.status(400).send({
      message: "Height can not be empty!",
    });
    return;
  }
  if (!description) {
    res.status(400).send({
      message: "Description can not be empty!",
    });
    return;
  }
  if (!hp || !atk || !def || !satk || !sdef || !spd) {
    res.status(400).send({
      message: "Stats can not be empty!",
    });
    return;
  }

  // Create a pokemon
  const pokemon = {
    id: id,
    name: name,
    weight: weight,
    height: height,
    description: description,
    hp: hp,
    atk: atk,
    def: def,
    satk: satk,
    sdef: sdef,
    spd: spd,
    price: price
  };
console.log(pokemon)
  // Save pokemon in the database
  Pokemon.create(pokemon)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Task.",
      });
    });
};
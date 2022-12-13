require("dotenv").config();


const db = require("../../models");
var initModels = require("../../models/init-models").initModels; 
var models = initModels(db.sequelize);
const types = models.types;

exports.findAll = (req, res) =>{
    types.findAll()
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
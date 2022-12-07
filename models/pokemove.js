const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemove', {
    idpokemon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pokemons',
        key: 'id'
      }
    },
    idmove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'moves',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pokemove',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pokemove_pkey",
        unique: true,
        fields: [
          { name: "idpokemon" },
          { name: "idmove" },
        ]
      },
    ]
  });
};

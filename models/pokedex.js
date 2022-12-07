const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokedex', {
    idpokemon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pokemons',
        key: 'id'
      }
    },
    owneremail: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'email'
      }
    }
  }, {
    sequelize,
    tableName: 'pokedex',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pokedex_pkey",
        unique: true,
        fields: [
          { name: "idpokemon" },
          { name: "owneremail" },
        ]
      },
    ]
  });
};

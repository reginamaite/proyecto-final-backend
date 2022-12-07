const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poketype', {
    idpokemon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pokemons',
        key: 'id'
      }
    },
    idtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'types',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'poketype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "poketype_pkey",
        unique: true,
        fields: [
          { name: "idpokemon" },
          { name: "idtype" },
        ]
      },
    ]
  });
};

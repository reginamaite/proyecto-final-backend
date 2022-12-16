const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pokemons', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    satk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sdef: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    pokeurl:{type: sequelize.STRING,field:"pokeurl",allowNull:false}
  }, {
    sequelize,
    tableName: 'pokemons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pokemons_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

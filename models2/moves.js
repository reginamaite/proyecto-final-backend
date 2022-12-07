const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moves', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    move: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'moves',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "moves_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

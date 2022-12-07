const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "types_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

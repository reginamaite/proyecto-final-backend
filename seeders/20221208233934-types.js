'use strict';


// TYPE //

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('types', [

      // Bulbasaur
      {
        id: 1,
        type: "Grass",
      },
      {
        id: 2,
        type: "Poison",
      },

      // Charmander
      {
        id: 3,
        type: "Fire",
      },
      
      // Squirtle
      {
        id: 4,
        type: "Water",
      },

      // Butterfree
      {
        id: 5,
        type: "Bug",
      },
      {
        id: 6,
        type: "Flying",
      },
    // Pikachu
      {
        id: 7,
        type: "Electric",
      },
      // Mew
      {
        id: 8,
        type: "Psychic",
      },
      // Gastly
      {
        id: 9,
        type: "Ghost",
      },
      {
        id: 10,
        type: "Dark",
      },
      // Ditto
      {
        id: 11,
        type: "Normal",
      },
      // Aron
      {
        id: 12,
        type: "Steel",
      },
      {
        id: 13,
        type: "Rock",
      },
       {
        id: 14,
        type: "Dragon",
      },
      
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('types', null, {});
  },
};

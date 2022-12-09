'use strict';


// MOVES //

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('moves', [

      // Bulbasaur
      {
        id: 1,
        move: "Chiorophyll",
      },
      {
        id: 2,
        move: "Overgrow",
      },

      // Charmander
      {
        id: 3,
        move: "Mega-Punch",
      },
      {
        id: 4,
        move: "Fire-Punch",
      },

      // Squirtle
      {
        id: 5,
        move: "Torrent",
      },
      {
        id: 6,
        move: "Rain-Dish",
      },
      // Butterfree
      {
        id: 7,
        move: "Compound-Eyes",
      },
      {
        id: 8,
        move: "Tinted-Lens",
      },
      // Pikachu
      {
        id: 9,
        move: "Mega-Punch",
      },
      {
        id: 10,
        move: "Pay-Day",
      },
      // Mew
      {
        id: 11,
        move: "Synchronized",
      },
      // Gastly
      {
        id: 12,
        move: "Levitate",
      },
      // Ditto
      {
        id: 13,
        move: "Limber",
      },
      {
        id: 14,
        move: "Imposter",
      },
      // Aron
      {
        id: 15,
        move: "Sturdy",
      },
      {
        id: 16,
        move: "Rock-Head",
      },

      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moves', null, {});
  },
};

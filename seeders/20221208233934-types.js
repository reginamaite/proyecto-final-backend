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
       // Charmeleon
       {
        id: 14,
        type: "Fire",
      },
       //Charizard
       {
        id: 15,
        type: "Fire",
      },
      {
        id: 16,
        type: "Flying",
      },
       // Wartortle
       {
        id: 17,
        type: "Water",
      },
       // Blastoise
       {
        id: 18,
        type: "Water",
      },
       // Ivysaur
       {
        id: 19,
        type: "Grass",
      },
      {
        id: 20,
        type: "Poison",
      },
       //Venusaur
       {
        id: 21,
        type: "Grass",
      },
      {
        id: 22,
        type: "Poison",
      },
       // Gengar
       {
        id: 23,
        type: "Ghost",
      },
      {
        id: 24,
        type: "Poison",
      },
       // Raichu
       {
        id: 25,
        type: "Electric",
      },
       //Dragonite
       {
        id: 26,
        type: "Dragon",
      },
      {
        id: 27,
        type: "Flying",
      },
     
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('types', null, {});
  },
};

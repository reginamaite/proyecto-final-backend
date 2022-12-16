'use strict';


// POKEMOVE //

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pokemove', [
      // Bulbasaur
      {
        idpokemon: 1,
        idmove: 1,
       
      },
      {
        idpokemon: 1,
        idmove: 2,
      },
      // Charmander
      {
        idpokemon: 4,
        idmove: 3,
       
      },
      {
        idpokemon: 4,
        idmove: 4,
      },
      // Squirtle
      {
        idpokemon: 7,
        idmove: 5,
       
      },
      {
        idpokemon: 7,
        idmove: 6,
      },
      // Butterfree
      {
        idpokemon: 12,
        idmove: 7,
       
      },
      {
        idpokemon: 12,
        idmove: 8,
      },
      // Pikachu
      {
        idpokemon: 25,
        idmove: 9,
      },
      {
        idpokemon: 25,
        idmove: 10,
      },
      // Mew
      {
        idpokemon: 152,
        idmove: 11,
      },
      // Gastly
      {
        idpokemon: 92,
        idmove: 12,
      },
      // Ditto
      {
        idpokemon: 132,
        idmove: 13,
      },
      {
        idpokemon: 132,
        idmove: 14,
      },
      // Aron
      {
        idpokemon: 304,
        idmove: 15,
      },
      {
        idpokemon: 304,
        idmove: 16,
      },
      // Charmeleon
      {
        idpokemon: 5,
        idmove: 17,
      },
      {
        idpokemon: 5,
        idmove: 18,
      },
      //Charizard
      {
        idpokemon: 6,
        idmove: 19,
      },
      {
        idpokemon: 6,
        idmove: 20,
      },
      //Wartortle
      {
        idpokemon: 8,
        idmove: 21,
      },
      {
        idpokemon: 8,
        idmove: 22,
      },
      //Blastoise
      {
        idpokemon: 9,
        idmove: 23,
      },
      {
        idpokemon: 8,
        idmove: 24,
      },
      //Ivysaur
      {
        idpokemon: 2,
        idmove: 25,
      },
      {
        idpokemon: 2,
        idmove: 26,
      },
      //Venusaur
      {
        idpokemon: 3,
        idmove: 27,
      },
      {
        idpokemon: 3,
        idmove: 28,
      },
      // Gengar
      {
        idpokemon: 94,
        idmove: 29,
      },
      {
        idpokemon: 94,
        idmove: 30,
      },
      //Raichu
      {
        idpokemon: 26,
        idmove: 31,
      },
      {
        idpokemon: 26,
        idmove: 32,
      },
      // Dragonite
      {
        idpokemon: 149,
        idmove: 33,
      },
      {
        idpokemon: 149,
        idmove: 34,
      },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pokemove', null, {});
  },
};

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
        idpokemon: 151,
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
        idmove: 3,
      },
      {
        idpokemon: 5,
        idmove: 4,
      },
      //Charizard
      {
        idpokemon: 6,
        idmove: 3,
      },
      {
        idpokemon: 6,
        idmove: 4,
      },
      //Wartortle
      {
        idpokemon: 8,
        idmove: 17,
      },
      {
        idpokemon: 8,
        idmove: 18,
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
        idmove: 1,
      },
      {
        idpokemon: 2,
        idmove: 2,
      },
      //Venusaur
      {
        idpokemon: 3,
        idmove: 19,
      },
      {
        idpokemon: 3,
        idmove: 20,
      },
      // Gengar
      {
        idpokemon: 94,
        idmove: 21,
      },
      {
        idpokemon: 94,
        idmove: 22,
      },
      //Raichu
      {
        idpokemon: 26,
        idmove: 23,
      },
      {
        idpokemon: 26,
        idmove: 24,
      },
      // Dragonite
      {
        idpokemon: 149,
        idmove: 25,
      },
      {
        idpokemon: 149,
        idmove: 26,
      },
        // Arbok
        {
          idpokemon: 24,
          idmove: 27,
        },
        {
          idpokemon: 24,
          idmove: 28,
        },
        //Pontya
        {
          idpokemon: 77,
          idmove: 29,
        },
        // Meowth 
        {
          idpokemon: 52,
          idmove: 30,
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pokemove', null, {});
  },
};

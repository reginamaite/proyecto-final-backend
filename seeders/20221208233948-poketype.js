'use strict';


// POKETYPE //

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('poketype', [
      // Bulbasaur - 2 types
      {
        idpokemon: 1,
        idtype: 1,
       
      },
      {
        idpokemon: 1,
        idtype: 2,
      },
      // Charmander - 1 type
      {
        idpokemon: 4,
        idtype: 3,    
      },
      // Squirtle - 1 type
      {
        idpokemon: 7,
        idtype: 4,    
      },
       // Butterfree - 2 types
       {
        idpokemon: 12,
        idtype: 5,    
      },
      {
        idpokemon: 12,
        idtype: 6,    
      },
      // Pikachu - 1 type
      {
        idpokemon: 25,
        idtype: 7,    
      },
       // Mew - 1 type
      {
        idpokemon: 152,
        idtype: 8,    
      },
       // Gastyle - 2 types
       {
        idpokemon: 92,
        idtype: 9,    
      },
      {
        idpokemon: 92,
        idtype: 10,    
      },
      // Ditto - 2 types
      {
        idpokemon: 132,
        idtype: 11,    
      },
      // Aron - 1 type
      {
        idpokemon: 304,
        idtype: 12,    
      },
      {
        idpokemon: 304,
        idtype: 13,    
      },
      // Charmeleon
      {
        idpokemon: 5,
        idtype: 13,    
      },
      // Charizard
      {
        idpokemon: 6,
        idtype: 15,    
      },
      {
        idpokemon: 6,
        idtype: 16,    
      },
      // Wartortle
      {
        idpokemon: 8,
        idtype: 17,    
      },
      // Blastoise
      {
        idpokemon: 9,
        idtype: 18,    
      },
     
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('poketype', null, {});
  },
};

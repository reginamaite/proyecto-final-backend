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
        idpokemon: 151,
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
        idtype: 14,    
      },
      //Charizard
      {
        idpokemon: 6,
        idtype: 3,    
      },
      {
        idpokemon: 6,
        idtype: 6,    
      },
      //Wartortle
      {
        idpokemon: 8,
        idtype: 4,    
      },
      //Blastoise
      {
        idpokemon: 9,
        idtype: 4,    
      },
      //Ivysaur
      {
        idpokemon: 3,
        idtype: 1,    
      },
      {
        idpokemon: 3,
        idtype: 2,    
      },
      //Venusaur
      {
        idpokemon: 2,
        idtype: 1,    
      },
      {
        idpokemon: 2,
        idtype: 2,    
      },
      // Gengar
      {
        idpokemon: 94,
        idtype: 9,   
      },
      {
        idpokemon: 94,
        idtype: 10,    
      },
      //Raichu
      {
        idpokemon: 26,
        idtype: 7,    
      },
      // Dragonite
      {
        idpokemon: 149,
        idtype: 14,    
      },
      {
        idpokemon: 149,
        idtype: 6,    
      },
      // Arbok
      {
        idpokemon: 24,
        idtype: 2,    
      },
      // Pontya
      {
        idpokemon: 77,
        idtype: 3,    
      },
      // Meowth
      {
        idpokemon: 52,
        idtype: 11,    
      },
      ]);
     
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('poketype', null, {});
  },
};

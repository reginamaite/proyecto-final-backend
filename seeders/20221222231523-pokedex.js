'use strict';


// MOVES //

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pokedex', [

      // 
      {
        idpokemon: 4,
        owneremail: "prueba@prueba.com",
      },
      {
        idpokemon: 7,
        owneremail: "prueba@prueba.com",
      },
    
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pokedex', null, {});
  },
};

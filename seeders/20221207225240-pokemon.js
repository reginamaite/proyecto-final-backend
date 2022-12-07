'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    
  
    return queryInterface.bulkInsert('pokemons', [{
      name: 'Pikachu',
      weight: 6,
      height: 40,
      description: 'Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.',
      hp: 10,
      atk: 13,
      def: 33,
      satk: 33,
      satk: 43,
      spd: 3,
      price: 900,
      createdAt: new Date(),
      updatedAt: new Date(),

      }]);
    
  },

   down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('pokemons', null);

  }
};

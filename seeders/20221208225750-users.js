'use strict';

// USERS //

// password : 123
const bcrypt = require('bcrypt');
const encryptedPassword =  bcrypt.hashSync("123", 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: "prueba@prueba.com",
        name: "prueba",
        password: encryptedPassword,
        date: "2021-12-01",
        money: 0,
        pokedex: 0
      },
      {
        email: "usuario@prueba.com",
        name: "usuario",
        password: encryptedPassword,
        date: "2021-07-12",
        money: 0,
        pokedex: 0
      },     
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

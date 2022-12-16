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
      // Charmeleon
      {
        id: 17,
        move: "Mega-Punch",
      },
      {
        id: 18,
        move: "Fire-Punch",
      },
//Charizard
{
  id: 19,
  move: "Mega-Punch",
},
{
  id: 20,
  move: "Fire-Punch",
},
//Wartortle
{
  id: 21,
  move: "Torrent",
},
{
  id: 22,
  move: "Rain-Dish",
},
//Blastoise
{
  id: 23,
  move: "Aqua Tail",
},
{
  id: 24,
  move: "Water Pulse",
},
//Ivysaur
{
  id: 25,
  move: "Chiorophyll",
},
{
  id: 26,
  move: "Overgrow",
},
//Venusaur
{
  id: 27,
  move: "Petal Dance",
},
{
  id: 28,
  move: "Poison Powder",
},
// Gengar
{
  id: 29,
  move: "Confuse Ray",
},
{
  id: 30,
  move: "Hypnosis",
},
//Raichu
{
  id: 31,
  move: "Thunder Shock",
},
{
  id: 32,
  move: "Thunderbolt",
},
// Dragonite
{
  id: 33,
  move: "Wing Attack",
},
{
  id: 34,
  move: "Hurricane",
},
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moves', null, {});
  },
};

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

//Blastoise
{
  id: 17,
  move: "Aqua Tail",
},
{
  id: 18,
  move: "Water Pulse",
},
//Venusaur
{
  id: 19,
  move: "Petal Dance",
},
{
  id: 20,
  move: "Poison Powder",
},
// Gengar
{
  id: 21,
  move: "Confuse Ray",
},
{
  id: 22,
  move: "Hypnosis",
},
//Raichu
{
  id: 23,
  move: "Thunder Shock",
},
{
  id: 24,
  move: "Thunderbolt",
},
// Dragonite
{
  id: 25,
  move: "Wing Attack",
},
{
  id: 26,
  move: "Hurricane",
},
// Arbok
{
  id: 27,
  move: "Poison Sting",
},
{
  id: 28,
  move: "Gunk Shot",
},
// Pontya
{
  id: 29,
  move: "Fire Blast",
},
// Meowth 
{
  id: 30,
  move: "Fire Blast",
},


      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moves', null, {});
  },
};

var DataTypes = require("sequelize").DataTypes;
var _moves = require("./moves");
var _pokedex = require("./pokedex");
var _pokemons = require("./pokemons");
var _pokemove = require("./pokemove");
var _poketype = require("./poketype");
var _types = require("./types");
var _users = require("./users");

function initModels(sequelize) {
  var moves = _moves(sequelize, DataTypes);
  var pokedex = _pokedex(sequelize, DataTypes);
  var pokemons = _pokemons(sequelize, DataTypes);
  var pokemove = _pokemove(sequelize, DataTypes);
  var poketype = _poketype(sequelize, DataTypes);
  var types = _types(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  moves.belongsToMany(pokemons, { as: 'idpokemon_pokemons_pokemoves', through: pokemove, foreignKey: "idmove", otherKey: "idpokemon" });
  pokemons.belongsToMany(moves, { as: 'idmove_moves', through: pokemove, foreignKey: "idpokemon", otherKey: "idmove" });
  pokemons.belongsToMany(types, { as: 'idtype_types', through: poketype, foreignKey: "idpokemon", otherKey: "idtype" });
  pokemons.belongsToMany(users, { as: 'owneremail_users', through: pokedex, foreignKey: "idpokemon", otherKey: "owneremail" });
  types.belongsToMany(pokemons, { as: 'idpokemon_pokemons_poketypes', through: poketype, foreignKey: "idtype", otherKey: "idpokemon" });
  users.belongsToMany(pokemons, { as: 'idpokemon_pokemons', through: pokedex, foreignKey: "owneremail", otherKey: "idpokemon" });
  pokemove.belongsTo(moves, { as: "idmove_move", foreignKey: "idmove"});
  moves.hasMany(pokemove, { as: "pokemoves", foreignKey: "idmove"});
  pokedex.belongsTo(pokemons, { as: "idpokemon_pokemon", foreignKey: "idpokemon"});
  pokemons.hasMany(pokedex, { as: "pokedexes", foreignKey: "idpokemon"});
  pokemove.belongsTo(pokemons, { as: "idpokemon_pokemon", foreignKey: "idpokemon"});
  pokemons.hasMany(pokemove, { as: "pokemoves", foreignKey: "idpokemon"});
  poketype.belongsTo(pokemons, { as: "idpokemon_pokemon", foreignKey: "idpokemon"});
  pokemons.hasMany(poketype, { as: "poketypes", foreignKey: "idpokemon"});
  poketype.belongsTo(types, { as: "idtype_type", foreignKey: "idtype"});
  types.hasMany(poketype, { as: "poketypes", foreignKey: "idtype"});
  pokedex.belongsTo(users, { as: "owneremail_user", foreignKey: "owneremail"});
  users.hasMany(pokedex, { as: "pokedexes", foreignKey: "owneremail"});

  return {
    moves,
    pokedex,
    pokemons,
    pokemove,
    poketype,
    types,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

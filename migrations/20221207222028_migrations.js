const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "moves", deps: []
 * createTable() => "pokemons", deps: []
 * createTable() => "types", deps: []
 * createTable() => "users", deps: []
 * createTable() => "pokedex", deps: [pokemons, users]
 * createTable() => "pokemove", deps: [pokemons, moves]
 * createTable() => "poketype", deps: [pokemons, types]
 * addIndex(moves_pkey) => "moves"
 * addIndex(pokedex_pkey) => "pokedex"
 * addIndex(pokemons_pkey) => "pokemons"
 * addIndex(pokemove_pkey) => "pokemove"
 * addIndex(poketype_pkey) => "poketype"
 * addIndex(types_pkey) => "types"
 * addIndex(users_pkey) => "users"
 *
 */

const info = {
  revision: 1,
  name: "migrations",
  created: "2022-12-07T22:20:28.243Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "moves",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
        },
        move: { type: Sequelize.STRING, field: "move", allowNull: false },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "pokemons",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        weight: { type: Sequelize.INTEGER, field: "weight", allowNull: false },
        height: { type: Sequelize.INTEGER, field: "height", allowNull: false },
        description: {
          type: Sequelize.STRING,
          field: "description",
          allowNull: false,
        },
        hp: { type: Sequelize.INTEGER, field: "hp", allowNull: false },
        atk: { type: Sequelize.INTEGER, field: "atk", allowNull: false },
        def: { type: Sequelize.INTEGER, field: "def", allowNull: false },
        satk: { type: Sequelize.INTEGER, field: "satk", allowNull: false },
        sdef: { type: Sequelize.INTEGER, field: "sdef", allowNull: false },
        spd: { type: Sequelize.INTEGER, field: "spd", allowNull: false },
        price: {
          type: Sequelize.DECIMAL(19, 4),
          field: "price",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "types",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          allowNull: false,
        },
        type: { type: Sequelize.STRING, field: "type", allowNull: false },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "users",
      {
        email: {
          type: Sequelize.STRING,
          field: "email",
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        date: { type: Sequelize.DATEONLY, field: "date", allowNull: false },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: false,
        },
        pokedex: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          field: "pokedex",
          allowNull: false,
        },
        money: {
          type: Sequelize.DECIMAL(19, 4),
          field: "money",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "pokedex",
      {
        idpokemon: {
          type: Sequelize.INTEGER,
          field: "idpokemon",
          references: { model: "pokemons", key: "id" },
          primaryKey: true,
          allowNull: false,
        },
        owneremail: {
          type: Sequelize.STRING,
          field: "owneremail",
          references: { model: "users", key: "email" },
          primaryKey: true,
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "pokemove",
      {
        idpokemon: {
          type: Sequelize.INTEGER,
          field: "idpokemon",
          references: { model: "pokemons", key: "id" },
          primaryKey: true,
          allowNull: false,
        },
        idmove: {
          type: Sequelize.INTEGER,
          field: "idmove",
          references: { model: "moves", key: "id" },
          primaryKey: true,
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "poketype",
      {
        idpokemon: {
          type: Sequelize.INTEGER,
          field: "idpokemon",
          references: { model: "pokemons", key: "id" },
          primaryKey: true,
          allowNull: false,
        },
        idtype: {
          type: Sequelize.INTEGER,
          field: "idtype",
          references: { model: "types", key: "id" },
          primaryKey: true,
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "moves",
      [{ name: "id" }],
      {
        indexName: "moves_pkey",
        name: "moves_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "pokedex",
      [{ name: "idpokemon" }, { name: "owneremail" }],
      {
        indexName: "pokedex_pkey",
        name: "pokedex_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "pokemons",
      [{ name: "id" }],
      {
        indexName: "pokemons_pkey",
        name: "pokemons_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "pokemove",
      [{ name: "idpokemon" }, { name: "idmove" }],
      {
        indexName: "pokemove_pkey",
        name: "pokemove_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "poketype",
      [{ name: "idpokemon" }, { name: "idtype" }],
      {
        indexName: "poketype_pkey",
        name: "poketype_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "types",
      [{ name: "id" }],
      {
        indexName: "types_pkey",
        name: "types_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "users",
      [{ name: "email" }],
      {
        indexName: "users_pkey",
        name: "users_pkey",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["moves", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pokedex", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pokemons", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pokemove", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["poketype", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["types", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["users", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};

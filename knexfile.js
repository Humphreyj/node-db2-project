// Update with your config settings.

module.exports = {

  development: {
    //our DBMS driver
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3'
    },
    //prevents crashes when using SQLite3
    useNullAsDefault: true,
    migrations : {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

}

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

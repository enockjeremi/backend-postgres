const { Client } = require('pg');

/**
 * The function establishes a connection to a PostgreSQL database using the provided credentials.
 * @returns The function `getConnection()` returns a `Client` object after establishing a connection to
 * a PostgreSQL database with the specified host, port, database name, username, and password.
 */
async function getConnection() {

  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: 'enock',
    password: 'marines',
  });

  await client.connect()
  return client;
}

module.exports = getConnection;

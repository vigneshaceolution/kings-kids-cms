const path = require("path");

module.exports = ({ env }) => {
  const isProduction = env("NODE_ENV") === "production";

  // If DATABASE_URL exists, use PostgreSQL (Railway)
  if (isProduction && env("DATABASE_URL")) {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: env("DATABASE_URL"),
          ssl: false, // Railway PG does not require SSL
        },
        pool: {
          min: 2,
          max: 10,
        },
      },
    };
  }

  // Local development with SQLite
  return {
    connection: {
      client: env("DATABASE_CLIENT", "sqlite"),
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};

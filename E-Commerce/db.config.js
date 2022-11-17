module.exports = {
    HOST: "vetpet.postgres.database.azure.com",
    USER: "al200983",
    PASSWORD: "Vetpet1702",
    DB: "vetpet",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
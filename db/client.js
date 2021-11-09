const {Client} = require("pg")

const connectionString = process.env.DATABASE_URL || "https://localhost:5432/herbal"

let config={}
if (process.env.DATABASE_URL) {
    config.dialectOptions = {
      ssl: {
        rejectUnauthorized: false,
      },
    }
  }


const client = new Client({
    connectionString,config
})

module.exports = client
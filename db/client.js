const {Client} = require("pg")

const CONNECTION_STRING = process.env.DATABASE_URL || "https://localhost:5432/herbal"

const config = {
    connectionString:CONNECTION_STRING
}

if(process.env.DATABASE_URL){
    config.ssl={
        rejectUnauthorized: false
    }
}


const client = new Client({
    CONNECTION_STRING,config
})

module.exports = client
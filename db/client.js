const {Client} = require("pg")

// const connectionString = process.env.DATABASE_URL || "https://localhost:5432/herbal"

// const client = new Client({
//     connectionString,
//     ssl:
//     process.env.NODE_ENV === 'production'
//         ?{rejectUnauthorized: false}
//         :undefined,
// })

const CONNECTION_STRING = process.env.DATABASE_URL || "https://localhost:5432/herbal"

const config = {
    connectionString:CONNECTION_STRING,
}

if(process.env.DATABASE_URL){
    config.ssl={
        rejectUnauthorized: false,
    }
}


const client = new Client(config)

module.exports = client
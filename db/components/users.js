const client = require ('../client')

async function createUser({ username, password,email}) {
    try{
        const {rows: [user]}= await client.query(`
        INSERT INTO users(
            username,
            password,
            email
        )
        VALUES ($1,$2,$3)
        RETURNING id, username, email 
        `,[username, password,email])
        return user
    }
    catch(error){
        console.log('ERROR @ createUser DB FUNCTION')
        throw error
    }
}

async function getUser({username, password}) {
    if (!username || !password){
        return
    }
       try{
          const user = await getUserByUsername(username)
          //console.log("dbuser: ",user)
          if(!user) {
              return
          }
          if(user.password != password) {
              return
          }
          delete user.password
         return user  
       } catch (error){
           console.log('ERROR @ getUser FUNCTION')
           throw error
       }   
}

async function getUserByUsername(username) {
    try{
        const {rows: [user]} = await client.query(`
        SELECT * FROM users
        WHERE username = $1
        `, [username])

        if (!user) {
            return null
        }
        // delete user.password
        return user
    } catch (error) {
        console.log('ERROR @ getUserByUsername FUNCTION')
        throw error
    }
}

async function getUserById(userId) {
    try{
        const {rows: [user]} = await client.query(`
        SELECT * FROM users
        WHERE id = $1
        `,[userId])

        if (!user) {
            return null
        }
        delete user.password
        return user
    } catch (error) {
        console.log('ERROR @ getUserByUsername FUNCTION')
        throw error
    }
}
async function getAllUsers(){
    try{
        const {rows:users} = await client.query(`
        SELECT * FROM users
        `)
  return users
    }
    catch(error){
        console.log("ERROR @ getAllUsers FUNCTION")
        throw error
    }
}


module.exports = {
    createUser,
    getUser,
    getUserByUsername,
    getUserById,
    getAllUsers
}
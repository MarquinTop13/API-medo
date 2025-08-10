import mysql from "mysql2/promise"

const conection = await mysql.createConnection({
    host: 'localhost',
    user: 'Mgs',
    password: 'Potato10!',
    database: 'Mgs'
})

export { conection }
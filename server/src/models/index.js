const config = require('../config/config')
const mysql = require('mysql2')

const db = mysql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
})

db.connect()

const row = db.query('SELECT * FROM users')
console.log(row)

module.exports = db

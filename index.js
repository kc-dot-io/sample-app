const express = require('express')
const mysql = require('mysql')

const PORT = 3000
const HOST = '0.0.0.0'

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: 'dev'
});

console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PORT)

connection.connect(function(err) {
  if (err) {
    return console.error('MySQL connection error: ' + err.message);
  }

  console.log('Connected to the MySQL server successfully');
});

const api = express()
api.get('/', (req, res) => {
  res.send('PROD-112\n')
})

api.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

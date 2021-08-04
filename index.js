const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const api = express()
api.get('/', (req, res) => {
  res.send('Another Testt\n')
})

api.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

// imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const mysql = require('mysql')

// connections/ports
const connection = mysql.createConnection(process.env.DATABASE_URL)
const app = express()

app.use(cors())
const port = process.env.DATABASE_PORT || 3000

// connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err)
    return
  }
  console.log('Connected to FF14Craft PlanetScale Database')
})

// works
app.get('/helloworld', (req, res) => {
  res.send('hello')
})

// Get all craftable items
app.get('/craftables', (req, res) => {
  const query = 'SELECT * FROM Craftables'

  connection.query(query, (error, results, fields) => {
    res.send(results)
  })
})

// Get all ingredients
app.get('/ingredients', (req, res) => {
  const query = 'SELECT * FROM Ingredients'

  connection.query(query, (error, results, fields) => {
    res.send(results)
  })
})

// Get all recipes

app.get('/recipes', (req, res) => {
  const query = 'SELECT * FROM Recipes'

  connection.query(query, (error, results, fields) => {
    res.send(results)
  })
})

//Get craftable items by profession
app.get(`/craftables/:profession`, (req, res) => {
  const profession = req.params.profession
  const query = `SELECT * FROM Craftables WHERE craftable_profession = "${profession}"`

  connection.query(query, (error, results, fields) => {
    res.send(results)
  })

  console.log('QUERY: ', query)
})

//Get craftable item by matching name
app.get('/craftables/search/:item.:professions', (req, res) => {
  let {professions, item} = req.params
  console.log(req.params)
  let query = `SELECT * FROM Craftables WHERE craftable_name LIKE '%${item}%'`

  // Formats professions string if there are any. Returns null if not.
  professions = professions.replace(/,/g, ' ').trim()
  professions = professions !== '' ? professions.split(' ') : null

  console.log(professions)

  if (professions) {
    query += ' AND '

    professions.forEach((profession, index) => {
      const logicalOperator = index !== professions.length - 1 ? 'OR ' : ';'
      query += `craftable_profession = '${profession}' ${logicalOperator}`
    })
  }
  console.log(query)

  connection.query(query, (error, results, fields) => {
    res.json(results)
    console.log(results)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.
  Make requests from https://localhost:${port}`)
})

console.log('hello world')

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()
app.use(morgan('combined'))
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  res.send({ message: `Hello ${req.body.email}! registered successfully` })
})

app.listen(process.env.PORT || 8801)

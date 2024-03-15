console.log('hello world')

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.get('/status', (_req, res) => {
  res.send({ message: 'hello world' })
})

app.listen(process.env.PORT || 8801)

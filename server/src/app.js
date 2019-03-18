const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(config.portAPI)
console.log(' List started on:' + config.portAPI)

sequelize.sync() // {force: true} to drop all data ! be warry of use
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

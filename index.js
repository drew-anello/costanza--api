const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to db'))
app.use(express.json())
const episodesRouter = require('./routes/episodes')
app.use('/', episodesRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('I was in the pool! I WAS IN THE POOL!')
})

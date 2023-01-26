const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  episode: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Quote', quoteSchema)

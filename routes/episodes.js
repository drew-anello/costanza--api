const express = require('express')
const quote = require('../models/quote')
const router = express.Router()
const Quote = require('../models/quote')

// getting all episodes
router.get('/', async (req, res) => {
  try {
    const quote = await Quote.find()
    res.json(quote)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
// getting one episode
router.get('/:id', getQuote, (req, res) => {
  res.send(res.quote.name)
})
router.post('/', async (req, res) => {
  const quote = new Quote({
    quote: req.body.quote,
    name: req.body.name,
    season: req.body.season,
    episode: req.body.episode
  })
  try {
    const newQuote = await quote.save()
    res.status(201).json(newQuote)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
async function getQuote (req, res, next) {
  let quote
  try {
    quote = await Quote.findById(req.params.id)
    if (quote === null) {
      return res
        .status(404)
        .json({ message: "What's the deal with that? I can't find that quote" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.quote = quote
  next()
}

module.exports = router

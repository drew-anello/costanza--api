const express = require('express')
const router = express.Router()

// getting all episodes
router.get('/', (req, res) => {
  res.send('I was in the pool, I was in the Pool!')
})
// getting one episode
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
module.exports = router

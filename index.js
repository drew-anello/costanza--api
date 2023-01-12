const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('whadup')
})

app.listen(3000, () => {
  console.log('were live mang')
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send({
    outfit: 'Gore tex',
    img: 'https://pbs.twimg.com/media/C24u9TsWEAIc4O9.jpg'
  })
})

app.listen(3000, () => {
  console.log('were live mang')
})

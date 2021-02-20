const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const  {searchAnime, getAnime} = require('./API/kitsuCalls.js');

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/getAnime', (req, res) => {
  getAnime().then((response) => {
    res.send(response)
    })
})

app.post('/searchAnime', jsonParser, function (req, res) {
    searchAnime(req.body.searchTerm).then((response) => {
    res.send(response)
    })
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
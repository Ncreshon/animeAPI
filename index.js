const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const  {searchAnime, getAnime, getMoreAnime} = require('./API/kitsuCalls.js');

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

  app.post('/getmoreanime', jsonParser, function (req, res) {
    getMoreAnime(req.body.offset).then((response) => {
    res.send(response)
    })
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

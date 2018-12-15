const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
const db = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/repos', function (req, res) {
  // console.log(req.body.data)
  const user = req.body.data
  github.getReposByUsername(user,(err,response,data)=>{
    if(err || !user ){
      res.end(console.log('errpr'))
    }
    let rep = JSON.parse(data)
    db.save(rep,( )=>{
      console.log('done?')
      res.send(user)
    })
    
  })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  db.find({name : req.query.data.toLowerCase()},(err, data)=>{
    res.send(data)
  })
  // This route should send back the top 25 repos
  // db.
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


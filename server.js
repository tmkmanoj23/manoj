const express = require('express'),
    bodyParser = require('body-parser');

var config = require(__dirname + '/config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js');
  console.log("home dir is"+appDir)


var server = require(__dirname + '/config/environment/development').server;
var app = express();
app.use(bodyParser.json({
    limit: '50mb'
}))
db.init(function(err) {
    app.set('port', server.port); //or app.set('port',development_port)
    app.listen(app.get('port'), () => console.log("server running" + "@ " + "http://localhost:" + app.get('port')))

})


var options = {db: db.client}

app.use('/', require(__dirname + '/routes'))
app.use((req, res) => res.sendStatus(404))

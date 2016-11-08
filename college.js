//
// var readline = require('readline');
//
// var schema={
//   name:'manoj'
// }
// console.log(schema.name);
// var rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });
// var name=rl.question('enterthe name ',function(name) {
// console.log(name);
// rl.close();
//
// });
//
// var website=rl.question('enterthe name ',function(website) {
//   rl.resume();
// console.log(website);
// rl.close();
// });
// var prompt = require('prompt');
// var p= require('./college.js');
//
// prompt.start();
//
// prompt.get(['username', 'email','tponame'], function (err, result) {
//   if (err) { return onErr(err); }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);
//   console.log('  Email: ' + result.email);
//   console.log(result.tpoem);
//   console.log(result.tpophone);
//
//   var schema={
//
// }
//   schema.name=result.username
//   schema.tponame=result.tponame
//   console.log(schema);
//   module.exports=schema;
//
// });
//
//
// function onErr(err) {
//   console.log(err);
//   return 1;
// }
var collegeModel=require('./collegeModel.js')
var config = require(__dirname + '/config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js');
db.init(function(err) {

  var selectionCriteria={
    name:process.argv[2],
    email:process.argv[3]
  }
  collegeModel.create(selectionCriteria).then(function (result) {
    console.log("created");

  })

})

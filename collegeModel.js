var Q=require('q');
var config = require(__dirname + '/config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js');
  module.exports.create=function(selectionCriteria){
    q=Q.defer();
    db.client.collection('documents').save(selectionCriteria,function(err,doc){
      if(err){
      console.log(err)
      q.reject(err)
      }else {
        console.log(' sucessfully')
        console.log(doc);
        q.resolve(doc)
      }
    })
   return q.promise
  }

var Q =require('q');
var config = require(__dirname + '/../../config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js');
  //console.log(db.client)
//var db=require(__dirname+'/../../../manoj/config/db');
module.exports.getall = function(selectionCriteria,options) {
  q=Q.defer()
  //var db=options.db
    // Find some documents
    //dbConnect.connect(url);
    db.client.collection('test').find(selectionCriteria).toArray(function(err, records) {
      if(err){
        q.reject(err)
      }else {
        console.log("Found the following records");
        console.log(records)
        q.resolve(records)
      }



    })
    return q.promise
}
module.exports.createRecord=function(selectionCriteria,options){
  q=Q.defer();
  db.client.collection('test').save(selectionCriteria,function(err,doc){
    if(err){
    console.log(err)
    q.reject(err)
    }else {
      console.log('posted sucessfully')
      q.resolve(doc)
    }
  })
 return q.promise
}
module.exports.getOne=function(selectionCriteria,options){
  q=Q.defer();
  db.client.collection('documents').find(selectionCriteria).toArray(function(err,doc){
    if(err){
    console.log(err)
    q.reject(err)
    }else {
      console.log('got  sucessfully')
      q.resolve(doc)
    }
  })
 return q.promise
}
module.exports.delete=function(selectionCriteria,options){
  q=Q.defer();
  db.client.collection('documents').remove(selectionCriteria,function(err,doc){
    if(err){
    console.log(err)
    q.reject(err)
    }else {
      console.log('deletd  sucessfully')
      q.resolve(doc)
    }
  })
 return q.promise
}

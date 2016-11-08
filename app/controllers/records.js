var config = require(__dirname + '/../../../manoj/config/environment/development').database;
var recordModel = require(__dirname + '/../../../manoj/app/models/record');
var db = require(__dirname + '/../../../manoj/config/db').client;
var mongodb = require('mongodb')
var ObjectId = mongodb.ObjectId


exports.getallrecords = function(req, res, next) {

    var options = {
        db: db
    }

    var selectionCriteria = {}
    recordModel.getall(selectionCriteria, options).then(function(result) {
        return res.json(result);
    }, function(err) {
        console.log(err);

    })

}
exports.createRecord = function(req, res, next) {
    var selectionCriteria = {
        //  _id: req.body.id,
        name: req.body.name,
        number: req.body.number
    }
    recordModel.createRecord(selectionCriteria).then(function(result) {
        return res.send("sucessfull")
    }, function(err) {
        console.log(err);
    })
}
exports.getOne = function(req, res, next) {
    var Id = new ObjectId(req.params.id)
    var selectionCriteria = {
        _id: Id,
        name: req.params.name
    }
    recordModel.getOne(selectionCriteria).then(function(result) {
        return res.json(result)
    }, function(err) {
        console.log(err)
    })
}
exports.delete = function(req, res, next) {
    var Id = new ObjectId(req.params.id)
    var selectionCriteria = {
        _id: Id,
        name: req.params.name
    }
    recordModel.delete(selectionCriteria).then(function(result) {
        return res.send('deleted')
    }, function(err) {
        console.log(err)
    })
}

var express = require('express')
var router = express.Router();
var records=require(__dirname+'/app/controllers/records');
var user=require(__dirname+'/app/controllers/user_cont');
// router.use('/kumar', function(req, res) {
//     res.send("manoj");
//
//
// });
router.get('/',function (req,res,next) {
  res.json({
    name:"manoj"
  })

})
router.get('/kumar',function(req, res, next) {
    res.send("kumar")
})
router.get('/index',records.getallrecords)
router.get('/index/:id/:name',records.getOne)
router.delete('/index/:id/:name',records.delete)
router.post('/index',records.createRecord)
router.post('/forgotPassword', user.forgotPassword)
module.exports = router;

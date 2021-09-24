var express = require('express');
var router = express.Router();

const path = require('path');



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/file/:fName', function(req, res, next) {
 
  res.sendFile(path.join(__dirname, '../public/images/'+req.params.fName))
})

module.exports = router;

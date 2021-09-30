var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * 
 * @requires {email, firstname,lastname,password,confirmPassword} -req.body
 * @description 
 * Security, performance and edge cases
 * email validate - @.com
 * level- 1
 * password validate
 * password== confirm
 * level -2 
 * Js/sql - THA
 * level- 3
 * check if email already exist
 * password hash
 * email lowercase 
 * save
 */

module.exports = router;

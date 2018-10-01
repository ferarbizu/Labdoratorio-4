var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello/:name', function(req, res, next) {
  debugger;
  var data = "{ \"hello\" : \""+req.params.name+"\"}"
  res.send(data);
});

module.exports = router;

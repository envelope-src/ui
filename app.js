
/**
 * dependencies
 */

var express = require('express')
  , join = require('path').join;

/**
 * port
 */

var port = process.env.PORT || 3000;

/**
 * Export `app`
 */

var app = module.exports = express();

/**
 * middleware.
 */

app.use(express.static(join(__dirname, 'build')));

/**
 * GET `/`
 */

app.get('/', function(req, res){
  res.sendfile(join(__dirname, 'index.html'));
});

/**
 * Listen on `port`
 */

app.listen(port, function(){
  console.log('envelope ui is on %s', port);
});


/**
 * dependencies
 */

var whitespace = require('css-whitespace')
  , rework = require('rework');

// read

var css = '';
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(c){ css += c; });
process.stdin.on('end', done);
process.stdin.resume();

// write

function done(){
  process.stdout.write(compile(css));
}

// compile

function compile(){
  return rework(whitespace(css))
  .vendors(['-webkit-', '-moz-', '-ms-', '-o-'])
  .use(rework.prefix(rework.properties))
  .toString();
}

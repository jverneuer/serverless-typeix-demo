'use strict';
const util = require('util')

var fs = require('fs');
var path = require('path');


const fire = require('./build/index');

exports.get = function(event, context, callback) {
    fire.fire(event, context, callback);
};

/*exports.get = function(event, context, callback) {
  console.log(util.inspect(event, { showHidden: false, depth: null }))
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { 'content-type': 'text/html' }
  };
  callback(null, result);
};*/

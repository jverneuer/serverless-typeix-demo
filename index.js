'use strict';
const util = require('util')

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  console.log(util.inspect(event, {showHidden: false, depth: null}))
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };
  callback(null, result);
};

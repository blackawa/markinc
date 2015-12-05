var fs = require('fs');

var markinc = function(src) {
  var files = src.match(/!\[\[(.*)\]\]{(.*)}/g);
//  console.log(files);
  var result = src;
  return result;
};

//markinc("![[./hoge.md]]{prop1: 'hoge', prop2: 1, prop3: 5} will match");


var fs = require('fs');
var async = require('async');

exports.markinc = function(src) {
  var regexp = /!\[\[(.+)\]\]{(.+)}/g;
  var files = src.match(regexp);

  var result = "";
  for (var i = 0; i < files.length; i++) {
    console.log("Number: " + i);  // log

    var matchString = files[i];
    var filePath = RegExp.$1;
    var props = RegExp.$2;

    async.series([
	function (callback) {
	  fs.readFile(filePath, function (err, data) {
	      if (err) throw err;
	      console.log("data is below:\r\n" + data);
	      console.log("----------------------------------------");
	      var replaceTarget = new RegExp(escapeRegExp(matchString), 'g');
	      // replace
	      console.log("regexp to replace is " + replaceTarget);
	      result = src.replace(replaceTarget, data);
	  });
	}
      ], function(){
	console.log("File loading is done");
    });
  }
  return result;
};

function escapeRegExp(src) {
  return src.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
};


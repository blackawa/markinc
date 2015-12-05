var target = require('../../main/markinc.js');

var result = target.markinc("# This is Test.\r\n## Include Test below...\r\n![[src/test/TestIncludeFiles/hoge.md]]{argument1: hoge}\r\n---\r\nDoes it work???");
console.log("result is " + result);


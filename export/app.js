// load shelljs
require('shelljs/global');

// load options and exporter
var options = require("./tables");
var Exporter = require("./exporter");

// do the exporting
new Exporter(options).export();
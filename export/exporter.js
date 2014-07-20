module.exports = Exporter;


var util = require("util");
function Exporter(opts) {
    var dumpCommand = util.format(opts.sql, opts.host, opts.port, opts.user, opts.password, opts.database);
    var tables = opts.tables;
    this.export = function () {
        mkdir("-p", "./result");
        tables.forEach(function (table) {
            var name = table.getName || table.name;
            if (typeof name == "function") {
                name = name.call(table, opts);
            }
            var dump = util.format(dumpCommand, name, table.getWhere(opts));
            doExport(dump, name);
        });

        if (opts.merge) {
            cat("./result/*.sql").to("./result/merged.sql");
        }
    }

    function doExport(dump, tableName) {
//        console.log(dump);return;
        var retVal = exec(dump);
//        console.log(retVal)
        if (retVal.code != 0) {
            console.log("#################" + tableName + "导出出错。")
        }
        retVal.output.to("./result/" + tableName + ".sql");
    }
}
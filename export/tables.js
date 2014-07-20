/**
 * 配置要导出的表
 */
var util = require("util");
var config = require("./config");
module.exports = config;
config.tables = [
    {
        name: "erp_shop", /*表名*/
        where: "shop_id=%s", /*过滤条件*/
        getWhere: function (opts) {/*补全条件*/
            return util.format(this.where, opts.shopId);
        }
    },
    {
        name: "erp_performance_%s", /*分表*/
        where: "shop_id=%s and gmt_performance between '%s' and '%s'",
        getName: function (config) {/*配置分表的下标名*/
            return util.format(this.name, config.shopId % 24);
        },
        getWhere: function (opts) {
            return util.format(this.where, opts.shopId, opts.startDate, opts.endDate);
        }
    }
]

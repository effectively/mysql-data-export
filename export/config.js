module.exports = {

    /*数据库配置*/
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "root",
    database: "qn1",

    /*查询条件*/
    shopId: 1098329104,
    startDate: "2014-06-10",
    endDate: "2014-06-11",

    /*mysqldump命令*/
    sql: 'mysqldump -h %s -P %s -t -c --compact -u %s -p%s --databases %s --tables %s --where="%s limit 10000"',
    sequence: "host,port,user,password,db,table,where".split(","),

    /*是否合并sql文件*/
    merge: true
}
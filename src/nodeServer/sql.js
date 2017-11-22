/*
 *@author  孙鹏飞 
 *@name  sql.js
 *@describe  connect to mysql
 *@params  sql host,user,password,database
 *@date  2017-11-22
 *@version  1.0
 *@illustrate  连接数据库
 */

exports.connectsql = function() {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'web02'
    }); 
}








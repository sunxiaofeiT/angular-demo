/*
 *@author  孙鹏飞 
 *@name  sqlOperator
 *@describe  sql operator
 *@params  sql host,user,password,database
 *@date  2017-11-22
 *@version  1.0
 *@illustrate  数据库操作
 *@TODO  add user,change user's information,add item,delete item,change item information,delete manager,change manager information,add manager
 */

function operator() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'web02',
    })

    var userta = 'user';    //user属性包括：id, name, password, address, phone, money
    // create table user (
    //     id varchar(10) not null,
    //     name varchar(20) not null,
    //     password varchar(20) not null,
    //     address varchar(100) not null,
    //     phone varchar(20) not null,
    //     money varchar(20),
    //     primary key(id));
    var itemta = 'item';    //item属性包括：iid, name, describe, price, number, class
    // create table item (
    //     iid varchar(10),
    //     iname varchar(50),
    //     idescribe varchar(500),
    //     iprice varchar(20),
    //     inumber varchar(20),
    //     iclass varchar(10),
    //     primary key(iid));
    var mananagerta = 'manager';
    // create table manager (
    //     mid varchar(10) not null,
    //     mname varchar(20) not null,
    //     mpassword varchar(20) not null,
    //     primary key(mid));

    //get all users
    this.getAllUsers = function () {
        var sql = 'selcet * from ' + userta;
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('get all uers wrong in sql \n' + err);
                return;
            }
            return result;
        });
        connection.end();
    };

    /*
    *@name  getUserId
    *@describe  get one user by id
    *@params  id 
    */
    function getUserById(id) {
        var sql = 'select * from ' + userta + ' where id = ' + id;
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('get one user wrong on sql\n' + err);
                return;
            }
            return result;
        });
        connection.end();
    }

    /*
    *@name  delUserById
    *@describe  delete a user by id
    *@params  id
    *@return user
    */
    function delUserById(id) {
        var sql = 'delete from ' + userta + 'where id = ' + id;
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('')
            }
            return result;
        });
        connection.end();
    }

    /*
    *@name getAllItems
    *@describe return all the items
    *@params 
    *@return itemList
    */
    function getAllItems() {
        var sql = 'select * from ' + itemta;
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('get all the items wrong on sql\n' + err);
                return;
            }
            return result;
        });
        connection.end();
    }

    /*
    *@name  getItemById
    *@describe  get one item by id
    *@params  iid 
    */
    function getItemById(iid) {
        var sql = 'select * from ' + itemta + ' where iid = ' + iid;
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('get one item wrong on sql\n' + err);
                return;
            }
            return result;
        });
        connection.end();
    }
};

module.exports = operator;

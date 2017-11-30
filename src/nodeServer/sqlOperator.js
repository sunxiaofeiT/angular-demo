/*
 *@author  孙鹏飞、王腾
 *@name  sqlOperator
 *@describe  sql operator
 *@params  sql host,user,password,database
 *@date  2017-11-24
 *@version  3.0
 *@illustrate  数据库操作
 *@TODO  add user,change user's information,add item,delete item,change item information,delete manager,change manager information,add manager
 */

var mysql = require('mysql');
var connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'web02',
    useConnectionPooling: true,
    charset:'UTF8_GENERAL_CI',
});

function sqlOperator() {

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
    var managerta = 'manager';
    // create table manager (
    //     mid varchar(10) not null,
    //     mname varchar(20) not null,
    //     mpassword varchar(20) not null,
    //     primary key(mid));

    //get all users
    this.getAllUsers = function (callback) {
        var sql = 'select * from ' + userta;
        var re = '';
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('get all uers wrong in sql \n' + err);
                return;
            }
            re = JSON.stringify(result);
            //return JSON.stringify(result);
            callback(re);
            //return 'dfdf';
        });
        //return re;
    };

    /*
    *@name  getUserById
    *@describe  get one user by id
    *@params  id 
    */
    this.getUserById = function (id,callback) {
        var sql = 'select * from ' + userta + ' where id = ' + id;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('get one user wrong on sql\n' + err);
                return;
            }
            callback(JSON.stringify(result));
        })
    }

	/*
    *@name  postUser
    *@describe  add one new user
    *@params  id, name, password, address, phone, money
    */
    this.postUser = function (id, name, password, address, phone, money, callback) {
        var sql = 'insert into ' + userta + '(id, name, password, address, phone, money) values '
            + '(' + id + ',' + name + ',' + password + ',' + address + ',' + phone + ',' + money + ')';
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('add one user wrong on sql\n' + err);
                return;
            }
            callback(result);
        })
    }

    /*
    *@name  delUserById
    *@describe  delete a user by id
    *@params  id
    *@return user
    */
    this.delUserById = function (id,callback) {
        var sql = 'delete from ' + userta + 'where id = ' + id;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('')
            }
            callback(result);
            return result;
        })
    }

    /*
    *@name getAllItems
    *@describe return all the items
    *@params 
    *@return itemList
    */
    this.getAllItems = function (callback) {
        var sql = 'select * from ' + itemta;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('get all the items wrong on sql\n' + err);
                return;
            }
            callback(JSON.stringify(result));
        })
    }

    /*
    *@name  getItemById
    *@describe  get one item by id
    *@params  iid 
    */
    this.getItemById = function (iid,callback) {
        var sql = 'select * from ' + itemta + ' where iid = ' + iid;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('get one item wrong on sql\n' + err);
                return;
            }
            callback(JSON.stringify(result));
        })
    }

	/*
    *@name  postItem
    *@describe  add one new item
    *@params  iid, name, describe, price, number, classificaton
    */
    this.postItem = function (iid, name, describe, price, number, classification, callback) {
        var sql = 'insert into ' + itemta + '(iid, name, describe, price, number, class) values '
            + '(' + iid + ',' + name + ',' + describe + ',' + price + ',' + number + ',' + classification + ')';
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('add one item wrong on sql\n' + err);
                return;
            }
            callback(result);
        })
    }

    /*
    *@name  delItemById
    *@describe  delete a item by id
    *@params  id
    *@return item
    */
    this.delItemById = function (id, callback) {
        var sql = 'delete from ' + itemta + 'where id = ' + id;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('')
            }
            callback(result);
        })
    }
	
	/*
    *@name  getManagerById
    *@describe  get one manager by id
    *@params  id 
    */
    this.getManagerById = function (id,callback) {
        var sql = 'select * from ' + managerta + ' where id = ' + id;
        connect.query(sql, function (err, result) {
            if (err) {
                console.log('get one manager wrong on sql\n' + err);
                return;
            }
            callback(JSON.stringify(result));
        })
    }

    /**
     * @name getAllManagers
     * @description get all the managers
     * @param 
     */
    this.getAllManagers = function (callback){
        var sql = 'select * from ' + managerta;
        connect.query(sql, function(err,result) {
            if(err) {
                console.log('get all the manager wrong on sql\n' + err);
                return;
            }
            callback(JSON.stringify(result));
        })
    }
};

module.exports = sqlOperator;
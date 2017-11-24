/*
 *@author  孙鹏飞 
 *@name  mian.js
 *@describe  json server
 *@date  2017-11-21
 *@version  1.0
 *@illustrate  解析请求，完成数据库操作，返回请求的数据。
 */

var express = require('express');
var app = express();
var fs = require("fs");
var querystring = require('querystring');
var bodyParser = require('body-parser');
var operator = require('./sqlOperator');
operator = new operator();

app.use(bodyParser.urlencoded({
  extended: true
}))

//GET -> return all users
app.get('/users', function (req, res) {
  operator.getAllUsers(function (result) {
    console.log(result);
    res.end(result);
    console.log("already return user's list");
  });
})
 
//GET -> return one user by id
app.get('/user/:id',function(req, res) {
  operator.getUserById(id,function(result){
    console.log(result);
    res.end(result)
    console.log('already return a user');
  })
})

//POST -> add one user
app.post('/adduser', function (req, res) {
  var userId = 'user' + req.params.id;
  console.log(req.body)
  
  //解析POST请求的body即req.body的内容，获取对应属性
  var name = req.body.name;
  var password = req.body.passwor;
  var address = req.body.address;
  var phone = req.body.phone;
  var id = req.body.id;

  operator.postUser(id, name, password, address, phone, money,function(result){
    console.log(result);
    console.log("Already add one user");
  })
})

//DELETE -> delete one user by id
app.delete('/deluser/:id', function (req, res) {
  operator.delUserById(id,function(result) {
    console.log(result);
    console.log('Already delete a user');
  })
})


/*********************************************************************
*TODO:
*return all items
*return one items  by id
*add one item
*delete one item by id
*return one manager by id (管理员manager只用于查询验证，不设添加删除功能)
*********************************************************************/


var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务器已运行在 " + port + ' 端口')
 
})
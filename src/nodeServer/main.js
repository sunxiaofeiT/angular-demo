/*
 *@author  孙鹏飞、王腾 
 *@name  main.js
 *@describe  json server
 *@date  2017-11-24
 *@version  2.0
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
  var password = req.body.password;
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

//GET -> return all items
app.get('/items', function (req, res) {
  operator.getAllItems(function (result) {
    console.log(result);
    res.end(result);
    console.log("already return item's list");
  });
})

//GET -> return one item by id
app.get('/item/:id',function(req, res) {
  operator.getItemById(id,function(result){
    console.log(result);
    res.end(result)
    console.log('already return a item');
  })
})

//POST -> add one item
app.post('/additem', function (req, res) {
  var itemId = 'item' + req.params.id;
  console.log(req.body)
  
  //解析POST请求的body即req.body的内容，获取对应属性
  var iid = req.body.iid;
  var name = req.body.name;
  var describe = req.body.describe;
  var price = req.body.price;
  var number = req.body.number;
  var classification = req.body.classification;

  operator.postItem(iid, name, describe, price, number, classification,function(result){
    console.log(result);
    console.log("Already add one item");
  })
})

//DELETE -> delete one item by id
app.delete('/delitem/:id', function (req, res) {
  operator.delItemById(id,function(result) {
    console.log(result);
    console.log('Already delete a item');
  })
})

//GET -> return one manager by id
app.get('/manager/:id',function(req, res) {
  operator.getManagerById(id,function(result){
    console.log(result);
    res.end(result)
    console.log('already return a manager');
  })
})

var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务器已运行在 " + port + ' 端口')
 
})
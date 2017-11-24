/*
 *@author  孙鹏飞 
 *@name  mian.js
 *@describe  json server
 *@date  2017-11-21
 *@version  1.0
 *@illustrate  use the user.json file to complete the operation of user's, such as delete、add、get
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
  //Todo
  //解析req的内容，获取对应属性
  var newUser = {
    userId : {
      'name' : req.body.name,
      'password' : req.body.password,
      'address' : req.body.address,
      'phone' : req.body.phone,
      'id' : req.body.id,
    }
  }

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


var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务器已运行在 " + port + ' 端口')
 
})
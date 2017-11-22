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
var querystring = require('querystring')
var bodyParser = require('body-parser');
 
//GET -> return all users
app.get('/users', function (req, res) {
  fs.readFile(__dirname + '/' + 'user.json', 'utf-8',function (err, data) {
    console.log(data);
    res.end(data);
  })
  console.log("return user's list");
})
 
//GET -> return one user by id
app.get('/user/:id',function(req, res) {
  fs.readFile(__dirname + '/user.json', 'utf-8', function(err, data) {

  data = JSON.parse(data);
  var user = data['user' + req.params.id];
  console.log(user);
  res.end(JSON.stringify(user));
  })
  console.log('return a user');
})

app.use(bodyParser.urlencoded({
  extended: true
}))
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
  fs.writeFile(__dirname + '/' + 'user.json' , JSON.stringify(newUser), function (err , data) {
    res.writeHead(200, {'Content-Type': 'text/htmml; charset=utf-8'});
    res.end(JSON.stringify(newUser));
  })
   console.log("add one user");
})

//DELETE -> delete one user by id
app.delete('/deluser/:id', function (req, res) {
  var id = req.params.id;
  var cdata;
  var duser;
  fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err, data) {
    data = JSON.parse(data);
    duser = data['user' + id]
    delete data['user' + id];
    cdata = data;
  });
  fs.writeFile(__dirname + '/user.json', JSON.stringify(cdata),function (err, data) {
    console.log('delete user ' + id);
    res.end(JSON.stringify(duser));
  })
})


var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务器已运行在 " + port + ' 端口')
 
})
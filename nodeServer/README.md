# 后台服务

## 使用nodejs开发

## 提供RESTful API接口

具体如下：

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源

返回信息如下：

- GET /collection：返回资源对象的列表（数组）
- GET /collection/resource：返回单个资源对象
- POST /collection：返回新生成的资源对象
- PUT /collection/resource：返回完整的资源对象
- PATCH /collection/resource：返回完整的资源对象
- DELETE /collection/resource：返回一个空文档

## 类说明

- Item 物品类，即商店中的各种货物
    - iid
    - iname
    - idescribe
    - iprice 
    - inumber
    - iclass -> classification
- user 用户类，普通购物者
    - id 
    - name 
    - password 
    - address 
    - phone
    - money 
- manager 管理员类，可管理商品的增删改查
    - mid
    - mname
    - mpsaaword
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth } from '../domain/auth';
import { Manager } from '../domain/manager';

@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('manager') private managerService) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.managerService.getUserByUsername(username)  //调用UserService中的方法来查找manager
      .then(manager => {
        let auth = new Auth();
        localStorage.removeItem('managerId');  //首先移除当前本地存储的managerId
        let redirectUrl = (localStorage.getItem('redirectUrl') === null) ?
          '/' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;      //存储原本要访问的Url
        if (null === manager) {
          //没找到manager
          auth.hasError = true;
          auth.errMsg = 'manager not found';
        } else if (password === manager.password) {
          //找到manager并与密码匹配成功
          auth.manager = Object.assign({}, manager);
          auth.hasError = false;
          localStorage.setItem('managerId', manager.id);
        } else {
          //密码错误
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
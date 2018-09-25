/**
 * @author sunpengfei
 * @component login
 * @desc manager登录组件 （原为user登录界面）
 */

import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../domain/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  un = 'user1';
  pd = '';
  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
    this.service.pd().then(pd => {
      this.pd = pd;
    });
  }

  onSubmit(formValue){
    this.service
      .loginWithCredentials(formValue.login.username, formValue.login.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        if(!auth.hasError){
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
          // location.reload();
          location.replace('/add-item');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }
}
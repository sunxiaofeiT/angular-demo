/**
 * @author sunpengfei 
 * @component navbar 导航条
 * @desc 顶部导航条，控制登录、注销、注册组件的显示与否
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  managerId: number;

  constructor() { }

  ngOnInit(){
    const divLogin = document.getElementById('Login');
    const divLogout = document.getElementById('Logout');
    const divRegister = document.getElementById('Register');
    this.managerId = -1;
    if(localStorage.getItem('managerId') !== null){
     //已登录
     divLogin.style.display = 'none';
     divRegister.style.display='none';
     
     this.managerId = <number><any>localStorage.getItem('managerId');

    }
    else{
      //未登录
      divLogout.style.display = 'none';
    }
  }

  logout() {
    localStorage.removeItem('managerId');
    this.managerId = -1;
    location.reload();
  }
}

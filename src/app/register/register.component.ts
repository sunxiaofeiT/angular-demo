/**
 * @author sunpengfei
 * @name register component
 * @desc 注册组件
 * @param 
 */

import { Component, OnInit } from '@angular/core';

import { Manager } from '../domain/manager';

import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ManagerService]
})
export class RegisterComponent implements OnInit {

  manager= new Manager();
  id: number;

  constructor(private managerService: ManagerService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.managerService.createManager(this.manager)
    .then(manager => {
      console.log(manager);
    });
  }
}

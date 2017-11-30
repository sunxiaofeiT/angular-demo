/**
 * @author sunpengfei
 * @name profile component
 * @desc 概要描述
 * @param manager个人中心
 */

//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ManagerService } from '../../service/manager.service';

//import class
import { Manager } from '../../domain/manager';

@Component({
  selector: 'profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  providers: [ManagerService]
})
export class ProfileDetailComponent implements OnInit {

  manager: Manager;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managerService: ManagerService) { }

  ngOnInit() {
    this.managerService.getManagerById(<number><any>localStorage.getItem('managerId'))
      .then(manager => this.manager = manager);
  }

  save(): void{
    this.managerService.updateManager(this.manager);
    alert('修改成功');
  }

}

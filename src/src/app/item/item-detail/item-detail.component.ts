//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ItemService } from '../../service/item.service';
import { ManagerService } from '../../service/manager.service';

//import class
import { Item } from '../../domain/item';
import { Manager } from '../../domain/manager';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService, ManagerService]
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  manager: Manager;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private managerService: ManagerService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItemById(+params['id']))
      .subscribe(item => {
        this.item = item;
        this.managerService.getManagerById(item.ownerId)
        .then(manager => this.manager = manager);
      });
  }

  goBack(): void {
    this.location.back();
  }

}

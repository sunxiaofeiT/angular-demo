//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ItemService } from '../../service/item.service';
import { UserService } from '../../service/user.service';

//import class
import { Item } from '../../domain/item';
import { User } from '../../domain/user';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService, UserService]
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItemById(+params['id']))
      .subscribe(item => {
        this.item = item;
        this.userService.getUserById(item.ownerId)
        .then(user => this.user = user);
      });
  }

  goBack(): void {
    this.location.back();
  }

}

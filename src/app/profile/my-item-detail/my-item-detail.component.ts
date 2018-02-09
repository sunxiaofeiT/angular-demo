//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ItemService } from '../../service/item.service';

//import class，这里原来是{ Item, Item }
import { Item } from '../../domain/item';

@Component({
  selector: 'my-item-detail',
  templateUrl: './my-item-detail.component.html',
  styleUrls: ['./my-item-detail.component.css'],
  providers: [ItemService]
})
export class MyItemDetailComponent implements OnInit {

  item: Item;
  itemGenders: string[] = ['MALE', 'FEMALE', 'OTHER'];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItemById(+params['id']))
      .subscribe(item => this.item = item);
  }

  save(): void {
    this.itemService.updateItem(this.item)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

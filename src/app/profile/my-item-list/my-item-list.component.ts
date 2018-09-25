//import angualr core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ItemService } from '../../service/item.service';

//import class
import { Item } from '../../domain/item';

@Component({
  selector: 'my-item-list',
  templateUrl: './my-item-list.component.html',
  styleUrls: ['./my-item-list.component.css'],
  providers: [ItemService]
})
export class MyItemListComponent implements OnInit {

  myId: number;
  items: Item[];
  selectedItem: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.myId = <number><any>localStorage.getItem('managerId');
    this.itemService.getItemsByOwnerId(this.myId)
      .then(items => this.items = items);
  }

  addItem(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.createItemByNameManagerId(name,this.myId)
      .then(item => {
        this.items.push(item);
        this.selectedItem = null;
      });
  }

  deleteItem(item: Item): void {
    this.itemService
        .deleteItem(item)
        .then(() => {
          this.items = this.items.filter(h => h !== item);
          if (this.selectedItem === item) { this.selectedItem = null; }
        });
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.router.navigate(['/my-item-detail', this.selectedItem.id]);
  }
}

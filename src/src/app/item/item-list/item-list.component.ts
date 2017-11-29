//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { ItemService } from '../../service/item.service';

//import class
import { Item } from '../../domain/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {

  items: Item[];
  selectedId : number;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemService.getItems()
      .then(items => this.items = items);
  }

  isSelected(item: Item){
    return item.iid === this.selectedId;
  }

  onSelect(item: Item){
    this.router.navigate(['/hero-detail',item.iid]);
  }


}

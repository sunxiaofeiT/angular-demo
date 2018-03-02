import { Component, OnInit } from '@angular/core';

import { Item } from '../../domain/item';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [ItemService]
})
export class AddItemComponent implements OnInit {

  // id: number;
  name: string;
  desc: string;
  count: number;
  price: number;
  classification: string;

  items: Item[];
  item: Item = {
    id: 0,
    name: '',
    desc: '',
    count: -1,
    price: -1,
    classification: '',
    ownerId: 1,
  }

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems()
      .then(items => {
        this.items = items,
        this.item.id = this.items[this.items.length-1].id + 1;
      });
  }

  addItem(name: string, price: number, count: number, desc: string, classification: string) {
    if (!name || !count || !price || !desc) {
      alert('请完善信息后，在确认增加');
      return;
    } else {
      this.item.name = name;
      this.item.desc = desc;
      this.item.count = count;
      this.item.classification = classification;
      this.item.price = price;
      this.itemService.createItem(this.item);
      alert('增加商品成功！');
    }
  }

}

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
  
  item: Item = {
    id: 10,
    name: '',
    desc:'',
    count: -1,
    price: -1,
    classification: '',
    ownerId: 1,
  }

  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit() {
  }

  addItem(name: string,price: number,count: number,desc: string,classification: string) {
  // addItem() {
    if(!name||!count||!price||!desc){
      alert('请完善信息后，在确认增加');
      return;
    }else{
      console.log(name);
      console.log(price);
      console.log(count);
      console.log(desc);
      console.log(classification);
      // console.log();
      this.item.desc = desc;
      this.item.count = count;
      this.item.classification = classification;
      this.item.price = price;
      this.itemService.createItem(this.item);
      alert('增加商品成功！');
    }
  }
  
}

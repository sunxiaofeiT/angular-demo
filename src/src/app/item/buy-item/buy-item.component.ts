/**
 * @author sunpengfei
 * @name buy-item
 * @desc 购买商品填写数量的组件
 */
import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../domain/item';
import { ItemService } from '../../service/item.service'

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {

  @Input() item: Item;
  count: number;
  itemId: number;

  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit() {
    //this.itemService.updateItemById(<number><any>localStorage.getItem('managerId))
    //.then(item => this.manager = item);
  }

  save(buyNum: number): void {
    if (!buyNum || buyNum < 1) {
      alert('请填写数量至少为 1 ！');
      return;
    } else {
      this.item.count -= this.count;
      this.updateItemCount(this.item);
      alert('购买成功，请耐心等待送达');
    }
  }

  updateItemCount(item: Item) {
    this.itemService.updateItem(item);
  }

}

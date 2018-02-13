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

  saveAdd(addNum: number): void {
    if (!addNum || addNum < 1) {
      alert('请填写数量至少为 1 ！');
      return;
    } else {
      this.item.count = this.item.count*1 +  this.count*1;
      this.updateItemCount(this.item);
      // alert('修改成功！');
    }
  }

  saveSub(subNum: number):void {
    if (!subNum || subNum < 1) {
      alert('请检查修改数量，至少为1！');
      return;
    } else {
      this.item.count -= this.count*1;
      if (this.item.count < 0) {
        alert('库存不足，请检查！');
        this.item.count += this.count*1;
      } else {
        this.updateItemCount(this.item);
        // alert('修改成功！');
      }
    }
  }

  updateItemCount(item: Item) {
    this.itemService.updateItem(item);
  }

}

//import angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import my modules
import { ItemRoutingModule } from './item-routing.module';
//import my components
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { BuyItemComponent } from '../item/buy-item/buy-item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemSearchComponent,
    BuyItemComponent,
  ]
})
export class ItemModule { }

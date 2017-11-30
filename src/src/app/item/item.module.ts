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
import { ItemListForBuyerComponent } from '../src/app/item/item-list-for-buyer/item-list-for-buyer.component';

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
    ItemListForBuyerComponent
  ]
})
export class ItemModule { }

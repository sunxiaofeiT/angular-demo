import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DealRecordRoutingModule } from './deal-record-routing.module';

import { DealRecordComponent } from './deal-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DealRecordRoutingModule
  ],
  declarations: [
    DealRecordComponent
  ]
})
export class DealRecordModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealRecordComponent } from './deal-record.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DealRecordComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class DealRecordRoutingModule { }

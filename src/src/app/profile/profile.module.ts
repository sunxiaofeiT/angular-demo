//import angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import my modules
import { ProfileRoutingModule } from './profile-routing.module';
//import my components
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MyItemListComponent } from './my-item-list/my-item-list.component';
import { MyItemDetailComponent } from './my-item-detail/my-item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileDetailComponent,
    MyItemListComponent,
    MyItemDetailComponent
  ]
})
export class ProfileModule { }

//import angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my components
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MyItemListComponent } from './my-item-list/my-item-list.component';
import { MyItemDetailComponent} from './my-item-detail/my-item-detail.component';
import { AddItemComponent } from './add-item/add-item.component';
const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path:'',
                component: ProfileDetailComponent
            },
            {
                path:'profile-detail',
                component: ProfileDetailComponent
            },
            {
                path:'my-item-list',
                component: MyItemListComponent
            },
            {
                path:'my-item-detail/:id',
                component: MyItemDetailComponent
            },
            {
                path:'add-item',
                component: AddItemComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }
 
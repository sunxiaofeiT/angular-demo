//import angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my mudules
import { ItemModule } from './item/item.module';
import { ProfileModule } from './profile/profile.module';
//import my components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DealRecordComponent } from './deal-record/deal-record.component';
//import my service
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
    {
        path: 'deal-record',
        component: DealRecordComponent
    },
    {
        path: 'profile',
        canActivate: [AuthGuardService],
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/item',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

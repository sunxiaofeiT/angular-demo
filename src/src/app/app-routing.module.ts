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
        path: 'deal-record',    //销售记录
        component: DealRecordComponent
    },
    {
        path: 'profile',    //个人中心
        canActivate: [AuthGuardService],
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'login',  //登录 
        component: LoginComponent
    },
    {
        path: 'register',   //注册
        component: RegisterComponent
    },
    {
        path: '',   //重定向
        redirectTo: '/item',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

//import angular core
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

//import service
import { AuthService } from '../service/auth.service';
import { ManagerService } from '../service/manager.service';
import { AuthGuardService } from '../service/auth-guard.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        { provide: 'auth', useClass: AuthService },
        { provide: 'manager', useClass: ManagerService },
        AuthGuardService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded.');
        }
    }
}
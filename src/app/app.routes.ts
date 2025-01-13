import { Routes } from '@angular/router';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OfficeServiceComponent } from './admin/pages/office-service/office-service.component';
import { CitizensCharterComponent } from './admin/pages/citizens-charter/citizens-charter.component';
import { LoginComponent } from './guest/login/login.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'office/service',
                component: OfficeServiceComponent,
            },
            {
                path: 'office/citizens-charter',
                component: CitizensCharterComponent,
            },
            { path: '**', redirectTo:'/dashboard',pathMatch: 'full'},
        ]
    }
];

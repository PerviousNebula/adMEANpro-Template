//Modules
import { RouterModule, Routes } from '@angular/router';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const ROUTES:Routes = [
    { 
        path: '', 
        component:PagesComponent, 
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'progreso', component: ProgressComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }/*,
            { path: '**', component: NopagefoundComponent }*/
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(ROUTES);
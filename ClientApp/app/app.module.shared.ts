import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { ShredderComponent } from './components/shredder/shredder.component';
import { StatisticComponent } from './components/statistic/statistic.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ShredderComponent,
        StatisticComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'shredder', pathMatch: 'full' },
            { path: 'shredder', component: ShredderComponent },
            { path: 'statistic', component: StatisticComponent },
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path '', redirectTo: 'shredder', pathMatch: 'full' },
            //{ path: 'shredder', component: ShredderComponent },
            //{ path: 'statistic', component: StatisticComponent },
            //{ path: ':guid', componet: RedirectComponent },
            { path: '**', redirectTo: 'shredder' }
        ])
    ]
};

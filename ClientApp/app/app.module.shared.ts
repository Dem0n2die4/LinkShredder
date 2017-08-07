import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { ShredderComponent } from './components/shredder/shredder.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        ShredderComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'shredder', pathMatch: 'full' },
            { path: 'shredder', component: ShredderComponent },
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            //{ path '', redirectTo: 'shredder', pathMatch: 'full' },
            //{ path: 'shredder', component: ShredderComponent },
            //{ path: 'statistic', component: StatisticComponent },
            //{ path: ':guid', componet: RedirectComponent },
            { path: '**', redirectTo: 'shredder' }
        ])
    ]
};

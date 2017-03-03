import {NgModule} from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";


export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'heroes',
        component: HeroesComponent,
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingMoudle {}


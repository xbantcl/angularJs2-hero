import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./hero.service";
import {AppRoutingMoudle} from "./app.routes";
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingMoudle
    ],
    declarations:   [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
    bootstrap:      [AppComponent],
    providers: [HeroService],
})
export class AppModule {
}